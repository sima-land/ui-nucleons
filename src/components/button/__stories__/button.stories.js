import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../';
import { BUTTON_COLORS, BUTTON_SHAPES } from '../create-button-style';
import Icon from '../../icon';
import { heart } from '../../icons';

const all = {
  display: 'inline-block',
  border: '1px solid',
  padding: '15px',
  marginRight: '20px',
};
const allGray = {
  ...all,
  background: '#d1d2d6',
};
const flexStyle = {
  display: 'flex',
  width: '450px',
  justifyContent: 'space-around',
  padding: '15px 5px',
};
const circleFlexStyle = {
  ...flexStyle,
  width: '350px',
};
const width = {
  width: '75px',
  padding: '5px 0',
};

/**
 * Заголовки.
 * @param {Object} style Стили.
 * @return {ReactElement} Заголовки.
 */
const headers = style => (
  <div style={style}>
    <div style={width}>Простая</div>
    <div style={width}>С тенью</div>
    <div style={width}>В фокусе</div>
    <div style={width}>Неактивная</div>
  </div>
);

storiesOf('Button', module)
  .add('shapes and colors', () => (
    <div>
      {[allGray, all].map((fon, key) => (
        <div style={fon} key={key}>
          {BUTTON_SHAPES.filter(shape => shape !== 'circle').map((shape, index) => (
            <div key={10 + index}>
              <h2>Форма {shape}</h2>
              {headers(flexStyle)}
              {BUTTON_COLORS.map((color, secondLevelIndex) => (
                <div style={flexStyle} key={20 + secondLevelIndex}>
                  <Button shape={shape} color={color}>Кнопка</Button>
                  <Button shape={shape} color={color} withShadow>Кнопка</Button>
                  <Button shape={shape} color={color} isFocused>Кнопка</Button>
                  <Button shape={shape} color={color} isDisabled>Кнопка</Button>
                </div>
              ))}
            </div>
          ))}
          <div>
            <h2>Форма circle</h2>
            {headers(circleFlexStyle)}
            {BUTTON_COLORS.map((color, index) => (
              <div style={circleFlexStyle} key={30 + index}>
                <Button shape='circle' color={color}>
                  <Icon icon={heart} color='dark-gray' />
                </Button>
                <Button shape='circle' color={color} withShadow>
                  <Icon icon={heart} color='dark-gray' />
                </Button>
                <Button shape='circle' color={color} isFocused>
                  <Icon icon={heart} color='dark-gray' />
                </Button>
                <Button shape='circle' color={color} isDisabled>
                  <Icon icon={heart} color='dark-gray' />
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ))
  .add('appearances', () => (
    <div style={flexStyle}>
      <Button appearance='link' href='https://www.sima-land.ru'>Кнопка-ссылка</Button>
      <Button appearance='container'>Кнопка-блок</Button>
      <Button appearance='button'>Кнопка-кнопка</Button>
    </div>
  ))
  .add('with actions', () => (
    <div style={flexStyle}>
      <Button onClick={action('click')}>Click me!</Button>
      <Button onMouseEnter={action('mouse enter')}>Hover me!</Button>
      <Button onMouseLeave={action('mouse leave')}>Leave me!</Button>
    </div>
  ));
