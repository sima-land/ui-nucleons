import React, { Fragment } from 'react';
import { CleanGroup, CleanButton } from '..';
import { CleanButtonSize } from '../types';

export default {
  title: 'common/CleanGroup',
  component: CleanGroup,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

const handleClick = ({ currentTarget }: React.MouseEvent<HTMLAnchorElement>) => {
  alert(currentTarget.textContent);
};

const DisplayWrapper: React.FC = ({ children }) => (
  <div style={{ background: '#fff' }}>{children}</div>
);

export function Primary() {
  return (
    <div style={{ margin: 'auto', maxWidth: 720 }}>
      <h3>Одна кнопка</h3>

      <DisplayWrapper>
        <CleanGroup>
          <CleanButton onClick={handleClick}>Single button</CleanButton>
        </CleanGroup>
      </DisplayWrapper>

      <h3>Две кнопки</h3>

      <DisplayWrapper>
        <CleanGroup>
          <CleanButton onClick={handleClick}>Hello</CleanButton>
          <CleanButton onClick={handleClick}>World</CleanButton>
        </CleanGroup>
      </DisplayWrapper>

      <h3>Три кнопки</h3>

      <DisplayWrapper>
        <CleanGroup>
          <CleanButton onClick={handleClick}>Foo</CleanButton>
          <CleanButton onClick={handleClick}>Bar</CleanButton>
          <CleanButton onClick={handleClick}>Baz</CleanButton>
        </CleanGroup>
      </DisplayWrapper>

      <h3>Ссылки</h3>

      <DisplayWrapper>
        <CleanGroup>
          <CleanButton href='https://ya.ru'>Yandex</CleanButton>
          <CleanButton href='https://google.com'>Google</CleanButton>
        </CleanGroup>
      </DisplayWrapper>
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function Sizes() {
  const sizes: CleanButtonSize[] = ['s', 'm', 'l'];

  return (
    <div style={{ margin: 'auto', maxWidth: 720 }}>
      {sizes.map(size => (
        <Fragment key={size}>
          <h3>{size.toUpperCase()}</h3>
          <DisplayWrapper>
            <CleanGroup size={size}>
              <CleanButton onClick={handleClick}>Foo</CleanButton>
              <CleanButton onClick={handleClick}>Bar</CleanButton>
              <CleanButton onClick={handleClick}>Baz</CleanButton>
            </CleanGroup>
          </DisplayWrapper>
        </Fragment>
      ))}
    </div>
  );
}

Sizes.storyName = 'Размеры';
