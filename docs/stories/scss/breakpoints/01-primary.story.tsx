import styles from './primary.m.scss';

export const meta = {
  title: 'Простой пример',
  category: 'SCSS/Брейкпоинты',
};

export default function () {
  return (
    <div className={styles.container}>
      Цвет этого блока будет меняться в зависимости от ширины страницы
    </div>
  );
}
