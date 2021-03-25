import boundsOf from '../helpers/bounds-of';
import { getScrollParent } from '../helpers/get-scroll-parent';
import { findOffsetParent } from '../helpers/find-offset-parent';
import { pick } from 'lodash';

const SPACES = {
  correction: 24,
  toHolder: 8,
  toArea: 16,
};

const rectKeys = ['top', 'left', 'bottom', 'right', 'width', 'height'] as const;

type DOMRectLike = Record<(typeof rectKeys)[number], number>;

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

type CanPlaceFn = (holder: HTMLElement, tooltipEl: HTMLElement, area: DOMRectLike) => boolean;

export const CanPlace: Record<'onRight' | 'onLeft' | 'onBottom' | 'onTop', CanPlaceFn> = {
  onRight: (
    holderEl,
    tooltipEl,
    area
  ) => area.right - (boundsOf(holderEl) as any).right - SPACES.correction > (boundsOf(tooltipEl) as any).width,
  onLeft: (
    holderEl,
    tooltipEl,
    area
  ) => (boundsOf(holderEl) as any).left - SPACES.correction - area.left > (boundsOf(tooltipEl) as any).width,
  onBottom: (
    holderEl,
    tooltipEl,
    area
  ) => (boundsOf(tooltipEl) as any).height < area.bottom - (boundsOf(holderEl) as any).bottom - SPACES.correction,
  onTop: (
    holderEl,
    tooltipEl,
    area
  ) => (boundsOf(tooltipEl) as any).height < (boundsOf(holderEl) as any).bottom - area.top - SPACES.correction,
};

export const PlaceOffset = {
  reset: (element: HTMLElement) => {
    element.style.top = '';
    element.style.left = '';
    element.style.bottom = '';
    element.style.right = '';
  },
  onRight: (tooltipEl: HTMLElement, holderEl: HTMLElement) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(
      SPACES.toHolder,
      (boundsOf(holderEl) as any).right,
      correction.x
    );
  },
  onLeft: (tooltipEl: HTMLElement, holderEl: HTMLElement) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(
      (boundsOf(holderEl) as any).left,
      -(boundsOf(tooltipEl) as any).width,
      -SPACES.toHolder,
      correction.x
    );
  },
  onBottom: (tooltipEl: HTMLElement, holderEl: HTMLElement) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(
      (boundsOf(holderEl) as any).bottom,
      SPACES.toHolder,
      correction.y
    );
  },
  onTop: (tooltipEl: HTMLElement, holderEl: HTMLElement) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(
      (boundsOf(holderEl) as any).top,
      -(boundsOf(tooltipEl) as any).height,
      -SPACES.toHolder,
      correction.y
    );
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

    return correction.x + area.width - SPACES.toArea - (boundsOf(tooltipEl) as any).width;
  },
};

/**
 * Позиционирует элемент подсказки относительно "держащего" элемента.
 * @param tooltipEl Элемент подсказки.
 * @param holderEl Держащий элемент.
 */
export const placeTooltip = (tooltipEl: HTMLElement, holderEl: HTMLElement) => {
  if (tooltipEl && holderEl) {
    const scrollParent = getScrollParent(tooltipEl);
    const area = getInnerRect(scrollParent);
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
    }

    tooltipEl.style.opacity = '';

    // вместо top/left/bottom/right используем translate3d, т.к. его расчет использует графический ускоритель
    tooltipEl.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
  }
};

/**
 * Возвращает внутреннюю доступную область блока (с учетом прокруток).
 * @param element Элемент.
 * @return Прямоугольник.
 */
export const getInnerRect = (element: HTMLElement): DOMRectLike => {
  const area = pick(boundsOf(element), rectKeys) as DOMRectLike;

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
export const getOriginCorrection = (element: HTMLElement): { x: number, y: number } => {
  const offsetParent = findOffsetParent(element);
  const scrollParent = getScrollParent(element);
  const correction = { x: window.pageXOffset, y: window.pageYOffset };

  if (offsetParent) {
    const parentRect = boundsOf(offsetParent);
    const parentStyle = getComputedStyle(offsetParent);

    correction.x = -parentRect.left;
    correction.y = -parentRect.top;

    // border-[top/left] влияет на начало координат родителя, учитываем
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
