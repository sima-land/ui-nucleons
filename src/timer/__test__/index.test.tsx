import { mount } from 'enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { Timer } from '..';
import { getDistanceToNow } from '../utils';

jest.useFakeTimers();
jest.spyOn(global, 'clearInterval');

jest.mock('../utils', () => {
  const original = jest.requireActual('../utils');

  return {
    ...original,
    __esModule: true,
    getDistanceToNow: jest.fn(() => ({ days: 1, hours: 2, minutes: 3, seconds: 4 })),
  };
});

beforeEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});

describe('Timer', () => {
  it('should render properly without props', () => {
    const wrapper = mount(<Timer date='' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass props', () => {
    const wrapper = mount(
      <Timer date='2030-03-08' timeout={500} format={({ days }) => `Осталось дней: ${days}`} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should change time by timeout', () => {
    const container = document.createElement('div');

    document.body.appendChild(container);

    act(() => {
      render(<Timer date='2030-03-08' />, container);
    });

    expect(getDistanceToNow).toHaveBeenCalledTimes(3);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(getDistanceToNow).toHaveBeenCalledTimes(9);
  });

  it('should reset interval on unmount', () => {
    const container = document.createElement('div');

    document.body.appendChild(container);

    act(() => {
      render(<Timer date='30' />, container);
    });

    expect(clearInterval).toHaveBeenCalledTimes(0);

    act(() => {
      unmountComponentAtNode(container);
    });

    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});
