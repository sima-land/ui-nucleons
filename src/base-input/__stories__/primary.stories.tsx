import { BaseInput, BaseInputStyle } from '@sima-land/ui-nucleons/base-input';

export default {
  title: 'service/BaseInput',
  component: BaseInput,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
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

Primary.storyName = 'Простой пример';
