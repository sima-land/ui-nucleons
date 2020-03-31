import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import LoadingOverlay from '../index';

storiesOf('LoadingOverlay', module)
  .add('without underline', () => {
    const [shown, toggleShow] = useState(false);

    return (
      <Fragment>
        <button onClick={() => toggleShow(!shown)}>
          Toggle loading overlay
        </button>

        <div
          style={{
            position: 'relative',
            height: 100,
            border: '1px solid #aaa',
            background: '#eee',
            margin: 20,
          }}
        >
          {shown && (
            <LoadingOverlay />
          )}
        </div>
      </Fragment>
    );
  });
