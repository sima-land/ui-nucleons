import { StrokedSVG } from '@sima-land/ui-nucleons/stroked-svg';
import { WithHint } from '../../with-hint';
import Favorite from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import ArrowLeft from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
import Bag from '@sima-land/ui-quarks/icons/24x24/Stroked/Bag2';
import ShareAndroid from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareAndroid';
import ShareIOs from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareIOs';
import QuickView2 from '@sima-land/ui-quarks/icons/24x24/Stroked/QuickView2';

export default {
  title: 'service/StrokedSVG',
  component: StrokedSVG,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

const icons = [Favorite, ArrowLeft, Bag, ShareAndroid, ShareIOs, QuickView2];

export function Primary() {
  return (
    <div style={{ padding: '32px', display: 'flex', justifyContent: 'space-around' }}>
      {icons.map((icon, index) => (
        <StrokedSVG key={index} component={icon} />
      ))}
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function Hint() {
  return (
    <div style={{ padding: '32px' }}>
      <WithHint hint='Добавить в избранное' direction='right'>
        {(ref, toggle) => (
          <StrokedSVG
            component={Favorite}
            ref={ref as any}
            onMouseEnter={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
          />
        )}
      </WithHint>
    </div>
  );
}

Hint.storyName = 'С хинтом';
