import styles from './primary.m.scss';

export const meta = {
  title: 'Простой пример',
  category: 'SCSS/Тени',
};

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.a}></div>
      <div className={styles.b}></div>
      <div className={styles.c}></div>
      <div className={styles.d}></div>
      <div className={styles.e}></div>
    </div>
  );
}
