import React from 'react';
import Icon from '../../icon';
import crossIcon from '../../icons/cross-big.svg';
import leftIcon from '../../icons/full-left-arrow.svg';
import capIcon from '../../icons/image-cap.svg';

const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad, provident aspernatur dolore. ';

export const sizes = ['s', 'm', 'l'];

export const shortTitles = { title: 'Modal title', subtitle: 'Modal subtitle' };

export const longTitles = { title: longText.repeat(2), subtitle: longText.repeat(2) };

export const startIcons = {
  startIcon: <Icon size={24} icon={leftIcon} />,
  startSecondaryIcon: <Icon size={24} icon={capIcon} />,
};

export const endIcons = {
  endIcon: <Icon size={24} icon={crossIcon} />,
  endSecondaryIcon: <Icon size={24} icon={capIcon} />,
};

export const allIcons = {
  ...startIcons,
  ...endIcons,
};
