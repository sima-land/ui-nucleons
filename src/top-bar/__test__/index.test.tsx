import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TopBar, TopBarProps } from '..';
import ArrowUpSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-up';
import ArrowRightSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-right';
import ArrowDownSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-down';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import { InnerBorder } from '../../styling/borders';

describe('<TopBar />', () => {
  it('should render as divided', () => {
    const { getByTestId } = render(<TopBar divided />);

    expect(getByTestId('top-bar').classList.contains(InnerBorder.bottom)).toBe(true);
  });

  it('should renders with start icon', () => {
    const { getByTestId } = render(
      <TopBar
        buttons={{
          start: {
            icon: <ArrowUpSVG />,
          },
        }}
      />,
    );

    expect(getByTestId('top-bar:button').querySelectorAll('svg')).toHaveLength(1);
  });

  it('should renders with end icon', () => {
    const { getByTestId } = render(
      <TopBar
        buttons={{
          end: {
            icon: <ArrowUpSVG />,
          },
        }}
      />,
    );

    expect(getByTestId('top-bar:button').querySelectorAll('svg')).toHaveLength(1);
  });

  it('should renders with start icons', () => {
    const { container } = render(
      <TopBar
        buttons={{
          start: {
            icon: <ArrowUpSVG />,
          },
          startSecondary: {
            icon: <ArrowDownSVG />,
          },
        }}
      />,
    );

    expect(container.querySelectorAll('[data-testid="top-bar:button"]')).toHaveLength(2);
    expect(container.querySelectorAll('[data-testid="top-bar:button"] svg')).toHaveLength(2);
  });

  it('should renders with end icons', () => {
    const { container } = render(
      <TopBar
        buttons={{
          end: {
            icon: <ArrowUpSVG />,
          },
          endSecondary: {
            icon: <ArrowDownSVG />,
          },
        }}
      />,
    );

    expect(container.querySelectorAll('[data-testid="top-bar:button"]')).toHaveLength(2);
    expect(container.querySelectorAll('[data-testid="top-bar:button"] svg')).toHaveLength(2);
  });

  it('should renders with all icons', () => {
    const buttons: Required<Required<TopBarProps>['buttons']> = {
      start: {
        icon: <ArrowUpSVG />,
        onClick: jest.fn(),
      },
      startSecondary: {
        icon: <ArrowRightSVG />,
        onClick: jest.fn(),
      },
      end: {
        icon: <ArrowDownSVG />,
        onClick: jest.fn(),
      },
      endSecondary: {
        icon: <ArrowLeftSVG />,
        onClick: jest.fn(),
      },
    };

    const { getAllByTestId } = render(<TopBar buttons={buttons} />);

    // start
    fireEvent.click(getAllByTestId('top-bar:button')[0]);
    expect(buttons.start.onClick).toHaveBeenCalledTimes(1);

    // start secondary
    fireEvent.click(getAllByTestId('top-bar:button')[1]);
    expect(buttons.startSecondary.onClick).toHaveBeenCalledTimes(1);

    // end
    fireEvent.click(getAllByTestId('top-bar:button')[2]);
    expect(buttons.endSecondary.onClick).toHaveBeenCalledTimes(1);

    // end secondary
    fireEvent.click(getAllByTestId('top-bar:button')[3]);
    expect(buttons.end.onClick).toHaveBeenCalledTimes(1);
  });

  it('should renders with start text button', () => {
    const { container } = render(
      <TopBar
        buttons={{
          start: {
            text: 'Hello',
          },
        }}
      />,
    );

    // содержит заглушку для формирования высоты поэтому текст дважды
    expect(container.textContent).toBe('HelloHello');
  });

  it('should renders with end text button', () => {
    const { container } = render(
      <TopBar
        buttons={{
          end: {
            text: 'World',
          },
        }}
      />,
    );

    // содержит заглушку для формирования высоты поэтому текст дважды
    expect(container.textContent).toBe('WorldWorld');
  });

  it('should renders with mixed buttons', () => {
    const { getAllByTestId } = render(
      <TopBar
        buttons={{
          start: {
            text: 'World',
          },
          end: {
            icon: <ArrowUpSVG />,
          },
        }}
      />,
    );

    expect(getAllByTestId('top-bar:button')[0].textContent).toBe('World');
    expect(getAllByTestId('top-bar:button')[1].querySelectorAll('svg')).toHaveLength(1);
  });
});
