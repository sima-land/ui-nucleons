import { Text } from '@sima-land/ui-nucleons/text';

export const meta = {
  category: 'Устаревшее/Text',
  title: 'Простой пример',
};

export default function Primary() {
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
