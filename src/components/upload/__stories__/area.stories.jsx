import { action } from '@storybook/addon-actions';
import React from 'react';
import { UploadArea } from '../area';

export default {
  title: 'UploadArea',
  component: UploadArea,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <UploadArea
    formats='PDF, JPG, PNG'
    fileRole='скан'
    sizeLimit='4 Mb'
    onSelect={(files, e) => {
      action(`"${e.type}" event`)(files);
    }}
  />
);
