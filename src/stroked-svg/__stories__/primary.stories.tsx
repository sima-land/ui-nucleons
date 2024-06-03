import { StrokedSVG } from '@sima-land/ui-nucleons/stroked-svg';
import Favorite from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import ArrowLeft from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
import Bag from '@sima-land/ui-quarks/icons/24x24/Stroked/Bag';
import ShareAndroid from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareAndroid';
import ShareiOsSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareiOs';
import QuickView2 from '@sima-land/ui-quarks/icons/24x24/Stroked/MagnifierPlus';

export default {
  title: 'service/StrokedSVG',
  component: StrokedSVG,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

const icons = [Favorite, ArrowLeft, Bag, ShareAndroid, ShareiOsSVG, QuickView2];

export function Primary() {
  return (
    <div style={{ display: 'flex', gap: '32px' }}>
      {icons.map((icon, index) => (
        <StrokedSVG key={index} component={icon} />
      ))}
    </div>
  );
}

Primary.storyName = 'Простой пример';
