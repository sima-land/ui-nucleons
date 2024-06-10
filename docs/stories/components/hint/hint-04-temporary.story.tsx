import { useCallback, useState } from 'react';
import {
  Hint,
  useHintFloating,
  useHintFloatingStyle,
  useTempHintState,
} from '@sima-land/ui-nucleons/hint';
import { Stepper } from '@sima-land/ui-nucleons/stepper';

export const meta = {
  category: 'Компоненты/Hint',
  title: 'Ограничение по времени',
};

export default function Temporary() {
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
