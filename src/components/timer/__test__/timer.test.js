import { mount } from 'enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import React from 'react';
import Timer from '../index';
import { getTimeDurationToNow } from '../helper';

jest.useFakeTimers();

jest.mock('../helper', () => {
  const original = jest.requireActual('../helper');
  return {
    ...original,
    __esModule: true,
    getTimeDurationToNow: jest.fn(),
  };
});

beforeEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});

describe('Timer', () => {
  it('should render properly without props', () => {
    const wrapper = mount(
      <Timer />
    );
    expect(wrapper.find('time')).toHaveLength(1);
  });

  it('should pass props', () => {
    const testStyle = {
      className: 'timer',
      style: {
        padding: 10,
        margin: 10,
        background: '#eee',
      },
    };
    const wrapper = mount(
      <Timer
        endTime='2020-03-08'
        format='D д., hh:mm:ss'
        timeProps={testStyle}
      />
    );
    expect(wrapper.find('time').at(0).prop('className')).toBe('timer');
    expect(wrapper.find('time').at(0).prop('style')).toEqual(testStyle.style);
  });
  it('should change time by timeout', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(<Timer endTime='30' />, container);
    });

    expect(getTimeDurationToNow).toHaveBeenCalledTimes(1);
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(getTimeDurationToNow).toHaveBeenCalledTimes(6);
  });

  it('should reset interval on unmount', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(<Timer endTime='30' />, container);
    });
    expect(clearInterval).toHaveBeenCalledTimes(0);
    act(() => {
      unmountComponentAtNode(container);
    });
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});
