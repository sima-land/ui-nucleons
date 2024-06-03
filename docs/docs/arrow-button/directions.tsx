import { ArrowButton, ArrowButtonSize, ArrowDirection } from '@sima-land/ui-nucleons/arrow-button';
import { CSSProperties } from 'react';

export default function Directions() {
  const sizes: ArrowButtonSize[] = ['s', 'l'];
  const directions: ArrowDirection[] = ['up', 'right', 'down', 'left'];

  const styles: CSSProperties = {
    display: 'flex',
    width: '320px',
    gap: '32px',
    marginBottom: '32px',
  };

  const onClick = () => alert('Фух, клик по кнопке работает...');

  return (
    <>
      {sizes.map(size => (
        <div key={size} style={styles}>
          {directions.map(direction => (
            <ArrowButton key={direction} size={size} direction={direction} onClick={onClick} />
          ))}
        </div>
      ))}
    </>
  );
}
