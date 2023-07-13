import { Text, ALIGNS } from '@sima-land/ui-nucleons/text';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import { SIZES, WEIGHTS } from '@sima-land/ui-nucleons/styling/fonts';

export default {
  title: 'deprecated/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={{ maxWidth: 320 }}>
      <h3>Just text</h3>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.
      </Text>

      <h3>Truncated</h3>
      <Text element='div' truncate>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.
      </Text>

      <h3>nowrap: true</h3>
      <div style={{ width: 200, border: '1px solid #f00' }}>
        <Text nowrap>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed
          veritatis.
        </Text>
      </div>
    </div>
  );
}

Primary.storyName = 'Простой пример';

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

export function AlignVariants() {
  return (
    <>
      {[...ALIGNS].map((align, index) => (
        <div key={index} style={{ maxWidth: 320 }}>
          <h3>Text with align {align}</h3>
          <Text element='div' size={16} align={align}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex eos aliquid
            iusto nam recusandae iure saepe pariatur harum sed.
          </Text>
        </div>
      ))}
    </>
  );
}

AlignVariants.storyName = 'Варианты выравнивания';

export function Truncate() {
  return (
    <div style={{ maxWidth: '320px' }}>
      <h4>
        <code>truncate=true</code>
      </h4>
      <Text truncate>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,
        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim
        labore eligendi officia a natus.
      </Text>

      <h4>
        <code>truncate=2</code>
      </h4>
      <Text truncate={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,
        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim
        labore eligendi officia a natus.
      </Text>

      <h4>
        <code>truncate=3</code>
      </h4>
      <Text truncate={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,
        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim
        labore eligendi officia a natus.
      </Text>
    </div>
  );
}

Truncate.storyName = 'Обрезка текста';
