import React from 'react';
import { storiesOf } from '@storybook/react';
import PositioningPopupDemo from './positioning-popup-demo';

const childStyles = {
  padding: '20px',
  margin: 0,
};

storiesOf('Popups/PositioningPopup', module)
  .add('default appearance', () => (
    <PositioningPopupDemo>
      <p style={childStyles}>I am positioning popup. I am very smart.
        <br />I see the opener element and body limits
      </p>
    </PositioningPopupDemo>
  ))
  .add('appearance with zero margin', () => (
    <PositioningPopupDemo positioningMargin={0}>
      <p style={childStyles}>I am positioning popup. I am very smart.
        <br />I see the opener element and body limits
      </p>
    </PositioningPopupDemo>
  ));

