import {
  UploadArea,
  UploadAreaProps,
  UploadAreaSize,
  getFilesDescription,
} from '@sima-land/ui-nucleons/upload-area';
import { useState } from 'react';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/UploadArea',
  title: 'Различные состояния',
};

export default function DifferentState() {
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
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
          ],
        },
        {
          label: 'Состояние',
          type: 'select',
          bind: [state, setState],
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'failed', displayName: 'Ошибка' },
            { value: 'disabled', displayName: 'Отключено' },
            { value: 'disabled+failed', displayName: 'Отключено + ошибка' },
          ],
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
