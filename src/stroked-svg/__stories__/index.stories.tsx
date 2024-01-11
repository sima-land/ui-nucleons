import { StrokedSVG } from '@sima-land/ui-nucleons/stroked-svg';
import Favorite from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import ArrowLeft from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
import Bag from '@sima-land/ui-quarks/icons/24x24/Stroked/Bag2';
import ShareAndroid from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareAndroid';
import ShareIOs from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareIOs';
import QuickView2 from '@sima-land/ui-quarks/icons/24x24/Stroked/QuickView2';
import { useState } from 'react';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';

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
    <div style={{ display: 'flex', gap: '32px' }}>
      {icons.map((icon, index) => (
        <StrokedSVG key={index} component={icon} />
      ))}
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function WithHint() {
  // состояние
  const [open, setOpen] = useState<boolean>(false);

  // позиционирование
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });

  // пользовательское взаимодействие
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  return (
    <>
      <StrokedSVG {...getReferenceProps()} ref={refs.setReference} component={Favorite} />

      <Hint open={open} hintRef={refs.setFloating} arrowRef={refs.setArrow} {...getFloatingProps()}>
        Добавить в избранное
      </Hint>
    </>
  );
}

WithHint.storyName = 'С хинтом';
