import { useState } from 'react';
import { Hint, useHintOnHover, useHintFloating } from '@sima-land/ui-nucleons/hint';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Hint',
  component: Hint,
  parameters: {
    layout: 'padded',
  },
};

export function OnHover() {
  // состояние
  const [open, setOpen] = useState<boolean>(false);

  // позиционирование
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });

  // пользовательское взаимодействие
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  return (
    <>
      <Button size='s' ref={refs.setReference} {...getReferenceProps()}>
        Наведи
      </Button>

      <Hint open={open} hintRef={refs.setFloating} arrowRef={refs.setArrow} {...getFloatingProps()}>
        Какой-то короткий текст получился
      </Hint>
    </>
  );
}

OnHover.storyName = 'При наведении';
