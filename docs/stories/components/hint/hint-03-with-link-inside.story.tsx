import { useState } from 'react';
import { Hint, useHintOnClick, useHintFloating } from '@sima-land/ui-nucleons/hint';
import { Button } from '@sima-land/ui-nucleons/button';
import { Link } from '@sima-land/ui-nucleons/link';

export const meta = {
  category: 'Компоненты/Hint',
  title: 'Ссылка внутри',
};

export default function WithLinkInside() {
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
        <span>
          Скучный текст,{' '}
          <Link color='basic-white' underline href='https://sima-land.ru' target='_blank'>
            ссылка
          </Link>
          , и всё тут.
        </span>
      </Hint>
    </>
  );
}
