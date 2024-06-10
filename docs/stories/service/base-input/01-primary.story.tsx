import { BaseInput, BaseInputStyle } from '@sima-land/ui-nucleons/base-input';

export const meta = {
  category: 'Утилиты/BaseInput',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  const style: BaseInputStyle = {
    border: '1px solid #323232',
    width: 200,
    padding: 8,
  };

  return (
    <>
      <BaseInput style={style} defaultValue='Lorem ipsum' />
    </>
  );
}
