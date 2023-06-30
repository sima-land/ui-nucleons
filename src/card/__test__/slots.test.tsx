import { render } from '@testing-library/react';
import { CardContent, CardFooter, CardHeader } from '../slots';
import { CardContext } from '../utils';
import { TopBar } from '../../top-bar';
import { MediumRounds, SmallRounds } from '../../styling/shapes';

describe('CardHeader', () => {
  it('should render just children inside', () => {
    const { container } = render(
      <CardContext.Provider value={{}}>
        <CardHeader>Just children</CardHeader>
      </CardContext.Provider>,
    );

    expect(container.textContent).toBe('Just children');
  });

  it('should render TopBar with medium rounds', () => {
    const { getByTestId, queryAllByTestId } = render(
      <CardContext.Provider value={{ rounds: 'm' }}>
        <CardHeader divided>
          <TopBar title='hello' />
        </CardHeader>
      </CardContext.Provider>,
    );

    expect(queryAllByTestId('top-bar')).toHaveLength(1);
    expect(getByTestId('top-bar').classList.contains(MediumRounds.top)).toBe(true);
  });

  it('should render TopBar with small rounds', () => {
    const { getByTestId, queryAllByTestId } = render(
      <CardContext.Provider value={{ rounds: 's' }}>
        <CardHeader divided>
          <TopBar />
        </CardHeader>
      </CardContext.Provider>,
    );

    expect(queryAllByTestId('top-bar')).toHaveLength(1);
    expect(getByTestId('top-bar').classList.contains(SmallRounds.top)).toBe(true);
  });
});

describe('CardContent', () => {
  it('should handle props', () => {
    const { container } = render(
      <CardContent className='test-class' style={{ width: 1080 }}>
        Just content
      </CardContent>,
    );

    expect(container.querySelector('div')?.classList.contains('test-class')).toBe(true);
    expect(container.querySelector('div')?.style.width).toBe('1080px');
  });
});

describe('CardFooter', () => {
  it('should handle props', () => {
    const { container } = render(
      <CardFooter divided className='test-footer' style={{ width: 1920 }}>
        Just content
      </CardFooter>,
    );

    expect(container.querySelector('div')?.classList.contains('test-footer')).toBe(true);
    expect(container.querySelector('div')?.style.width).toBe('1920px');
  });
});
