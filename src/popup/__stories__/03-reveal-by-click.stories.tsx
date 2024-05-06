import { Popup, PopupView } from '@sima-land/ui-nucleons/popup';
import { MouseEventHandler, useCallback, useState } from 'react';
import { InfoText } from '@sima-land/ui-nucleons/info-text';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { LargePage } from '../../../.storybook/utils';

export default {
  title: 'common/Popup',
  component: PopupView,
  parameters: {
    layout: 'padded',
  },
};

export function RevealByClick() {
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

RevealByClick.storyName = 'Всплытие по клику';
