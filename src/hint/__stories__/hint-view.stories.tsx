import { useRef, useState } from 'react';
import {
  HintView,
  hintFloatingConfig,
  getArrowFloatingStyle,
  useHintOnClick,
  useHintOnHover,
} from '..';
import { useFloating } from '@floating-ui/react';
import { Portal } from '../../portal';
import { Button } from '../../button';

export default {
  title: 'service/HintView',
  component: HintView,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <HintView style={{ position: 'relative' }}>
        Какой-то короткий текст получился
        <HintView.Arrow style={{ top: 'calc(100% - 4px)', left: 'calc(50% - 4px)' }} />
      </HintView>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function LotOfText() {
  return (
    <>
      <HintView style={{ position: 'relative' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel fugiat debitis nemo autem
        blanditiis eius, culpa beatae repudiandae architecto sunt.
        <HintView.Arrow style={{ top: 'calc(100% - 4px)', left: 'calc(50% - 4px)' }} />
      </HintView>
    </>
  );
}

LotOfText.storyName = 'Много текста';

export function OnClick() {
  const [open, setOpen] = useState<boolean>(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  const { refs, ...floating } = useFloating({
    open,
    onOpenChange: setOpen,
    ...hintFloatingConfig({ arrowRef }),
  });

  const { getReferenceProps, getFloatingProps } = useHintOnClick(floating);
  const arrowStyle = getArrowFloatingStyle(floating);

  return (
    <>
      <Button size='s' ref={refs.setReference} {...getReferenceProps()}>
        Кликни
      </Button>

      <Portal>
        {open && (
          <HintView hintRef={refs.setFloating} {...getFloatingProps()}>
            Какой-то короткий текст получился
            <HintView.Arrow arrowRef={arrowRef} style={arrowStyle} />
          </HintView>
        )}
      </Portal>
    </>
  );
}

OnClick.storyName = 'По клику (floating-ui)';

export function OnHover() {
  const [open, setOpen] = useState<boolean>(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  const { refs, ...floating } = useFloating({
    open,
    onOpenChange: setOpen,
    ...hintFloatingConfig({ arrowRef }),
  });

  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);
  const arrowStyle = getArrowFloatingStyle(floating);

  return (
    <>
      <Button size='s' ref={refs.setReference} {...getReferenceProps()}>
        Наведи
      </Button>

      <Portal>
        {open && (
          <HintView hintRef={refs.setFloating} {...getFloatingProps()}>
            Какой-то короткий текст получился
            <HintView.Arrow arrowRef={arrowRef} style={arrowStyle} />
          </HintView>
        )}
      </Portal>
    </>
  );
}

OnHover.storyName = 'При наведении (floating-ui)';
