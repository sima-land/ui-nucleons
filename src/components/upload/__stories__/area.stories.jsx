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

const variants = [
  {
    fileRole: 'фото',
    formats: undefined,
    multiple: undefined,
  },
  {
    fileRole: 'архив',
    formats: 'PDF, JPG, PNG',
    multiple: undefined,
  },
  {
    fileRole: 'документ',
    formats: undefined,
    multiple: true,
  },
  {
    fileRole: 'скан',
    formats: 'PDF, JPG, PNG',
    multiple: true,
  },
  {
    fileRole: 'изображение',
    formats: 'PDF, JPG, PNG',
    multiple: true,
    failed: true,
  },
];

export const Primary = () => (
  <>
    {variants.map((v, i) => (
      <div key={i} style={{ marginBottom: 16 }}>
        <UploadArea
          {...v}
          onSelect={(files, e) => {
            action(`"${e.type}" event`)(files);
          }}
        />
      </div>
    ))}
  </>
);
