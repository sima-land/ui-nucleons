import { Text } from '@sima-land/ui-nucleons/text';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export default {
  title: 'deprecated/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
};

export function ColorVariants() {
  return (
    <>
      {[...(COLORS.keys() as any)].map((color, index) => (
        <div key={index}>
          <Text size={16} color={color} weight={700}>
            {color}
          </Text>
        </div>
      ))}
    </>
  );
}

ColorVariants.storyName = 'Варианты цветов';
