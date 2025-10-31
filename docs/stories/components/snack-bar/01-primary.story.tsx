import {
  SnackBar,
  SnackBarStartIcon,
  SnackBarEndIcon,
  SnackBarImage,
  SnackBarSubtitle,
  SnackBarTitle,
} from '@sima-land/ui-nucleons/snack-bar';
import baggi from './images/baggi.png';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Cross';
import { Button } from '@sima-land/ui-nucleons/button';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { ChangeEvent, useState } from 'react';
import { Checkbox } from '@sima-land/ui-nucleons/checkbox';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export const meta = {
  title: 'Пример использования доступных вариантов наполнения',
  category: 'Компоненты/Snackbar',
};

const styles = {
  label: {
    display: 'inline-block',
    marginRight: '16px',
    fontSize: '16px',
  },
  checkboxes: {
    display: 'block',
    marginBottom: '16px',
  },
  controls: {
    display: 'block',
    marginBottom: '16px',
  },
};

export default function () {
  const [items, setItems] = useState<{
    startIcon?: boolean;
    startImage?: boolean;
    title?: boolean;
    subtitle?: boolean;
    button?: boolean;
    cleanButton?: boolean;
    endIcon?: boolean;
  }>({ startImage: true, title: true, cleanButton: true, endIcon: true });

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setItems({ ...items, [value]: true });
    } else {
      setItems({ ...items, [value]: false });
    }
  };

  const [shown, setShown] = useState<boolean>(false);

  const stub = () => {
    alert('Действие!');
  };
  const onClose = () => {
    setShown(false);
  };
  return (
    <>
      <div style={styles.controls}>
        <div style={styles.checkboxes}>
          <label style={styles.label}>
            <Checkbox value='startIcon' onChange={onCheckboxChange} checked={items.startIcon} />{' '}
            Иконка в начале
          </label>
          <label style={styles.label}>
            <Checkbox value='startImage' onChange={onCheckboxChange} checked={items.startImage} />{' '}
            Картинка в начале
          </label>
          <label style={styles.label}>
            <Checkbox value='title' onChange={onCheckboxChange} checked={items.title} /> Заголовок
          </label>
          <label style={styles.label}>
            <Checkbox value='subtitle' onChange={onCheckboxChange} checked={items.subtitle} />{' '}
            Подзаголовок
          </label>
          <label style={styles.label}>
            <Checkbox value='button' onChange={onCheckboxChange} checked={items.button} /> Обычная
            кнопка
          </label>
          <label style={styles.label}>
            <Checkbox value='cleanButton' onChange={onCheckboxChange} checked={items.cleanButton} />{' '}
            Прозрачная кнопка
          </label>
          <label style={styles.label}>
            <Checkbox value='endIcon' onChange={onCheckboxChange} checked={items.endIcon} /> Иконка
            в конце
          </label>
        </div>
        <Button
          onClick={() => {
            !shown && setShown(true);
          }}
        >
          Показать
        </Button>
      </div>
      {shown && (
        <SnackBar onClick={stub}>
          {items.startIcon && <SnackBarStartIcon icon={<PlaceholderSVG />} />}
          {items.startImage && <SnackBarImage src={baggi} />}
          {items.title && (
            <SnackBarTitle>
              Очень длинный заголовок, очень очень длинный, такой длинный, что не влезает в две
              строки
            </SnackBarTitle>
          )}
          {items.subtitle && (
            <SnackBarSubtitle>
              Очень длинный подзаголовок, очень очень длинный, такой длинный, что не влезает в две
              строки
            </SnackBarSubtitle>
          )}
          {items.button && (
            <Button size='xs' viewType='secondary'>
              Действие
            </Button>
          )}
          {items.cleanButton && <TextButton size='s'>Действие</TextButton>}
          {items.endIcon && (
            <SnackBarEndIcon
              onClick={onClose}
              icon={<CrossSVG fill={COLORS.get('basic-gray54')} />}
            />
          )}
        </SnackBar>
      )}
    </>
  );
}
