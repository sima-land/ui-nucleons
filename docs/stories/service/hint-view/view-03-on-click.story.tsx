import {
  HintView,
  hintFloatingConfig,
  getArrowFloatingStyle,
  useHintOnClick,
} from '@sima-land/ui-nucleons/hint';
import { useRef, useState } from 'react';
import { useFloating } from '@floating-ui/react';
import { Portal } from '@sima-land/ui-nucleons/portal';
import { Button } from '@sima-land/ui-nucleons/button';

export const meta = {
  category: 'Утилиты/HintView',
  title: 'По клику (floating-ui)',
};

export default function OnClick() {
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
