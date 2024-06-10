import { Text } from '@sima-land/ui-nucleons/text';
import { WEIGHTS } from '@sima-land/ui-nucleons/styling/fonts';

export const meta = {
  category: 'Устаревшее/Text',
  title: 'Варианты начертания',
};

export default function WeightVariants() {
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
