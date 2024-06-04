import { BaseInput, BaseInputStyle } from '@sima-land/ui-nucleons/base-input';

export default {
  title: 'service/BaseInput',
  component: BaseInput,
  parameters: {
    layout: 'padded',
  },
};

export function Multiline() {
  const style: BaseInputStyle = {
    border: '1px solid #323232',
    width: 200,
    padding: 8,
  };

  return (
    <>
      <BaseInput
        multiline
        style={style}
        defaultValue='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quam assumenda illum dolores tenetur. Voluptate quaerat totam fuga explicabo tempora?'
      />
    </>
  );
}

Multiline.storyName = 'Многострочное поле';
