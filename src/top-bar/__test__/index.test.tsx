import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TopBar, TopBarProps } from '..';
import ArrowUpSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-up';
import ArrowRightSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-right';
import ArrowDownSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-down';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';

describe('<TopBar />', () => {
  it('should render without props', () => {
    const { container } = render(<TopBar />);

    expect(container).toMatchSnapshot();
  });

  it('should render as divided', () => {
    const { container } = render(<TopBar divided />);

    expect(container).toMatchSnapshot();
  });

  it('should renders with start icon', () => {
    const { container } = render(
      <TopBar
        buttons={{
          start: {
            icon: <ArrowUpSVG />,
          },
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should renders with end icon', () => {
    const { container } = render(
      <TopBar
        buttons={{
          end: {
            icon: <ArrowUpSVG />,
          },
        }}
      />,
    );

    expect(container).toMatchSnapshot();
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

    expect(container).toMatchSnapshot();
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

    expect(container).toMatchSnapshot();
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
    expect(buttons.start.onClick).toBeCalledTimes(1);

    // start secondary
    fireEvent.click(getAllByTestId('top-bar:button')[1]);
    expect(buttons.startSecondary.onClick).toBeCalledTimes(1);

    // end
    fireEvent.click(getAllByTestId('top-bar:button')[2]);
    expect(buttons.endSecondary.onClick).toBeCalledTimes(1);

    // end secondary
    fireEvent.click(getAllByTestId('top-bar:button')[3]);
    expect(buttons.end.onClick).toBeCalledTimes(1);
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

    expect(container).toMatchSnapshot();
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

    expect(container).toMatchSnapshot();
  });

  it('should renders with mixed buttons', () => {
    const { container } = render(
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

    expect(container).toMatchSnapshot();
  });
});
