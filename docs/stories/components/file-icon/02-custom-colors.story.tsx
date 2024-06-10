import { FileIcon, FileIconStyle } from '@sima-land/ui-nucleons/file-icon';

export const meta = {
  category: 'Компоненты/FileIcon',
  title: 'Свои цвета',
};

export default function CustomColors() {
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
