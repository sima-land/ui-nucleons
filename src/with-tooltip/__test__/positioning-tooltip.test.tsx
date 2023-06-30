import { mount, ReactWrapper } from 'enzyme';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { PositioningTooltip } from '../positioning-tooltip';
import { placeTooltip } from '../utils';

jest.mock('../utils', () => {
  const original = jest.requireActual('../utils');

  return {
    ...original,
    __esModule: true,
    placeTooltip: jest.fn(original.placeTooltip),
  };
});

describe('PositioningTooltip', () => {
  let wrapper: ReactWrapper;

  const actualDescriptor = {
    ...Object.getOwnPropertyDescriptor(window, 'getComputedStyle'),
  };

  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: (el: any) => el.__fakeStyles || actualDescriptor.value(el),
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
    (placeTooltip as any).mockClear();
  });

  it('should renders', () => {
    wrapper = mount(
      <PositioningTooltip
        openerRef={{ current: document.createElement('div') }}
        children='Test tooltip'
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle outside click', () => {
    const spy = jest.fn();

    wrapper = mount(
      <PositioningTooltip
        openerRef={{ current: document.createElement('div') }}
        children='Test tooltip'
        onDismiss={spy}
      />,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    const testEvent = new MouseEvent('click');

    act(() => {
      document.documentElement.dispatchEvent(testEvent);
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not call placeTooltip when some ref is empty', () => {
    jest.useFakeTimers('modern');

    wrapper = mount(
      <PositioningTooltip openerRef={{ current: undefined }} children='Test tooltip' />,
    );

    expect(placeTooltip).toHaveBeenCalledTimes(0);
  });

  it('should handle window "resize" event', () => {
    jest.useFakeTimers('modern');

    wrapper = mount(
      <PositioningTooltip
        openerRef={{ current: document.createElement('div') }}
        children='Test tooltip'
      />,
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
      <PositioningTooltip
        openerRef={{ current: document.createElement('div') }}
        children='Test tooltip'
      />,
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
      <PositioningTooltip
        openerRef={{ current: document.createElement('div') }}
        children='Test tooltip'
        onDismiss={spy}
      />,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('svg[data-testid="tooltip:cross"]').simulate('click');
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "scroll" event of custom scroll parent', () => {
    const container = document.createElement('div');
    (container as any).__fakeStyles = { overflow: 'auto' };

    document.body.append(container);

    act(() => {
      render(
        <PositioningTooltip
          openerRef={{ current: document.createElement('div') }}
          children='Test tooltip'
        />,
        container,
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
