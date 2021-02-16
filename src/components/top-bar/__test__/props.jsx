import React from 'react';
import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cross.js';
import ArrowLeftSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-left.js';
import PersonSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/person.js';

const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad, provident aspernatur dolore. ';

/**
 * Создает обработчик клика.
 * @param {string} buttonPosition Название позиции кнопки.
 * @return {Function} Обработчик клика.
 */
const createClickHandler = buttonPosition => () => {
  // eslint-disable-next-line no-console
  console.log(`The click to the ${buttonPosition} button was handled`);
};

export const sizes = ['s', 'm', 'l'];

export const shortTitles = { title: 'Modal title', subtitle: 'Modal subtitle' };

export const longTitles = { title: longText.repeat(2), subtitle: longText.repeat(2) };

export const startButtons = {
  start: {
    icon: <ArrowLeftSVG />,
    onClick: createClickHandler('start'),
  },
  startSecondary: {
    icon: <PersonSVG />,
    onClick: createClickHandler('start secondary'),
  },
};

export const endButtons = {
  end: {
    icon: <CrossSVG />,
    onClick: createClickHandler('end'),
  },
  endSecondary: {
    icon: <PersonSVG />,
    onClick: createClickHandler('end secondary'),
  },
};

export const allButtons = {
  ...startButtons,
  ...endButtons,
};
