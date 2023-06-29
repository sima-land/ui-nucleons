import { useState } from 'react';
import { LoadingOverlay } from '..';

export default {
  title: 'deprecated/LoadingOverlay',
  component: LoadingOverlay,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => {
  const [shown, toggleShow] = useState(false);

  return (
    <>
      <button onClick={() => toggleShow(!shown)}>Toggle loading overlay</button>

      <div
        style={{
          position: 'relative',
          height: 100,
          border: '1px solid #aaa',
          background: '#eee',
          marginTop: 20,
        }}
      >
        {shown && <LoadingOverlay />}
      </div>
    </>
  );
};
