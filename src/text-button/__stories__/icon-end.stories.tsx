import { TextButton } from '@sima-land/ui-nucleons/text-button';
import ShareSVG from '@sima-land/ui-quarks/icons/16x16/Filled/Share';
import ShareAndroidSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareAndroid';

export default {
  title: 'common/TextButton',
  component: TextButton,
  parameters: {
    layout: 'padded',
  },
};

export function IconEnd() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TextButton size='s' endIcon={ShareSVG}>
        Поделиться
      </TextButton>
      <TextButton size='m' endIcon={ShareAndroidSVG}>
        Поделиться
      </TextButton>
    </div>
  );
}

IconEnd.storyName = 'Иконка в конце';
