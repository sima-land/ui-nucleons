import { Text } from '@sima-land/ui-nucleons/text';
import { WEIGHTS } from '@sima-land/ui-nucleons/styling/fonts';

export default {
  title: 'deprecated/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
};

export function WeightVariants() {
  return (
    <>
      {[...WEIGHTS].map((weight, index) => (
        <div key={index}>
          <Text size={16} weight={weight}>
            Текст с насыщеностью начертания: {weight}
          </Text>
        </div>
      ))}
    </>
  );
}

WeightVariants.storyName = 'Варианты начертания';
