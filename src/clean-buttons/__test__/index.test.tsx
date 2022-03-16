import React from 'react';
import { render } from '@testing-library/react';
import { Clean } from '../index';
import { CleanGroupSizeContext } from '../utils';

describe('Clean.Button', () => {
  it('should render without props', () => {
    const { asFragment } = render(<Clean.Button />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle props', () => {
    const { asFragment, rerender, queryAllByRole, container } = render(
      <Clean.Button href='https://site.com' children='Go to site' />,
    );

    expect(queryAllByRole('button')).toHaveLength(0);
    expect(container.querySelectorAll('a')).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();

    rerender(<Clean.Button href={undefined} asLink />);

    expect(queryAllByRole('button')).toHaveLength(0);
    expect(container.querySelectorAll('a')).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Clean.Group', () => {
  it('should render without props', () => {
    const { asFragment } = render(<Clean.Group />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render multiple buttons', () => {
    const { asFragment } = render(
      <Clean.Group>
        <Clean.Button>Foo</Clean.Button>
        <Clean.Button>Bar</Clean.Button>
        <Clean.Button href='https://www.abc.xyz'>XYZ</Clean.Button>
        <button>Just button</button>
      </Clean.Group>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render single button', () => {
    const { asFragment } = render(
      <Clean.Group>
        <Clean.Button>One button</Clean.Button>
      </Clean.Group>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle size prop', () => {
    const { container } = render(
      <Clean.Group size='m'>
        <Clean.Button>One</Clean.Button>
        <Clean.Button>Two</Clean.Button>
      </Clean.Group>,
    );

    expect(container.querySelectorAll('.size-m')).toHaveLength(2);
  });

  it('should handle size from context', () => {
    const { container } = render(
      <CleanGroupSizeContext.Provider value='l'>
        <Clean.Group>
          <Clean.Button>One</Clean.Button>
          <Clean.Button>Two</Clean.Button>
        </Clean.Group>
      </CleanGroupSizeContext.Provider>,
    );

    expect(container.querySelectorAll('.size-l')).toHaveLength(2);
  });

  it('property should take precedence over the value from the context', () => {
    const { container } = render(
      <CleanGroupSizeContext.Provider value='l'>
        <Clean.Group size='s'>
          <Clean.Button>One</Clean.Button>
          <Clean.Button>Two</Clean.Button>
        </Clean.Group>
      </CleanGroupSizeContext.Provider>,
    );

    expect(container.querySelectorAll('.size-s')).toHaveLength(2);
    expect(container.querySelectorAll('.size-l')).toHaveLength(0);
  });
});
