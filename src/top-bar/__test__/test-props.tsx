import React from 'react';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/person';

const longText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad, provident aspernatur dolore. ';

export const sizes = ['s', 'm'];

export const shortTitles = { title: 'Modal title', subtitle: 'Modal subtitle' };

export const longTitles = { title: longText.repeat(2), subtitle: longText.repeat(2) };

export const startButtons = {
  start: {
    icon: <ArrowLeftSVG />,
  },
  startSecondary: {
    icon: <PersonSVG />,
  },
};

export const endButtons = {
  end: {
    icon: <CrossSVG />,
  },
  endSecondary: {
    icon: <PersonSVG />,
  },
};

export const allButtons = {
  ...startButtons,
  ...endButtons,
};
