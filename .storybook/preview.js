import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

export const parameters = {
  layout: 'padded',
  docs: {
    inlineStories: false,
    iframeHeight: 320,
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <ArgsTable story={PRIMARY_STORY} />
      </>
    ),
  },
};
