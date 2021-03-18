import React from 'react';
import { FileIcon } from '..';

export default {
  title: 'FileIcon',
  component: FileIcon,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <div style={{ display: 'flex' }}>
    {[
      'doc',
      'xls',
      'pdf',
      'jpg',
      'xml',
      'zip',
      'unk',
    ].map(fileType => (
      <div key={fileType} style={{ marginRight: 12 }}>
        <FileIcon type={fileType as any} />
      </div>
    ))}
  </div>
);
