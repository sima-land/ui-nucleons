import { Text } from '@sima-land/ui-nucleons/text';

export const meta = {
  category: 'Устаревшее/Text',
  title: 'Обрезка текста',
  parameters: {
    layout: 'padded',
  },
};

export default function Truncate() {
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
