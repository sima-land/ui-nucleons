import { UploadArea } from '@sima-land/ui-nucleons/upload-area';

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
