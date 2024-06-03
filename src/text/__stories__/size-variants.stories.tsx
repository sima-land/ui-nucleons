import { Text } from '@sima-land/ui-nucleons/text';
import { SIZES } from '@sima-land/ui-nucleons/styling/fonts';

export default {
  title: 'deprecated/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
};

export function SizeVariants() {
  return (
    <>
      {[...SIZES].map((size, index) => (
        <div key={index} style={{ marginBottom: 24 }}>
          <Text size={size}>Text with size {size} px</Text>
        </div>
      ))}
    </>
  );
}

SizeVariants.storyName = 'Варианты размеров';
