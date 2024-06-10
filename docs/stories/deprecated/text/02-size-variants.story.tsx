import { Text } from '@sima-land/ui-nucleons/text';
import { SIZES } from '@sima-land/ui-nucleons/styling/fonts';

export const meta = {
  category: 'Устаревшее/Text',
  title: 'Варианты размеров',
};

export default function SizeVariants() {
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
