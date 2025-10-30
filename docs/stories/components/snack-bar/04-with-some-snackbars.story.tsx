import {
  SnackBar,
  SnackBarImage,
  SnackBarStartIcon,
  SnackBarSubtitle,
  SnackBarTitle,
  useSnackBarPositioning,
} from '@sima-land/ui-nucleons/snack-bar';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useRef, useState } from 'react';
import { SnackbarContextProvider } from '@sima-land/ui-nucleons/snack-bar/';
import baggi from './images/baggi.png';
import { Button } from '@sima-land/ui-nucleons/button';

export const meta = {
  title: 'Пример использования нескольких снекбаров',
  category: 'Компоненты/Snackbar',
};

function Story() {
  const [firstShown, setFirstShown] = useState<boolean>(false);
  const [secondShown, setSecondShown] = useState<boolean>(false);
  const firstOpenerRef = useRef<HTMLElement | null>(null);
  const secondOpenerRef = useRef<HTMLElement | null>(null);

  const stub = () => {
    alert('Действие!');
  };

  const onFirstClose = () => {
    setFirstShown(false);
  };
  const onSecondClose = () => {
    setSecondShown(false);
  };

  const { state: firstState, snackBarProps: firstSnackBarProps } = useSnackBarPositioning({
    shown: firstShown,
    onClose: onFirstClose,
    props: { onClick: stub },
  });
  const { state: secondState, snackBarProps: secondSnackBarProps } = useSnackBarPositioning({
    shown: secondShown,
    onClose: onSecondClose,
    props: { onClick: stub },
  });
  return (
    <>
      <Button
        onClick={() => {
          setFirstShown(true);
        }}
        ref={firstOpenerRef}
      >
        Показать первый Snackbar
      </Button>
      <Button
        style={{ marginLeft: '16px' }}
        onClick={() => {
          setSecondShown(true);
        }}
        ref={secondOpenerRef}
      >
        Показать второй Snackbar
      </Button>
      {firstState.isMounted && (
        <SnackBar {...firstSnackBarProps}>
          <SnackBarStartIcon icon={<PlaceholderSVG />} />
          <SnackBarTitle>
            Очень длинный заголовок, очень очень длинный, такой длинный, что не влезает в две строки
          </SnackBarTitle>
          <SnackBarSubtitle>
            Очень длинный подзаголовок, очень очень длинный, такой длинный, что не влезает в две
            строки
          </SnackBarSubtitle>
          <TextButton size='s'>Действие</TextButton>
        </SnackBar>
      )}
      {secondState.isMounted && (
        <SnackBar {...secondSnackBarProps}>
          <SnackBarImage src={baggi} />
          <SnackBarTitle>
            Очень длинный заголовок, очень очень длинный, такой длинный, что не влезает в две строки
          </SnackBarTitle>
          <SnackBarSubtitle>
            Очень длинный подзаголовок, очень очень длинный, такой длинный, что не влезает в две
            строки
          </SnackBarSubtitle>
          <TextButton size='s'>Действие</TextButton>
        </SnackBar>
      )}
    </>
  );
}

export default function () {
  return (
    <SnackbarContextProvider>
      <Story />
    </SnackbarContextProvider>
  );
}
