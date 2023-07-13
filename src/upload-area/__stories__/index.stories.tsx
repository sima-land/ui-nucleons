import { UploadArea, UploadAreaProps, UploadAreaSize } from '@sima-land/ui-nucleons/upload-area';
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
        sizeLimit='2 Mb'
        multiple
        fileRole='фото'
        countLimit={10}
        formats='JPG, JPEG, PNG'
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

  const variants: UploadAreaProps[] = [
    {
      fileRole: 'фото',
      formats: undefined,
      multiple: undefined,
    },
    {
      fileRole: 'архив',
      formats: 'ZIP, RAR, 7z',
      multiple: undefined,
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
      countLimit: 12,
    },
  ];

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
      areaStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
    >
      {variants.map((variant, index) => (
        <UploadArea
          key={index}
          style={{ marginBottom: '16px', width: size === 'm' ? '540px' : undefined }}
          onSelect={files => {
            alert(`Файлов выбрано: ${files.length}`);
          }}
          size={size}
          disabled={state.includes('disabled')}
          failed={state.includes('failed')}
          {...variant}
        />
      ))}
    </Sandbox>
  );
}

DifferentState.storyName = 'Различные состояния';
