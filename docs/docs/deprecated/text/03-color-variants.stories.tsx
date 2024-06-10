import { Text } from '@sima-land/ui-nucleons/text';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export const meta = {
  category: 'Устаревшее/Text',
  title: 'Варианты цветов',
  parameters: {
    layout: 'padded',
  },
};

export default function ColorVariants() {
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
