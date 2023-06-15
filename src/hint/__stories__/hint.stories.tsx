import React, { CSSProperties, ReactNode, useCallback, useState } from 'react';
import {
  Hint,
  useHintOnHover,
  useHintOnClick,
  useHintFloating,
  useHintFloatingStyle,
  useTempHintState,
} from '..';
import { Button } from '../../button';
import { LargePage } from '../../../.storybook/utils';
import { Stepper } from '../../stepper';
import { Link } from '../../link';

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

export function WithLinkInside() {
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

WithLinkInside.storyName = 'Ссылка внутри';

export function ExampleStepper() {
  // состояние
  const [open, setOpen] = useTempHintState(false);

  // позиционирование
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });
  const style = useHintFloatingStyle(floating);

  // демонстрация
  const [value, setValue] = useState<number>(0);
  const [hint, setHint] = useState<string>('');

  const increase = useCallback(() => {
    const next = value + 1;
    const max = 5;

    if (next > max) {
      setHint(`Значение не может быть больше ${max}`);
      setValue(max);
    } else {
      setHint(`Значение увеличено до ${next}`);
      setValue(next);
    }

    setOpen(true);
  }, [value]);

  const decrease = useCallback(() => {
    const next = value - 1;

    if (next < 0) {
      setHint('Значение не может быть меньше 0');
      setValue(0);
    } else {
      setHint(`Значение уменьшено до ${next}`);
      setValue(next);
    }

    setOpen(true);
  }, [value]);

  return (
    <>
      <div ref={refs.setReference}>
        <Stepper value={value} onAdd={increase} onSubtract={decrease} onChange={() => void 0} />
      </div>

      <Hint open={open} hintRef={refs.setFloating} arrowRef={refs.setArrow} style={style}>
        {hint}
      </Hint>
    </>
  );
}

ExampleStepper.parameters = { layout: 'centered' };
ExampleStepper.storyName = 'Ограничение по времени';

export function TestClick() {
  return <TestPositionTemplate item={<OnClick />} />;
}

TestClick.storyName = 'Тест: позиционирование при клике';
TestClick.parameters = { layout: 'fullscreen' };

export function TestHover() {
  return <TestPositionTemplate item={<OnHover />} />;
}

TestHover.storyName = 'Тест: позиционирование при наведении';
TestHover.parameters = { layout: 'fullscreen' };

function TestPositionTemplate({ item }: { item: ReactNode }) {
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
          {item}
          {item}
          {item}
        </div>
        <div style={rowStyle}>
          {item}
          {item}
          {item}
        </div>
        <div style={rowStyle}>
          {item}
          {item}
          {item}
        </div>
      </div>
    </LargePage>
  );
}
