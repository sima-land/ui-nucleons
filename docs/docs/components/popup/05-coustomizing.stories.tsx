import { Popup, PopupStyle } from '@sima-land/ui-nucleons/popup';
import { useState } from 'react';
import { InfoText } from '@sima-land/ui-nucleons/info-text';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { LargePage } from '#docs-utils';

export const meta = {
  category: 'Компоненты/Popup',
  title: 'Кастомизация',
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  popup: {
    '--popup-background': '#fff',
    '--popup-border-radius': '8px',
    '--popup-padding': '0',
    '--popup-content-padding': '32px',
    '--popup-box-shadow': '0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1)',
  } satisfies PopupStyle,
};

export default function Customizing() {
  const [anchor, setAnchor] = useState<Element | null>(null);

  return (
    <LargePage>
      <InfoText iconActive={Boolean(anchor)} onIconClick={event => setAnchor(event.currentTarget)}>
        Lorem, ipsum.
      </InfoText>

      <Popup
        style={styles.popup}
        showFor={anchor}
        placement='top'
        withCloseButton={false}
        onDismiss={() => setAnchor(null)}
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
