import { Price } from '@sima-land/ui-nucleons/price';

export const meta = {
  category: 'Компоненты/Price',
  title: 'Зачеркнутая цена',
  parameters: {
    layout: 'padded',
  },
};

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

  // negative values
  '-0',
  '-0.1',
  '-0.15',
  '-0.00024',
  '-0.0000095',
  '-1000',
  '-2000.5',
  '-3000.56',
  '-4000.567',
  '-1234567',
  '-1234567.8',
  '-1234567.89',
  '-7.99',
  '-7.998',
];

export default function CrossedOut() {
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
