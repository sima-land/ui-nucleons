import boundsOf from '../helpers/bounds-of';

const SPACES = {
  correction: 24,
  toHolder: 8,
  toArea: 16,
};

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
    tooltipEl.style.left = `${pageXOffset + boundsOf(holderEl).left + boundsOf(holderEl).width + SPACES.toHolder}px`;
  },
  onLeft: (tooltipEl, holderEl) => {
    tooltipEl.style.left = `${pageXOffset + boundsOf(holderEl).left - boundsOf(tooltipEl).width - SPACES.toHolder}px`;
  },
  onBottom: (tooltipEl, holderEl) => {
    tooltipEl.style.top = `${pageYOffset + boundsOf(holderEl).top + boundsOf(holderEl).height + SPACES.toHolder}px`;
  },
  onTop: (tooltipEl, holderEl) => {
    tooltipEl.style.top = `${pageYOffset + boundsOf(holderEl).top - boundsOf(tooltipEl).height - SPACES.toHolder}px`;
  },
};

export const Correct = {
  vertically: (tooltipEl, holderEl, area) => {
    const holderBounds = boundsOf(holderEl);
    const tooltipBounds = boundsOf(tooltipEl);

    if (area.bottom - holderBounds.bottom > tooltipBounds.height + SPACES.correction) {
      tooltipEl.style.top = `${pageYOffset + holderBounds.top}px`;
    } else if (holderBounds.bottom - area.top > tooltipBounds.height + SPACES.correction) {
      tooltipEl.style.top = `${pageYOffset + holderBounds.bottom - tooltipBounds.height}px`;
    } else {
      tooltipEl.style.top = `${SPACES.toArea}px`;
    }
  },
  horizontally: (tooltipEl, holderEl, area) => {
    tooltipEl.style.left = `${area.width - SPACES.toArea - boundsOf(tooltipEl).width}px`;
  },
};

/**
 * Позиционирует элемент подсказки относительно "держащего" элемента.
 * @param {Element} tooltipEl Элемент подсказки.
 * @param {Element} holderEl Держащий элемент.
 */
export const placeTooltip = (tooltipEl, holderEl) => {
  if (tooltipEl && holderEl) {
    const area = boundsOf(document.body);

    Place.reset(tooltipEl);

    if (CanPlace.onRight(holderEl, tooltipEl, area)) {
      Place.onRight(tooltipEl, holderEl);
      Correct.vertically(tooltipEl, holderEl, area);
    } else if (CanPlace.onLeft(holderEl, tooltipEl, area)) {
      Place.onLeft(tooltipEl, holderEl);
      Correct.vertically(tooltipEl, holderEl, area);
    } else if (CanPlace.onBottom(holderEl, tooltipEl, area)) {
      Place.onBottom(tooltipEl, holderEl);
      Correct.horizontally(tooltipEl, holderEl, area);
    } else if (CanPlace.onTop(holderEl, tooltipEl, area)) {
      Place.onTop(tooltipEl, holderEl);
      Correct.horizontally(tooltipEl, holderEl, area);
    }

    tooltipEl.style.opacity = null;
    tooltipEl.style.visibility = null;
  }
};
