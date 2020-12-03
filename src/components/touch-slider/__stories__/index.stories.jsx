import React from 'react';
import { storiesOf } from '@storybook/react';
import TouchSlider from '../index';

const styles = {
  root: {
    margin: '32px 0',
  },
  inner: {
    display: 'flex',
  },
  item: {
    flexShrink: 0,
    width: 200,
    height: 100,
    fontSize: 20,
    background: '#e82e5c',
    color: '#fff',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const phrase = 'этот текст будет прокручиваться на touch устройствах';

storiesOf('TouchSlider', module)
  .add('Default', () => (
    <div style={styles.root}>
      <TouchSlider>
        {phrase.split(' ').map((word, i) => (
          <div key={i} style={{ ...styles.item, marginLeft: i > 0 ? 8 : 0 }}>
            {word}
          </div>
        ))}
      </TouchSlider>
    </div>
  ));
