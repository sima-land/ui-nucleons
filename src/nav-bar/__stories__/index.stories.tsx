import React from 'react';
import { action } from '@storybook/addon-actions';
import { NavBar } from '..';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import CartSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cart';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/person';

const DemoBlock: React.FC = ({ children }) => (
  <div style={{ width: 480, margin: '0 auto 32px auto' }}>{children}</div>
);

export default {
  title: 'mobile/NavBar',
  component: NavBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

const longText =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati porro, nihil voluptatum recusandae voluptatibus esse laudantium odit aliquid ea dolores?';

export const Primary = () => (
  <>
    <DemoBlock>
      <NavBar title='Lorem ipsum, dolor sit amet' />
    </DemoBlock>
    <DemoBlock>
      <NavBar title={longText} subtitle={longText} />
    </DemoBlock>
  </>
);

export const DifferentButtons = () => (
  <>
    <DemoBlock>
      <NavBar
        title={longText}
        subtitle={longText}
        buttons={{
          start: { text: 'Отменить' },
        }}
      />
    </DemoBlock>
    <DemoBlock>
      <NavBar
        title={longText}
        subtitle={longText}
        buttons={{
          end: { text: 'Ок' },
        }}
      />
    </DemoBlock>
    <DemoBlock>
      <NavBar
        title={longText}
        subtitle={longText}
        buttons={{
          start: { text: 'Отменить' },
          end: { text: 'Ок' },
        }}
      />
    </DemoBlock>
    <DemoBlock>
      <NavBar
        title={longText}
        subtitle={longText}
        buttons={{
          start: { icon: ArrowLeftSVG },
          end: { text: 'Ок' },
        }}
      />
    </DemoBlock>
    <DemoBlock>
      <NavBar
        title={longText}
        subtitle={longText}
        buttons={{
          start: { text: 'Отмена' },
          end: { icon: CrossSVG },
        }}
      />
    </DemoBlock>
    <DemoBlock>
      <NavBar
        title={longText}
        subtitle={longText}
        buttons={{
          start: { icon: ArrowLeftSVG },
          end: { icon: CrossSVG },
        }}
      />
    </DemoBlock>
    <DemoBlock>
      <NavBar
        title={longText}
        subtitle={longText}
        buttons={{
          start: { icon: ArrowLeftSVG, onClick: action('click:start') },
          end: { icon: CrossSVG, onClick: action('click:end') },
          endSecondary: { icon: CartSVG, onClick: action('click:endSecondary') },
        }}
      />
    </DemoBlock>
    <DemoBlock>
      <NavBar
        title={longText}
        subtitle={longText}
        buttons={{
          start: { icon: ArrowLeftSVG, onClick: action('click:start') },
          startSecondary: { icon: PersonSVG, onClick: action('click:startSecondary') },
          end: { icon: CrossSVG, onClick: action('click:end') },
          endSecondary: { icon: CartSVG, onClick: action('click:endSecondary') },
        }}
      />
    </DemoBlock>
  </>
);
