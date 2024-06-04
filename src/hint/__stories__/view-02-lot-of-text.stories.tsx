import { HintView } from '@sima-land/ui-nucleons/hint';

export default {
  title: 'service/HintView',
  component: HintView,
  parameters: {
    layout: 'padded',
  },
};

export function LotOfText() {
  return (
    <>
      <HintView style={{ position: 'relative' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel fugiat debitis nemo autem
        blanditiis eius, culpa beatae repudiandae architecto sunt.
        <HintView.Arrow style={{ top: 'calc(100% - 4px)', left: 'calc(50% - 4px)' }} />
      </HintView>
    </>
  );
}

LotOfText.storyName = 'Много текста';
