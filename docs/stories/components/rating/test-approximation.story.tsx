import { Rating } from '@sima-land/ui-nucleons/rating';

export const meta = {
  category: 'Компоненты/Rating',
  title: 'Тест: Аппроксимация значений',
};

const prettyValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
const uglyValues = [0.1, 0.2, 0.6, 1.2, 1.8, 2.1, 3, 3.6, 4.4, 5];

export default function TestApproximation() {
  return (
    <>
      {[...prettyValues, ...uglyValues].map((value, index) => (
        <div key={index} style={{ display: 'flex', marginBottom: 16 }}>
          <div style={{ width: 48 }}>{value}</div>
          <Rating value={value} />
        </div>
      ))}
    </>
  );
}
