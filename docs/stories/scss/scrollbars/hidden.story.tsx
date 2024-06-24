import styles from './hidden.m.scss';

export const meta = {
  title: 'Скрытие',
  category: 'SCSS/Полосы прокрутки',
};

export default function () {
  return (
    <>
      <div className={styles.container}>
        Этот блок имеет скрытие полосы прокрутки, не смотря на то что прокрутка работает.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corporis
        repudiandae architecto ut sunt. Autem recusandae quae, dolorum sapiente similique, cum non
        molestiae obcaecati tenetur porro quis minus nisi odit!
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corporis
        repudiandae architecto ut sunt. Autem recusandae quae, dolorum sapiente similique, cum non
        molestiae obcaecati tenetur porro quis minus nisi odit!
      </div>
    </>
  );
}
