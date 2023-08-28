import { FileIcon, FileIconStyle } from '@sima-land/ui-nucleons/file-icon';

export default {
  title: 'common/FileIcon',
  component: FileIcon,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <FileIcon width={48} height={48} type='doc' />
      <FileIcon width={48} height={48} type='xls' />
      <FileIcon width={48} height={48} type='pdf' />
      <FileIcon width={48} height={48} type='jpg' />
      <FileIcon width={48} height={48} type='xml' />
      <FileIcon width={48} height={48} type='zip' />
      <FileIcon width={48} height={48} type='unknown' />
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function CustomColors() {
  const style: FileIconStyle = {
    '--file-icon-primary-color': '#3264a8',
  };

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <FileIcon style={style} width={48} height={48} type='doc' />
      <FileIcon style={style} width={48} height={48} type='svg' typeDisplayed />
      <FileIcon style={style} width={48} height={48} />
    </div>
  );
}

CustomColors.storyName = 'Свои цвета';
