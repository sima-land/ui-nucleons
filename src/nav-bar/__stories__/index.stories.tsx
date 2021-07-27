import React from 'react';
import { action } from '@storybook/addon-actions';
import { NavBar } from '..';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import CartSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cart';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/person';

const DemoWrapper: React.FC = ({ children }) => (
  <div
    style={{ width: 480, margin: '64px auto', boxShadow: '0 8px 12px rgba(0,0,0,.1)' }}
    children={children}
  />
);

export default {
  title: 'mobile/NavBar',
  component: NavBar,
  parameters: {
    layout: 'padded',
  },
};

export const JustTitle = () => (
  <DemoWrapper>
    <NavBar
      title='Очень очень очень длинный заголовок'
    />
  </DemoWrapper>
);

export const TitleAndSubtitle = () => (
  <DemoWrapper>
    <NavBar
      title='Очень очень очень длинный заголовок'
      subtitle='Очень очень очень очень длинный подзаголовок'
    />
  </DemoWrapper>
);

export const WithButtons = () => (
  <>
    <DemoWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
        subtitle='Очень очень очень очень длинный подзаголовок'
        buttons={{
          start: { text: 'Отменить' },
        }}
      />
    </DemoWrapper>
    <DemoWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
        subtitle='Очень очень очень очень длинный подзаголовок'
        buttons={{
          end: { text: 'Ок' },
        }}
      />
    </DemoWrapper>
    <DemoWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
        subtitle='Очень очень очень очень длинный подзаголовок'
        buttons={{
          start: { text: 'Отменить' },
          end: { text: 'Ок' },
        }}
      />
    </DemoWrapper>
    <DemoWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
        subtitle='Очень очень очень очень длинный подзаголовок'
        buttons={{
          start: { icon: ArrowLeftSVG },
          end: { text: 'Ок' },
        }}
      />
    </DemoWrapper>
    <DemoWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
        subtitle='Очень очень очень очень длинный подзаголовок'
        buttons={{
          start: { text: 'Отмена' },
          end: { icon: CrossSVG },
        }}
      />
    </DemoWrapper>
    <DemoWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
        subtitle='Очень очень очень очень длинный подзаголовок'
        buttons={{
          start: { icon: ArrowLeftSVG },
          end: { icon: CrossSVG },
        }}
      />
    </DemoWrapper>
    <DemoWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
        subtitle='Очень очень очень очень длинный подзаголовок'
        buttons={{
          start: { icon: ArrowLeftSVG, onClick: action('click:start') },
          end: { icon: CrossSVG, onClick: action('click:end') },
          endSecondary: { icon: CartSVG, onClick: action('click:endSecondary') },
        }}
      />
    </DemoWrapper>
    <DemoWrapper>
      <NavBar
        title='Очень очень очень длинный заголовок'
        subtitle='Очень очень очень очень длинный подзаголовок'
        buttons={{
          start: { icon: ArrowLeftSVG, onClick: action('click:start') },
          startSecondary: { icon: PersonSVG, onClick: action('click:startSecondary') },
          end: { icon: CrossSVG, onClick: action('click:end') },
          endSecondary: { icon: CartSVG, onClick: action('click:endSecondary') },
        }}
      />
    </DemoWrapper>
  </>
);
