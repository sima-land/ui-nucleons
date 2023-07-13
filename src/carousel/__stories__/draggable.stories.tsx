import { Draggable } from '@sima-land/ui-nucleons/carousel/draggable';

export default {
  title: 'service/Draggable',
  component: Draggable,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
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

Primary.storyName = 'Простой пример';
