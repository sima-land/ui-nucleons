import React from 'react';
import Icon from '../../icon';
import crossIcon from '../../icons/cross-big.svg';
import leftIcon from '../../icons/full-left-arrow.svg';
import capIcon from '../../icons/image-cap.svg';

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
    icon: <Icon size={24} icon={leftIcon} />,
    onClick: createClickHandler('start'),
  },
  startSecondary: {
    icon: <Icon size={24} icon={capIcon} />,
    onClick: createClickHandler('start secondary'),
  },
};

export const endButtons = {
  end: {
    icon: <Icon size={24} icon={crossIcon} />,
    onClick: createClickHandler('end'),
  },
  endSecondary: {
    icon: <Icon size={24} icon={capIcon} />,
    onClick: createClickHandler('end secondary'),
  },
};

export const allButtons = {
  ...startButtons,
  ...endButtons,
};
