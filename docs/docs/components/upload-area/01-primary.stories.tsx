import { UploadArea } from '@sima-land/ui-nucleons/upload-area';

export const meta = {
  category: 'Компоненты/UploadArea',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
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
