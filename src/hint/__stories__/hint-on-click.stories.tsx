import { useState } from 'react';
import { Hint, useHintOnClick, useHintFloating } from '@sima-land/ui-nucleons/hint';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Hint',
  component: Hint,
  parameters: {
    layout: 'padded',
  },
};

export function OnClick() {
  // состояние
  const [open, setOpen] = useState<boolean>(false);

  // позиционирование
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });

  // пользовательское взаимодействие
  const { getReferenceProps, getFloatingProps } = useHintOnClick(floating);

  return (
    <>
      <Button size='s' ref={refs.setReference} {...getReferenceProps()}>
        Кликни
      </Button>

      <Hint open={open} hintRef={refs.setFloating} arrowRef={refs.setArrow} {...getFloatingProps()}>
        Какой-то короткий текст получился
      </Hint>
    </>
  );
}

OnClick.storyName = 'По клику';
