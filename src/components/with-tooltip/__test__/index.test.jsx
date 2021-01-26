import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import WithTooltip, { Tooltip } from '../index';
import Icon from '../../icon';
import { placeTooltip } from '../utils';

jest.mock('../utils', () => {
  const original = jest.requireActual('../utils');

  return {
    ...original,
    __esModule: true,
    placeTooltip: jest.fn(original.placeTooltip),
  };
});

describe('WithTooltip', () => {
  let wrapper;

  afterEach(() => {
    // enzyme не выполняет unmount после завершения it() - выполняем вручную (иначе ломаются тесты)
    wrapper && wrapper.unmount();
  });

  it('should renders without props', () => {
    wrapper = mount(
      <WithTooltip />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "inline" prop', () => {
    wrapper = mount(
      <WithTooltip shown inline />
    );

    expect(wrapper.find(Tooltip).prop('inline')).toBe(true);
  });

  it('should handle "holderElement" prop', () => {
    wrapper = mount(
      <WithTooltip holderElement='aside' />
    );

    expect(wrapper.find('aside')).toHaveLength(1);
  });

  it('should handle "holderProps" prop', () => {
    wrapper = mount(
      <WithTooltip holderElement='aside' holderProps={{ id: 'test-block' }} />
    );

    expect(wrapper.find('aside').prop('id')).toBe('test-block');
  });

  it('should handle "shown" prop', () => {
    wrapper = mount(
      <WithTooltip shown />
    );

    expect(wrapper.find(Tooltip)).toHaveLength(1);

    wrapper.setProps({ shown: false });
    expect(wrapper.find(Tooltip)).toHaveLength(0);
  });

  it('should handle "tooltipChildren" prop', () => {
    wrapper = mount(
      <WithTooltip shown tooltipChildren='Hello, world!' />
    );

    expect(wrapper.find(Tooltip).prop('children')).toBe('Hello, world!');
  });

  it('should handle "onDismiss" prop', () => {
    const spy = jest.fn();

    wrapper = mount(
      <WithTooltip shown onDismiss={spy} />
    );

    expect(wrapper.find(Tooltip).prop('onDismiss')).toBe(spy);
  });
});

describe('Tooltip', () => {
  let wrapper;

  const actualDescriptor = {
    ...Object.getOwnPropertyDescriptor(window, 'getComputedStyle'),
  };

  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: el => el.__fakeStyles || actualDescriptor.value(el),
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'getComputedStyle', actualDescriptor);
  });

  afterEach(() => {
    // enzyme не выполняет unmount после завершения it() - выполняем вручную (иначе ломаются тесты)
    wrapper && wrapper.length > 0 && wrapper.unmount();
  });

  beforeEach(() => {
    placeTooltip.mockClear();
  });

  it('should renders', () => {
    wrapper = mount(
      <Tooltip
        holderRef={{ current: document.createElement('div') }}
        children='Test tooltip'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "inline" prop', () => {
    wrapper = mount(
      <Tooltip
        holderRef={{ current: document.createElement('div') }}
        children='Test tooltip'
        inline
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle outside click', () => {
    const spy = jest.fn();

    wrapper = mount(
      <Tooltip
        holderRef={{ current: document.createElement('div') }}
        children='Test tooltip'
        inline
        onDismiss={spy}
      />
    );

    expect(spy).toHaveBeenCalledTimes(0);

    const testEvent = new MouseEvent('click');

    act(() => {
      document.documentElement.dispatchEvent(testEvent);
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toBe(testEvent);
    expect(spy.mock.calls[0][1]).toEqual({ byHolder: false });
  });

  it('should handle window "resize" event', () => {
    jest.useFakeTimers('modern');

    wrapper = mount(
      <Tooltip
        holderRef={{ current: document.createElement('div') }}
        children='Test tooltip'
      />
    );

    expect(placeTooltip).toHaveBeenCalledTimes(1);

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(placeTooltip).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(250);

    expect(placeTooltip).toHaveBeenCalledTimes(2);
  });

  it('should handle window "scroll" event', () => {
    wrapper = mount(
      <Tooltip
        holderRef={{ current: document.createElement('div') }}
        children='Test tooltip'
      />
    );

    expect(placeTooltip).toHaveBeenCalledTimes(1);

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(placeTooltip).toHaveBeenCalledTimes(2);
  });

  it('should call "onDismiss" on cross click', () => {
    const spy = jest.fn();

    wrapper = mount(
      <Tooltip
        holderRef={{ current: document.createElement('div') }}
        children='Test tooltip'
        inline
        onDismiss={spy}
      />
    );

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find(Icon).simulate('click');
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "scroll" event of custom scroll parent', () => {
    const container = document.createElement('div');
    container.__fakeStyles = { overflow: 'auto' };

    document.body.append(container);

    act(() => {
      render(
        <Tooltip
          holderRef={{ current: document.createElement('div') }}
          children='Test tooltip'
        />,
        container
      );
    });

    expect(placeTooltip).toHaveBeenCalledTimes(1);

    act(() => {
      container.dispatchEvent(new Event('scroll'));
    });

    expect(placeTooltip).toHaveBeenCalledTimes(2);

    container.remove();
  });
});
