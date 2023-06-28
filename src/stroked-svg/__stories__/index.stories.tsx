import React from 'react';
import { StrokedSVG } from '..';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
import Bag2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Bag2';
import ShareAndroidSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareAndroid';
import ShareIOsSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareIOs';
import QuickView2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/QuickView2';
import { WithHint } from '../../with-hint';

export default {
  title: 'service/StrokedSVG',
  component: StrokedSVG,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

const icons = [FavoriteSVG, ArrowLeftSVG, Bag2SVG, ShareAndroidSVG, ShareIOsSVG, QuickView2SVG];

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
            component={FavoriteSVG}
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
