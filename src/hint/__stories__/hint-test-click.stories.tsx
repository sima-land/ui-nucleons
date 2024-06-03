import { CSSProperties, useState } from 'react';
import { Hint, useHintFloating, useHintOnClick } from '@sima-land/ui-nucleons/hint';
import { LargePage } from '@sima-land/ui-nucleons/../.storybook/utils';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Hint',
  component: Hint,
  parameters: {
    layout: 'padded',
  },
};

function Item() {
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

export function TestClick() {
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

TestClick.storyName = 'Тест: Позиционирование при клике';
TestClick.parameters = { layout: 'fullscreen' };
