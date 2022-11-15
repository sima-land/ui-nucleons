import React from 'react';
import { render } from '@testing-library/react';
import { CleanGroup, CleanButton } from '../index';
import { CleanGroupSizeContext } from '../utils';

describe('CleanButton', () => {
  it('should render without props', () => {
    const { asFragment } = render(<CleanButton />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle props', () => {
    const { asFragment, rerender, queryAllByRole, container } = render(
      <CleanButton href='https://site.com' children='Go to site' />,
    );

    expect(queryAllByRole('button')).toHaveLength(0);
    expect(container.querySelectorAll('a')).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();

    rerender(<CleanButton href={undefined} asLink />);

    expect(queryAllByRole('button')).toHaveLength(0);
    expect(container.querySelectorAll('a')).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('CleanGroup', () => {
  it('should render without props', () => {
    const { asFragment } = render(<CleanGroup />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render multiple buttons', () => {
    const { asFragment } = render(
      <CleanGroup>
        <CleanButton>Foo</CleanButton>
        <CleanButton>Bar</CleanButton>
        <CleanButton href='https://www.abc.xyz'>XYZ</CleanButton>
        <button>Just button</button>
      </CleanGroup>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render single button', () => {
    const { asFragment } = render(
      <CleanGroup>
        <CleanButton>One button</CleanButton>
      </CleanGroup>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle size prop', () => {
    const { container } = render(
      <CleanGroup size='m'>
        <CleanButton>One</CleanButton>
        <CleanButton>Two</CleanButton>
      </CleanGroup>,
    );

    expect(container.querySelectorAll('.size-m')).toHaveLength(2);
  });

  it('should handle size from context', () => {
    const { container } = render(
      <CleanGroupSizeContext.Provider value='l'>
        <CleanGroup>
          <CleanButton>One</CleanButton>
          <CleanButton>Two</CleanButton>
        </CleanGroup>
      </CleanGroupSizeContext.Provider>,
    );

    expect(container.querySelectorAll('.size-l')).toHaveLength(2);
  });

  it('property should take precedence over the value from the context', () => {
    const { container } = render(
      <CleanGroupSizeContext.Provider value='l'>
        <CleanGroup size='s'>
          <CleanButton>One</CleanButton>
          <CleanButton>Two</CleanButton>
        </CleanGroup>
      </CleanGroupSizeContext.Provider>,
    );

    expect(container.querySelectorAll('.size-s')).toHaveLength(2);
    expect(container.querySelectorAll('.size-l')).toHaveLength(0);
  });
});
