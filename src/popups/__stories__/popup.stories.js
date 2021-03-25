import React from 'react';
import { storiesOf } from '@storybook/react';
import Popup from '../popup';

const popupWidth = {
  width: '400px',
};

const childPadding = {
  padding: '20px',
};

storiesOf('deprecated/Popup', module)
  .add('default appearance', () => (
    <div style={popupWidth}>
      <Popup>
        <p style={childPadding}>This is base popup appearance</p>
      </Popup>
    </div>
  ));
