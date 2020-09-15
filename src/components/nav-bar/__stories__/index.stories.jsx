import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavBar from '..';
import ArrowLeftSVG from '../../icons/full-left-arrow.svg';
import CrossSVG from '../../icons/cross-big.svg';
import CartSVG from '../../icons/cart.svg';
import UserSVG from '../../icons/user.svg';

const DisplayWrapper = ({ children }) => (
  <div
    style={{ width: 480, margin: '64px auto', boxShadow: '0 8px 12px rgba(0,0,0,.1)' }}
    children={children}
  />
);

storiesOf('NavBar', module)
  .add('Just title', () => (
    <DisplayWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
      />
    </DisplayWrapper>
  ))
  .add('Title and subtitle', () => (
    <DisplayWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
        subtitle='Очень очень очень очень длинный подзаголовок'
      />
    </DisplayWrapper>
  ))
  .add('With buttons', () => (
    <>
      <DisplayWrapper>
        <NavBar
          title='Очень очень очень длинный заголовок'
          subtitle='Очень очень очень очень длинный подзаголовок'
          buttons={{
            start: { text: 'Отменить' },
          }}
        />
      </DisplayWrapper>
      <DisplayWrapper>
        <NavBar
          title='Очень очень очень длинный заголовок'
          subtitle='Очень очень очень очень длинный подзаголовок'
          buttons={{
            end: { text: 'Ок' },
          }}
        />
      </DisplayWrapper>
      <DisplayWrapper>
        <NavBar
          title='Очень очень очень длинный заголовок'
          subtitle='Очень очень очень очень длинный подзаголовок'
          buttons={{
            start: { text: 'Отменить' },
            end: { text: 'Ок' },
          }}
        />
      </DisplayWrapper>
      <DisplayWrapper>
        <NavBar
          title='Очень очень очень длинный заголовок'
          subtitle='Очень очень очень очень длинный подзаголовок'
          buttons={{
            start: { icon: ArrowLeftSVG },
            end: { text: 'Ок' },
          }}
        />
      </DisplayWrapper>
      <DisplayWrapper>
        <NavBar
          title='Очень очень очень длинный заголовок'
          subtitle='Очень очень очень очень длинный подзаголовок'
          buttons={{
            start: { text: 'Отмена' },
            end: { icon: CrossSVG },
          }}
        />
      </DisplayWrapper>
      <DisplayWrapper>
        <NavBar
          title='Очень очень очень длинный заголовок'
          subtitle='Очень очень очень очень длинный подзаголовок'
          buttons={{
            start: { icon: ArrowLeftSVG },
            end: { icon: CrossSVG },
          }}
        />
      </DisplayWrapper>
      <DisplayWrapper>
        <NavBar
          title='Очень очень очень длинный заголовок'
          subtitle='Очень очень очень очень длинный подзаголовок'
          buttons={{
            start: { icon: ArrowLeftSVG, onClick: action('click:start') },
            end: { icon: CrossSVG, onClick: action('click:end') },
            endSecondary: { icon: CartSVG, onClick: action('click:endSecondary') },
          }}
        />
      </DisplayWrapper>
      <DisplayWrapper>
        <NavBar
          title='Очень очень очень длинный заголовок'
          subtitle='Очень очень очень очень длинный подзаголовок'
          buttons={{
            start: { icon: ArrowLeftSVG, onClick: action('click:start') },
            startSecondary: { icon: UserSVG, onClick: action('click:startSecondary') },
            end: { icon: CrossSVG, onClick: action('click:end') },
            endSecondary: { icon: CartSVG, onClick: action('click:endSecondary') },
          }}
        />
      </DisplayWrapper>
    </>
  ));
