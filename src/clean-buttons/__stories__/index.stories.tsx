import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Clean, CleanGroup } from '..';
import { CleanButtonSize } from '../types';

export default {
  title: 'common/Clean.Group',
  component: CleanGroup,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

const handleClick = ({ target }: React.MouseEvent) => {
  action('click')((target as HTMLAnchorElement).textContent);
};

const DisplayWrapper: React.FC = ({ children }) => (
  <div style={{ background: '#fff' }}>{children}</div>
);

export const Primary = () => (
  <div style={{ margin: 'auto', maxWidth: 720 }}>
    <h3>Одна кнопка</h3>

    <DisplayWrapper>
      <Clean.Group>
        <Clean.Button onClick={handleClick}>Single button</Clean.Button>
      </Clean.Group>
    </DisplayWrapper>

    <h3>Две кнопки</h3>

    <DisplayWrapper>
      <Clean.Group>
        <Clean.Button onClick={handleClick}>Hello</Clean.Button>
        <Clean.Button onClick={handleClick}>World</Clean.Button>
      </Clean.Group>
    </DisplayWrapper>

    <h3>Три кнопки</h3>

    <DisplayWrapper>
      <Clean.Group>
        <Clean.Button onClick={handleClick}>Foo</Clean.Button>
        <Clean.Button onClick={handleClick}>Bar</Clean.Button>
        <Clean.Button onClick={handleClick}>Baz</Clean.Button>
      </Clean.Group>
    </DisplayWrapper>

    <h3>Ссылки</h3>

    <DisplayWrapper>
      <Clean.Group>
        <Clean.Button href='https://ya.ru'>Yandex</Clean.Button>
        <Clean.Button href='https://google.com'>Google</Clean.Button>
      </Clean.Group>
    </DisplayWrapper>
  </div>
);

Primary.storyName = 'Простой пример';

export const Sizes = () => {
  const sizes: CleanButtonSize[] = ['s', 'm', 'l'];

  return (
    <div style={{ margin: 'auto', maxWidth: 720 }}>
      {sizes.map(size => (
        <Fragment key={size}>
          <h3>{size.toUpperCase()}</h3>
          <DisplayWrapper>
            <Clean.Group size={size}>
              <Clean.Button onClick={handleClick}>Foo</Clean.Button>
              <Clean.Button onClick={handleClick}>Bar</Clean.Button>
              <Clean.Button onClick={handleClick}>Baz</Clean.Button>
            </Clean.Group>
          </DisplayWrapper>
        </Fragment>
      ))}
    </div>
  );
};

Sizes.storyName = 'Размеры';
