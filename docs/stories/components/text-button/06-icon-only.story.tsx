import { TextButton } from '@sima-land/ui-nucleons/text-button';
import ShareSVG from '@sima-land/ui-quarks/icons/16x16/Filled/Share';
import ShareAndroidSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareAndroid';

export const meta = {
  category: 'Компоненты/TextButton',
  title: 'Только иконка',
};

export default function IconOnly() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TextButton size='s'>
        <ShareSVG fill='currentColor' />
      </TextButton>
      <TextButton size='m'>
        <ShareAndroidSVG fill='currentColor' />
      </TextButton>
    </div>
  );
}
