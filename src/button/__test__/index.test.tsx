import React from 'react';
import { Button } from '..';
import { render } from '@testing-library/react';
import SearchSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/search';
import PlusSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/plus';

describe('<Button />', () => {
  it('should renders without props', () => {
    const { container, queryAllByTestId } = render(<Button>Кнопка</Button>);

    expect(queryAllByTestId('button')).toHaveLength(1);
    expect(container.querySelectorAll('button')).toHaveLength(1);
    expect(container.querySelector('button')?.className).toContain('view-primary');
  });

  it('should render secondary button', () => {
    const { getByTestId } = render(<Button viewType='secondary'>Отмена</Button>);

    expect(getByTestId('button').className).toContain('view-secondary');
  });

  it('should render iconic button', () => {
    const { getByTestId, rerender } = render(<Button icon={PlusSVG} />);

    expect(getByTestId('button').className).toContain('icon-only');
    rerender(<Button icon={PlusSVG} iconPosition='end' />);
    expect(getByTestId('button').className).toContain('icon-only');
  });

  it('should handle "size" prop', () => {
    const { getByTestId, rerender } = render(<Button>Отмена</Button>);
    expect(getByTestId('button').className).toContain('size-m');

    rerender(<Button size='xs'>Отмена</Button>);
    expect(getByTestId('button').className).toContain('size-xs');

    rerender(<Button size='s'>Отмена</Button>);
    expect(getByTestId('button').className).toContain('size-s');

    rerender(<Button size='m'>Отмена</Button>);
    expect(getByTestId('button').className).toContain('size-m');
  });

  it('should handle "icon" and "iconPosition" props', () => {
    const { getByTestId, rerender } = render(<Button icon={SearchSVG}>Икать</Button>);
    expect(getByTestId('button').className).toContain('icon-start');

    rerender(
      <Button icon={SearchSVG} iconPosition='end'>
        Искать
      </Button>,
    );
    expect(getByTestId('button').className).toContain('icon-end');

    rerender(
      <Button icon={SearchSVG} iconPosition='start'>
        Искать
      </Button>,
    );
    expect(getByTestId('button').className).toContain('icon-start');
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(
      <Button data-testid='my-specific-button'>My Button</Button>,
    );

    expect(queryAllByTestId('button')).toHaveLength(0);
    expect(queryAllByTestId('my-specific-button')).toHaveLength(1);
  });

  it('should handle "loading" prop', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <Button loading icon={SearchSVG}>
        Some text here
      </Button>,
    );

    expect(getByTestId('button').textContent).toContain('Some text here');
    expect(container.querySelectorAll('svg')).toHaveLength(2);
    expect(queryAllByTestId('spinner')).toHaveLength(1);
  });

  it('should handle "appearance" prop', () => {
    const { getByTestId, rerender } = render(<Button>Some text here</Button>);

    expect(getByTestId('button').tagName).toBe('BUTTON');

    rerender(
      <Button appearance='link' href='#hello'>
        Some text here
      </Button>,
    );
    expect(getByTestId('button').tagName).toBe('A');

    rerender(<Button appearance='container'>Some text here</Button>);
    expect(getByTestId('button').tagName).toBe('DIV');
  });
});
