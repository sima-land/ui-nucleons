import {
  PopupView,
  popupFloatingConfig,
  usePopupOnClick,
  useFocusTrap,
} from '@sima-land/ui-nucleons/popup';
import { useState } from 'react';
import { useFloating } from '@floating-ui/react';
import { InfoText } from '@sima-land/ui-nucleons/info-text';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { Portal } from '@sima-land/ui-nucleons/portal';
import { LargePage } from '../../../.storybook/utils';

export default {
  title: 'common/Popup',
  component: PopupView,
  parameters: {
    layout: 'padded',
  },
};

export function RevealByClickFloatingUI() {
  const [shown, toggle] = useState<boolean>(false);

  const { refs, ...floating } = useFloating({
    open: shown,
    onOpenChange: toggle,

    // "popupFloatingConfig" задает позиционирование по дизайн-гайдам
    ...popupFloatingConfig(),
  });

  // "usePopupOnClick" комбинирует useClick, useDismiss и useInteractions и useLayer
  const { getFloatingProps } = usePopupOnClick(floating);

  // определяем "ловушку фокуса"
  useFocusTrap(refs.floating, {
    enabled: shown && floating.isPositioned,
    afterDeactivate: () => toggle(false),
  });

  return (
    <LargePage>
      <InfoText iconRef={refs.setReference} iconActive={shown} onIconClick={() => toggle(a => !a)}>
        Lorem, ipsum.
      </InfoText>

      <Portal>
        {shown && (
          <PopupView
            popupRef={refs.setFloating}
            onClose={() => toggle(false)}
            {...getFloatingProps()}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse doloremque molestias, ex
            quasi nostrum architecto sapiente quos saepe perspiciatis deleniti!
            <p>
              <TextButton>Ничего не делать</TextButton>
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo vero sint excepturi
            vitae aliquid dignissimos maiores, iste tempore tenetur ratione.
          </PopupView>
        )}
      </Portal>
    </LargePage>
  );
}

RevealByClickFloatingUI.storyName = 'Всплытие по клику с помощью floating-ui';
