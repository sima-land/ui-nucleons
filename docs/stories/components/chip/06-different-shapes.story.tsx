import { Chip } from '@sima-land/ui-nucleons/chip';

export const meta = {
  category: 'Компоненты/Chip',
  title: 'Варианты формы',
};

export default function DifferentShapes() {
  return (
    <>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Chip shape='square' checked={false}>
          Чипс обычный
        </Chip>
        <Chip shape='square' checked>
          Чипс выбранный
        </Chip>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <Chip shape='pill' checked={false}>
          Чипс обычный
        </Chip>
        <Chip shape='pill' checked>
          Чипс выбранный
        </Chip>
      </div>
    </>
  );
}
