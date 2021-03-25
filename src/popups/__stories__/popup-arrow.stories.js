import React from 'react';
import { storiesOf } from '@storybook/react';
import PopupArrow from '../popup-arrow';

const containerStyles = {
  position: 'relative',
  margin: '0 auto 5px',
  width: '210px',
  height: '50px',
  backgroundColor: '#d1d2d6',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid',
};

const titleStyle = {
  margin: '0',
  fontSize: '20px',
};

storiesOf('deprecated/PopupArrow', module)
  .add('appearance with different props', () => (
    <div>
      <div style={containerStyles}>
        <h2 style={titleStyle}>With shadow</h2>
        <PopupArrow shadow position={{ top: '40px', left: '30px' }} />
        <PopupArrow shadow position={{ top: '40px', left: '70px' }} color='blue' />
        <PopupArrow shadow position={{ top: '40px', left: '110px' }} color='deep-blue' />
        <PopupArrow shadow position={{ top: '40px', left: '150px' }} color='dark-blue' />
      </div>
      <div style={containerStyles}>
        <h2 style={titleStyle}>Without shadow</h2>
        <PopupArrow position={{ top: '40px', left: '30px' }} />
        <PopupArrow position={{ top: '40px', left: '70px' }} color='blue' />
        <PopupArrow position={{ top: '40px', left: '110px' }} color='deep-blue' />
        <PopupArrow position={{ top: '40px', left: '150px' }} color='dark-blue' />
      </div>
      <div style={containerStyles}>
        <h2 style={titleStyle}>In different direction</h2>
        <PopupArrow shadow direction='top' position={{ top: '40px', left: '30px' }} />
        <PopupArrow shadow direction='bottom' position={{ top: '40px', left: '70px' }} color='blue' />
        <PopupArrow shadow direction='top' position={{ top: '40px', left: '110px' }} color='deep-blue' />
        <PopupArrow shadow direction='bottom' position={{ top: '40px', left: '150px' }} color='dark-blue' />
      </div>
    </div>
  ));
