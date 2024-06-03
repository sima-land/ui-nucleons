import { StrokedSVG } from '@sima-land/ui-nucleons/stroked-svg';
import { useState } from 'react';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';

export default {
  title: 'service/StrokedSVG',
  component: StrokedSVG,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function WithHint() {
  // состояние
  const [open, setOpen] = useState<boolean>(false);

  // позиционирование
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });

  // пользовательское взаимодействие
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  return (
    <>
      <StrokedSVG {...getReferenceProps()} ref={refs.setReference} component={FavoriteSVG} />

      <Hint open={open} hintRef={refs.setFloating} arrowRef={refs.setArrow} {...getFloatingProps()}>
        Добавить в избранное
      </Hint>
    </>
  );
}

WithHint.storyName = 'С хинтом';
