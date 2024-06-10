import { CSSProperties, useState } from 'react';
import { Hint, useHintOnHover, useHintFloating } from '@sima-land/ui-nucleons/hint';
import { Button } from '@sima-land/ui-nucleons/button';
import { LargePage } from '#docs-utils';

export const meta = {
  category: 'Компоненты/Hint',
  title: 'Тест: Позиционирование при наведении',
  parameters: {
    layout: 'fullscreen',
  },
};

function Item() {
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

export default function TestHover() {
  const rootStyle: CSSProperties = {
    width: '100%',
    height: '100vh',
    minHeight: '320px',
    padding: '16px',
    display: 'flex',
    flexFlow: 'wrap column',
    justifyContent: 'space-between',
  };

  const rowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <LargePage>
      <div style={rootStyle}>
        <div style={rowStyle}>
          <Item />
          <Item />
          <Item />
        </div>
        <div style={rowStyle}>
          <Item />
          <Item />
          <Item />
        </div>
        <div style={rowStyle}>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </LargePage>
  );
}
