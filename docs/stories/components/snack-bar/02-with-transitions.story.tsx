import { Button } from '@sima-land/ui-nucleons/button';
import {
  SnackBar,
  SnackBarStartIcon,
  SnackBarSubtitle,
  SnackBarTitle,
  useSnackBarPositioning,
} from '@sima-land/ui-nucleons/snack-bar';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import { useRef, useState } from 'react';

export const meta = {
  title: 'Пример использования анимации',
  category: 'Компоненты/Snackbar',
};

export default function () {
  const [shown, setShown] = useState<boolean>(false);
  const openerRef = useRef<HTMLButtonElement>();

  const stub = () => {
    alert('Действие!');
  };
  const onClose = () => {
    setShown(false);
  };
  const { state, snackBarProps } = useSnackBarPositioning({
    shown,
    props: { onClose, onClick: stub, showFor: [openerRef] },
  });
  return (
    <>
      <Button
        onClick={() => {
          setShown(true);
        }}
        ref={openerRef}
      >
        Показать Snackbar
      </Button>
      {state.isMounted && (
        <SnackBar {...snackBarProps}>
          <SnackBarStartIcon icon={<PlaceholderSVG />} />
          <SnackBarTitle>
            Очень длинный заголовок, очень очень длинный, такой длинный, что не влезает в две строки
          </SnackBarTitle>
          <SnackBarSubtitle>
            Очень длинный подзаголовок, очень очень длинный, такой длинный, что не влезает в две
            строки
          </SnackBarSubtitle>
        </SnackBar>
      )}
    </>
  );
}
