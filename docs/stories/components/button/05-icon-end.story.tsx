import { Button } from '@sima-land/ui-nucleons/button';
import ShareSVG from '@sima-land/ui-quarks/icons/16x16/Filled/Share';
import ShareAndroidSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareAndroid';

export const meta = {
  category: 'Компоненты/Button',
  title: 'Иконка в конце',
};

export default function () {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button size='m' icon={ShareAndroidSVG} iconPosition='end'>
        Поделиться
      </Button>
      <Button size='s' icon={ShareAndroidSVG} iconPosition='end'>
        Поделиться
      </Button>
      <Button size='xs' icon={ShareSVG} iconPosition='end'>
        Поделиться
      </Button>
    </div>
  );
}
