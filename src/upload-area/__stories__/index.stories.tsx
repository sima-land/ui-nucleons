import {
  UploadArea,
  UploadAreaProps,
  UploadAreaSize,
  getFilesDescription,
} from '@sima-land/ui-nucleons/upload-area';
import { useState } from 'react';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/UploadArea',
  component: UploadArea,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <UploadArea
        title='Загрузите фото'
        description='10 файлов, формат JPG, JPEG, PNG, до 2 Mb'
        multiple
        onSelect={files => {
          alert(`Файлов выбрано: ${files.length}`);
        }}
        style={{ maxWidth: '500px' }}
      />
    </>
  );
}

Primary.storyName = 'Простой пример';

export function DifferentState() {
  const [size, setSize] = useState<UploadAreaSize>('m');
  const [state, setState] = useState<string>('default');

  const baseProps: UploadAreaProps = {
    disabled: state.includes('disabled'),
    failed: state.includes('failed'),
    onSelect: files => {
      alert(`Файлов выбрано: ${files.length}`);
    },
    size,
    style: {
      width: size === 'm' ? '540px' : undefined,
    },
  };

  return (
    <Sandbox
      controls={[
        {
          label: 'Размер',
          type: 'select',
          bind: [size, setSize],
          options: ['s', 'm'],
        },
        {
          label: 'Состояние',
          type: 'select',
          bind: [state, setState],
          options: ['default', 'failed', 'disabled', 'disabled+failed'],
        },
      ]}
      areaStyle={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <UploadArea
        {...baseProps}
        title='Загрузите фото'
        description={getFilesDescription({ countLimit: 1 })}
      />

      <UploadArea
        {...baseProps}
        title='Загрузите архив'
        description={getFilesDescription({ countLimit: 1, formats: 'ZIP, RAR, 7z' })}
      />

      <UploadArea
        {...baseProps}
        title='Загрузите скан'
        description={getFilesDescription({ formats: 'PDF, JPG, PNG' })}
        multiple
      />

      <UploadArea
        {...baseProps}
        title='Загрузите изображение'
        description={getFilesDescription({ formats: 'PDF, JPG, PNG', countLimit: 12 })}
        multiple
      />
    </Sandbox>
  );
}

DifferentState.storyName = 'Различные состояния';
