import boundsOf from '../helpers/bounds-of';
import { getScrollParent } from '../helpers/get-scroll-parent';
import { findOffsetParent } from '../helpers/find-offset-parent';
import { pick } from 'lodash';

const SPACES = {
  correction: 24,
  toHolder: 8,
  toArea: 16,
};

const rectKeys = ['top', 'left', 'bottom', 'right', 'width', 'height'];

/**
 * Преобразует css-значение размера в число.
 * @param {string} cssValue Значение, например "12.23px".
 * @return {number} Число. Неожиданно, правда?
 */
const asNumber = cssValue => parseFloat(cssValue.replace(/[A-z]/g, '')) || 0;

/**
 * Складывает все аргументы.
 * @param  {...number} numbers Числа.
 * @return {number} Число. Неожиданно, правда?
 */
const sum = (...numbers) => numbers.reduce((a, b) => a + b);

export const CanPlace = {
  onRight: (
    holderEl,
    tooltipEl,
    area
  ) => area.right - boundsOf(holderEl).right - SPACES.correction > boundsOf(tooltipEl).width,
  onLeft: (
    holderEl,
    tooltipEl,
    area
  ) => boundsOf(holderEl).left - SPACES.correction - area.left > boundsOf(tooltipEl).width,
  onBottom: (
    holderEl,
    tooltipEl,
    area
  ) => boundsOf(tooltipEl).height < area.bottom - boundsOf(holderEl).bottom - SPACES.correction,
  onTop: (
    holderEl,
    tooltipEl,
    area
  ) => boundsOf(tooltipEl).height < boundsOf(holderEl).bottom - area.top - SPACES.correction,
};

export const PlaceOffset = {
  reset: element => {
    element.style.top = null;
    element.style.left = null;
    element.style.bottom = null;
    element.style.right = null;
  },
  onRight: (tooltipEl, holderEl) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(
      SPACES.toHolder,
      boundsOf(holderEl).right,
      correction.x,
    );
  },
  onLeft: (tooltipEl, holderEl) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(
      boundsOf(holderEl).left,
      -boundsOf(tooltipEl).width,
      -SPACES.toHolder,
      correction.x,
    );
  },
  onBottom: (tooltipEl, holderEl) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(
      boundsOf(holderEl).bottom,
      SPACES.toHolder,
      correction.y,
    );
  },
  onTop: (tooltipEl, holderEl) => {
    const correction = getOriginCorrection(tooltipEl);

    return sum(
      boundsOf(holderEl).top,
      -boundsOf(tooltipEl).height,
      -SPACES.toHolder,
      correction.y
    );
  },
};

export const CorrectOffset = {
  vertically: (tooltipEl, holderEl, area) => {
    const tooltipBounds = boundsOf(tooltipEl);
    const holderBounds = boundsOf(holderEl);
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
  horizontally: (tooltipEl, area) => {
    const correction = getOriginCorrection(tooltipEl);

    return correction.x + area.width - SPACES.toArea - boundsOf(tooltipEl).width;
  },
};

/**
 * Позиционирует элемент подсказки относительно "держащего" элемента.
 * @param {Element} tooltipEl Элемент подсказки.
 * @param {Element} holderEl Держащий элемент.
 */
export const placeTooltip = (tooltipEl, holderEl) => {
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

    tooltipEl.style.opacity = null;
    tooltipEl.style.visibility = null;

    // вместо top/left/bottom/right используем translate3d, т.к. его расчет использует графический ускоритель
    tooltipEl.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
  }
};

/**
 * Возвращает внутреннюю доступную область блока (с учетом прокруток).
 * @param {Element} element Элемент.
 * @return {Object} Прямоугольник.
 */
export const getInnerRect = element => {
  const area = pick(boundsOf(element), rectKeys);

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
 * @param {HTMLElement} element Элемент, должен находиться в документе.
 * @return {{ x: number, y: number }} Смещение по осям.
 */
export const getOriginCorrection = element => {
  const offsetParent = findOffsetParent(element);
  const scrollParent = getScrollParent(element);
  const correction = { x: pageXOffset, y: pageYOffset };

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
