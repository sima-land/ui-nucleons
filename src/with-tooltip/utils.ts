import { boundsOf } from '../helpers/bounds-of';
import { getScrollParent } from '../helpers/get-scroll-parent';
import { findOffsetParent } from '../helpers/find-offset-parent';

type DOMRectLike = Record<(typeof rectKeys)[number], number>;

type CanPlaceFn = (holder: HTMLElement, tooltipEl: HTMLElement, area: DOMRectLike) => boolean;

const SPACES = {
  correction: 24, // сумма toHolder и toAreas
  toHolder: 8,
  toArea: 16,
} as const;

const rectKeys = ['top', 'left', 'bottom', 'right', 'width', 'height'] as const;

/**
 * Преобразует css-значение размера в число.
 * @param cssValue Значение, например "12.23px".
 * @return Число. Неожиданно, правда?
 */
const asNumber = (cssValue: string) => parseFloat(cssValue.replace(/[A-z]/g, '')) || 0;

/**
 * Складывает все аргументы.
 * @param  numbers Числа.
 * @return Число. Неожиданно, правда?
 */
const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b);

export const CanPlace: Record<'onRight' | 'onLeft' | 'onBottom' | 'onTop', CanPlaceFn> = {
  onRight: (holderEl, tooltipEl, area) =>
    area.right - boundsOf(holderEl).right - SPACES.correction > boundsOf(tooltipEl).width,
  onLeft: (holderEl, tooltipEl, area) =>
    boundsOf(holderEl).left - SPACES.correction - area.left > boundsOf(tooltipEl).width,
  onBottom: (holderEl, tooltipEl, area) =>
    boundsOf(tooltipEl).height < area.bottom - boundsOf(holderEl).bottom - SPACES.correction,
  onTop: (holderEl, tooltipEl, area) =>
    boundsOf(tooltipEl).height < boundsOf(holderEl).top - area.top - SPACES.correction,
};

export const PlaceOffset = {
  reset: (element: HTMLElement) => {
    element.style.top = '0';
    element.style.left = '0';
    element.style.bottom = '';
    element.style.right = '';
    element.style.maxHeight = '';
  },
  onRight: (tooltipEl: HTMLElement, holderEl: HTMLElement) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(SPACES.toHolder, boundsOf(holderEl).right, correction.x);
  },
  onLeft: (tooltipEl: HTMLElement, holderEl: HTMLElement) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(boundsOf(holderEl).left, -boundsOf(tooltipEl).width, -SPACES.toHolder, correction.x);
  },
  onBottom: (tooltipEl: HTMLElement, holderEl: HTMLElement) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(boundsOf(holderEl).bottom, SPACES.toHolder, correction.y);
  },
  onTop: (tooltipEl: HTMLElement, holderEl: HTMLElement) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(boundsOf(holderEl).top, -boundsOf(tooltipEl).height, -SPACES.toHolder, correction.y);
  },
};

export const CorrectOffset = {
  vertically: (tooltipEl: HTMLElement, holderEl: HTMLElement, area: DOMRectLike) => {
    const tooltipBounds = boundsOf(tooltipEl) as DOMRect;
    const holderBounds = boundsOf(holderEl) as DOMRect;
    const correction = getOriginCorrection(tooltipEl);

    let result;

    if (area.bottom - holderBounds.bottom > tooltipBounds.height + SPACES.correction) {
      result = correction.y + holderBounds.top;
    } else if (holderBounds.bottom - area.top > tooltipBounds.height + SPACES.correction) {
      result = correction.y + holderBounds.bottom - tooltipBounds.height;
    } else {
      result = correction.y + SPACES.toArea;
    }

    return result;
  },
  horizontally: (tooltipEl: HTMLElement, area: DOMRectLike) => {
    const correction = getOriginCorrection(tooltipEl);

    return correction.x + area.left + SPACES.toArea;
  },
};

/**
 * Позиционирует элемент подсказки относительно "держащего" элемента.
 * @param tooltipEl Элемент подсказки.
 * @param holderEl Держащий элемент.
 * @param viewportEl Элемент, определяющий прямоугольник в который нужно вписать тултип.
 */
export const placeTooltip = (
  tooltipEl: HTMLElement,
  holderEl: HTMLElement,
  viewportEl: HTMLElement,
) => {
  const area = getInnerRect(viewportEl);
  const offset = { x: 0, y: 0 };

  PlaceOffset.reset(tooltipEl);

  if (CanPlace.onRight(holderEl, tooltipEl, area)) {
    offset.x = PlaceOffset.onRight(tooltipEl, holderEl);
    offset.y = CorrectOffset.vertically(tooltipEl, holderEl, area);
  } else if (CanPlace.onLeft(holderEl, tooltipEl, area)) {
    offset.x = PlaceOffset.onLeft(tooltipEl, holderEl);
    offset.y = CorrectOffset.vertically(tooltipEl, holderEl, area);
  } else if (CanPlace.onBottom(holderEl, tooltipEl, area)) {
    offset.y = PlaceOffset.onBottom(tooltipEl, holderEl);
    offset.x = CorrectOffset.horizontally(tooltipEl, area);
  } else if (CanPlace.onTop(holderEl, tooltipEl, area)) {
    offset.y = PlaceOffset.onTop(tooltipEl, holderEl);
    offset.x = CorrectOffset.horizontally(tooltipEl, area);
  } else {
    offset.x = area.left + SPACES.toArea;
    offset.y = area.top + SPACES.toArea;
    tooltipEl.style.maxHeight = `${area.height - SPACES.toArea * 2}px`;
  }

  // вместо top/left/bottom/right используем translate3d, т.к. его расчет использует графический ускоритель
  tooltipEl.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
};

/**
 * Возвращает внутреннюю доступную область блока (с учетом прокруток).
 * @param element Элемент.
 * @return Прямоугольник.
 */
export const getInnerRect = (element: Element): DOMRectLike => {
  const bounds = boundsOf(element);

  const area: DOMRectLike = {
    top: bounds.top,
    left: bounds.left,
    bottom: bounds.bottom,
    right: bounds.right,
    width: bounds.width,
    height: bounds.height,
  };

  if (element.scrollWidth > area.width) {
    area.left = area.left - element.scrollLeft;
    area.width = element.scrollWidth;
    area.right = area.left + area.width;
  }

  if (element.scrollHeight > area.height) {
    area.top = area.top - element.scrollTop;
    area.height = element.scrollHeight;
    area.bottom = area.top + area.height;
  }

  return area;
};

/**
 * Получив элемент, вернет смещение, с которым можно задать координаты относительно левого верхнего угла страницы.
 * @param element Элемент, должен находиться в документе.
 * @return Смещение по осям.
 */
export const getOriginCorrection = (element: HTMLElement): { x: number; y: number } => {
  const offsetParent = findOffsetParent(element);
  const scrollParent = getScrollParent(element);
  const correction = { x: window.pageXOffset, y: window.pageYOffset };

  if (offsetParent) {
    const parentRect = boundsOf(offsetParent);
    const parentStyle = getComputedStyle(offsetParent);

    correction.x = -parentRect.left;
    correction.y = -parentRect.top;

    // border-[top/left] влияют на начало координат родителя, учитываем
    correction.x -= asNumber(parentStyle.borderLeftWidth);
    correction.y -= asNumber(parentStyle.borderTopWidth);
  }

  // если offsetParent имеет собственную прокрутку - учитываем её
  if (offsetParent === scrollParent) {
    correction.x += scrollParent.scrollLeft;
    correction.y += scrollParent.scrollTop;
  }

  return correction;
};
