import { Price } from '..';

const values = [
  '0',
  '0.1',
  '0.15',
  '0.00024',
  '0.0000095',
  '1000',
  '2000.5',
  '3000.56',
  '4000.567',
  '1234567',
  '1234567.8',
  '1234567.89',
  '7.99',
  '7.998',
];

export default {
  title: 'common/Price',
  component: Price,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      {values.map((value, index) => (
        <div key={index} style={{ fontSize: 24, marginBottom: 16 }}>
          <span style={{ display: 'inline-block', minWidth: '200px' }}>{value}</span>
          <Price value={value} currencyGrapheme='₽' />
        </div>
      ))}
    </>
  );
}

Primary.storyName = 'Простой пример';

export function CrossedOut() {
  return (
    <>
      {values.map((value, index) => (
        <div key={index} style={{ fontSize: 24, marginBottom: 16 }}>
          <Price value={value} currencyGrapheme='₽' crossedOut />
        </div>
      ))}
    </>
  );
}

CrossedOut.storyName = 'Зачеркнутая цена';

export function GraphemeBefore() {
  return (
    <>
      {values.map((value, index) => (
        <div key={index} style={{ fontSize: 24, marginBottom: 16 }}>
          <Price value={value} currencyGrapheme='$' graphemeBefore />
        </div>
      ))}
    </>
  );
}

GraphemeBefore.storyName = 'Графема впереди';
