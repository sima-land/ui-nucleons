import React from 'react';
import { storiesOf } from '@storybook/react';
import TouchSlider from '../index';

const marginRight = { marginRight: 5 };

storiesOf('TouchSlider', module)
  .add('Default', () => (
    <div style={{ background: '#c2c2c2', padding: 16 }}>
      <TouchSlider layoutProps={{ xsMaxWidth: 'sm', xxsPadding: 'sm' }}>
        <div style={marginRight}>Этот</div>
        <div style={marginRight}>текст</div>
        <div style={marginRight}>будет</div>
        <div style={marginRight}>скролиться</div>
        <div style={marginRight}>тачем</div>
      </TouchSlider>
    </div>
  ));
