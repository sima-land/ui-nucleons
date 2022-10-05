import React from 'react';
import { StrokedSVG } from '..';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/favorite';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import Bag2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/bag-2';
import ShareAndroidSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/share-android';
import ShareIOsSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/share-i-os';
import QuickView2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/quick-view-2';
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
