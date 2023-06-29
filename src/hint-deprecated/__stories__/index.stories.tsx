import { Hint } from '..';

export default {
  title: 'deprecated/Hint',
  component: Hint,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      {(['top', 'right', 'bottom', 'left'] as const).map(direction => (
        <div key={direction} style={{ marginBottom: 20 }}>
          <h4>{direction}</h4>
          <Hint direction={direction}>Hello, world!</Hint>
        </div>
      ))}
    </>
  );
}

Primary.storyName = 'Простой пример';

export function Multiline() {
  return (
    <>
      {(['top', 'right', 'bottom', 'left'] as const).map(direction => (
        <div key={direction} style={{ marginBottom: 20 }}>
          <h4>{direction}</h4>
          <Hint direction={direction}>
            Hello, world!
            <br />
            Hello, world!
          </Hint>
        </div>
      ))}
    </>
  );
}

Multiline.storyName = 'Многострочный хинт';
