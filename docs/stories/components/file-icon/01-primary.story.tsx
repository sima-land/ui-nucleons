import { FileIcon } from '@sima-land/ui-nucleons/file-icon';

export const meta = {
  category: 'Компоненты/FileIcon',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <FileIcon width={48} height={48} type='doc' />
      <FileIcon width={48} height={48} type='docx' />
      <FileIcon width={48} height={48} type='heic' />
      <FileIcon width={48} height={48} type='jpg' />
      <FileIcon width={48} height={48} type='mov' />
      <FileIcon width={48} height={48} type='mp4' />
      <FileIcon width={48} height={48} type='pdf' />
      <FileIcon width={48} height={48} type='png' />
      <FileIcon width={48} height={48} type='rtf' />
      <FileIcon width={48} height={48} type='txt' />
      <FileIcon width={48} height={48} type='xls' />
      <FileIcon width={48} height={48} type='xlsx' />
      <FileIcon width={48} height={48} type='xml' />
      <FileIcon width={48} height={48} type='zip' />
      <FileIcon width={48} height={48} type='avi' />
      <FileIcon width={48} height={48} type='mp3' />
      <FileIcon width={48} height={48} />
      <FileIcon width={48} height={48} type='unknown' />
    </div>
  );
}
