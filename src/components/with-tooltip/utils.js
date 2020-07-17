import boundsOf from '../helpers/bounds-of';
import { getScrollParent } from '../helpers/get-scroll-parent';
import { findOffsetParent } from '../helpers/find-offset-parent';

const SPACES = {
  correction: 24,
  toHolder: 8,
  toArea: 16,
};

/**
 * Преобразует css-значение размера в число.
 * @param {string} cssValue Значение, например "12.23px".
 * @return {number} Число. Неожиданно, правда?
 */
const asNumber = cssValue => parseFloat(cssValue.replace(/[A-z]/g, '')) || 0;

/**
 * Возвращает представление числового значения в пикселях.
 * @param {number} value Значение.
 * @return {string} Представление.
 */
export const asPx = value => Number.isFinite(value) ? `${value}px` : '0px';

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

export const Place = {
  reset: element => {
    element.style.top = null;
    element.style.left = null;
    element.style.bottom = null;
    element.style.right = null;
  },
  onRight: (tooltipEl, holderEl) => {
    const correction = getOriginCorrection(tooltipEl);

    tooltipEl.style.left = asPx(sum(
      SPACES.toHolder,
      boundsOf(holderEl).right,
      correction.x,
    ));
  },
  onLeft: (tooltipEl, holderEl) => {
    const correction = getOriginCorrection(tooltipEl);

    tooltipEl.style.left = asPx(sum(
      boundsOf(holderEl).left,
      -boundsOf(tooltipEl).width,
      -SPACES.toHolder,
      correction.x,
    ));
  },
  onBottom: (tooltipEl, holderEl) => {
    const correction = getOriginCorrection(tooltipEl);

    tooltipEl.style.top = asPx(sum(
      boundsOf(holderEl).bottom,
      SPACES.toHolder,
      correction.y,
    ));
  },
  onTop: (tooltipEl, holderEl) => {
    const correction = getOriginCorrection(tooltipEl);

    tooltipEl.style.top = asPx(sum(
      boundsOf(holderEl).top,
      -boundsOf(tooltipEl).height,
      -SPACES.toHolder,
      correction.y
    ));
  },
};

export const Correct = {
  vertically: (tooltipEl, holderEl, area) => {
    const tooltipBounds = boundsOf(tooltipEl);
    const holderBounds = boundsOf(holderEl);
    const correction = getOriginCorrection(tooltipEl);

    if (area.bottom - holderBounds.bottom > tooltipBounds.height + SPACES.correction) {
      tooltipEl.style.top = `${correction.y + holderBounds.top}px`;
    } else if (holderBounds.bottom - area.top > tooltipBounds.height + SPACES.correction) {
      tooltipEl.style.top = `${correction.y + holderBounds.bottom - tooltipBounds.height}px`;
    } else {
      tooltipEl.style.top = `${correction.y + SPACES.toArea}px`;
    }
  },
  horizontally: (tooltipEl, area) => {
    const correction = getOriginCorrection(tooltipEl);

    tooltipEl.style.left = `${correction.x + area.width - SPACES.toArea - boundsOf(tooltipEl).width}px`;
  },
};

/**
 * Позиционирует элемент подсказки относительно "держащего" элемента.
 * @param {Element} tooltipEl Элемент подсказки.
 * @param {Element} holderEl Держащий элемент.
 */
export const placeTooltip = (tooltipEl, holderEl) => {
  if (tooltipEl && holderEl) {
    const tooltipScrollParent = getScrollParent(tooltipEl);
    const area = boundsOf(tooltipScrollParent);

    Place.reset(tooltipEl);

    if (CanPlace.onRight(holderEl, tooltipEl, area)) {
      Place.onRight(tooltipEl, holderEl);
      Correct.vertically(tooltipEl, holderEl, area);
    } else if (CanPlace.onLeft(holderEl, tooltipEl, area)) {
      Place.onLeft(tooltipEl, holderEl);
      Correct.vertically(tooltipEl, holderEl, area);
    } else if (CanPlace.onBottom(holderEl, tooltipEl, area)) {
      Place.onBottom(tooltipEl, holderEl);
      Correct.horizontally(tooltipEl, area);
    } else if (CanPlace.onTop(holderEl, tooltipEl, area)) {
      Place.onTop(tooltipEl, holderEl);
      Correct.horizontally(tooltipEl, area);
    }

    tooltipEl.style.opacity = null;
    tooltipEl.style.visibility = null;
  }
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
