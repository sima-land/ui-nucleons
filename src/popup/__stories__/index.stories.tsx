import {
  Popup,
  PopupView,
  PopupStyle,
  popupFloatingConfig,
  usePopupOnClick,
  useFocusTrap,
} from '@sima-land/ui-nucleons/popup';
import { MouseEventHandler, useCallback, useState } from 'react';
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

export function Primary() {
  return (
    <>
      <PopupView onClose={() => alert('Нажат крестик!')}>Это тестовый popup.</PopupView>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function LotOfContent() {
  return (
    <>
      <PopupView onClose={() => alert('Нажат крестик!')}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
        </div>
      </PopupView>
    </>
  );
}

LotOfContent.storyName = 'Много текста';

export function Floating() {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const togglePopup = useCallback<MouseEventHandler>(event => {
    setAnchorEl(current => (current ? null : event.currentTarget));
  }, []);

  return (
    <LargePage>
      <InfoText iconActive={Boolean(anchorEl)} onIconClick={togglePopup}>
        Lorem, ipsum.
      </InfoText>

      <Popup showFor={anchorEl} onDismiss={() => setAnchorEl(null)}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse doloremque molestias, ex
        quasi nostrum architecto sapiente quos saepe perspiciatis deleniti!
        <p>
          <TextButton>Ничего не делать</TextButton>
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo vero sint excepturi
        vitae aliquid dignissimos maiores, iste tempore tenetur ratione.
      </Popup>
    </LargePage>
  );
}

Floating.storyName = 'Всплытие по клику';

export function Customizing() {
  const [anchor, setAnchor] = useState<Element | null>(null);

  const styles = {
    popup: {
      '--popup-background': '#fff',
      '--popup-border-radius': '8px',
      '--popup-padding': '0',
      '--popup-content-padding': '32px',
      '--popup-box-shadow': '0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1)',
    } satisfies PopupStyle,
  };

  return (
    <LargePage>
      <InfoText iconActive={Boolean(anchor)} onIconClick={event => setAnchor(event.currentTarget)}>
        Lorem, ipsum.
      </InfoText>

      <Popup
        showFor={anchor}
        onDismiss={() => setAnchor(null)}
        placement='bottom'
        withCloseButton={false}
        style={styles.popup}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse doloremque molestias, ex
        quasi nostrum architecto sapiente quos saepe perspiciatis deleniti!
        <p>
          <TextButton>Ничего не делать</TextButton>
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo vero sint excepturi
        vitae aliquid dignissimos maiores, iste tempore tenetur ratione.
      </Popup>
    </LargePage>
  );
}

Customizing.storyName = 'Кастомизация';

export function FloatingUI() {
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

FloatingUI.storyName = 'Всплытие по клику с помощью floating-ui';
