import { Draggable } from '@sima-land/ui-nucleons/carousel/draggable';

export const meta = {
  category: 'Устаревшее/Draggable',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <Draggable containerProps={{ style: { width: 300, height: 200, border: '1px solid #aaa' } }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#eee',
          padding: 20,
          boxSizing: 'border-box',
        }}
      >
        This div is draggable
      </div>
    </Draggable>
  );
}
