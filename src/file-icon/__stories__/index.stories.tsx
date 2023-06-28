import { FileIcon } from '..';

export default {
  title: 'common/FileIcon',
  component: FileIcon,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={{ display: 'flex' }}>
      {['doc', 'xls', 'pdf', 'jpg', 'xml', 'zip', 'unk'].map(fileType => (
        <div key={fileType} style={{ marginRight: 12 }}>
          <FileIcon type={fileType as any} />
        </div>
      ))}
    </div>
  );
}

Primary.storyName = 'Простой пример';
