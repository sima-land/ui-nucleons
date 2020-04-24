import React from 'react';
import { mount } from 'enzyme';
import { render } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import Attach, { DefaultLabel } from '../index';
import classes from '../attach.scss';

describe('Attach', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Attach />
    );

    expect(wrapper.find('input')).toHaveLength(1);
  });
  it('should handle "renderLabel" prop', () => {
    const wrapper = mount(
      <Attach
        renderLabel={() => (<span>Test span as label</span>)}
      />
    );
    expect(wrapper.find(DefaultLabel)).toHaveLength(0);
    expect(wrapper.find(`.${classes['attach-label']}`).text()).toContain('Test span as label');

    wrapper.setProps({ renderLabel: undefined });
    expect(wrapper.find(DefaultLabel)).toHaveLength(1);
  });
  it('default label should call click on input when it clicked', () => {
    const container = document.createElement('div');
    document.body.append(container);

    act(() => {
      render(
        <Attach />,
        container
      );
    });

    const inputEl = container.querySelector('input');
    jest.spyOn(inputEl, 'click');
    expect(inputEl.click).toHaveBeenCalledTimes(0);

    act(() => {
      Simulate.click(container.querySelector('.attach-label > span'));
    });
    expect(inputEl.click).toHaveBeenCalledTimes(1);
  });
  it('should handle "startAdornment" prop', () => {
    const wrapper = mount(
      <Attach
        startAdornment={<span>Test start adornment</span>}
      />
    );
    expect(wrapper.text()).toContain('Test start adornment');
  });
  it('should handle "classes" prop', () => {
    const container = document.createElement('div');
    document.body.append(container);

    act(() => {
      render(
        <Attach
          classes={{
            permanent: 'test-permanent',
            dragActive: 'test-drag-active',
          }}
        />,
        container
      );
    });

    expect(container.querySelector('.test-permanent').className).not.toContain('test-drag-active');

    // dragover
    act(() => {
      const fakeEvent = document.createEvent('HTMLEvents');

      fakeEvent.initEvent('dragover', true, true);
      container.querySelector('.test-permanent').dispatchEvent(fakeEvent);
    });
    expect(container.querySelector('.test-permanent').className).toContain('test-drag-active');

    // dragleave
    act(() => {
      const fakeEvent = document.createEvent('HTMLEvents');

      fakeEvent.initEvent('dragleave', true, true);
      container.querySelector('.test-permanent').dispatchEvent(fakeEvent);
    });
    expect(container.querySelector('.test-permanent').className).not.toContain('test-drag-active');

    // dragenter
    act(() => {
      const fakeEvent = document.createEvent('HTMLEvents');

      fakeEvent.initEvent('dragenter', true, true);
      container.querySelector('.test-permanent').dispatchEvent(fakeEvent);
    });
    expect(container.querySelector('.test-permanent').className).toContain('test-drag-active');
  });
  it('should handle "onSelect" prop', () => {
    const fakeFiles = [1, 2, 3, 4, 9];
    const spy = jest.fn();
    const container = document.createElement('div');
    document.body.append(container);

    act(() => {
      render(
        <Attach
          onSelect={spy}
        />,
        container
      );
    });
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      const fakeEvent = document.createEvent('HTMLEvents');

      fakeEvent.initEvent('drop', true, true);
      Object.assign(fakeEvent, {
        dataTransfer: { files: fakeFiles },
      });
      container.querySelector(`.${classes['attach-container']}`).dispatchEvent(fakeEvent);
    });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(fakeFiles);
  });
  it('should handle "id", "name" and "multiple" props', () => {
    const wrapper = mount(
      <Attach id='test-id' name='test-name' multiple />
    );

    expect(wrapper.find('input').prop('id')).toBe('test-id');
    expect(wrapper.find('input').prop('name')).toBe('test-name');
    expect(wrapper.find('input').prop('multiple')).toBe(true);

    wrapper.setProps({ multiple: undefined });
    expect(wrapper.find('input').prop('multiple')).toBe(true);
    wrapper.setProps({ multiple: null });
    expect(wrapper.find('input').prop('multiple')).toBe(null);
  });
  it('should call onSelect on change event of input', () => {
    const spy = jest.fn();
    const fakeEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      target: { files: [1, 2, 3] },
    };
    const wrapper = mount(
      <Attach onSelect={spy} />
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(fakeEvent.preventDefault).toHaveBeenCalledTimes(0);
    expect(fakeEvent.stopPropagation).toHaveBeenCalledTimes(0);
    wrapper.find('input').prop('onChange')(fakeEvent);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(fakeEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(fakeEvent.stopPropagation).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toBe(fakeEvent.target.files);
  });

  it('should reset input.value on change', () => {
    const wrapper = mount(
      <Attach />
    );

    const handler = wrapper
      .find('input')
      .filterWhere(el => el.prop('type') === 'file')
      .prop('onChange');

    const fakeEvent = {
      target: { value: 'test-file.jpg' },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    handler(fakeEvent);

    expect(fakeEvent.target.value).toBe('');
  });

  it('should handle "changeMiddleware" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Attach
        onChange={spy}
        changeMiddleware={() => () => {}}
      />
    );

    const handler = wrapper
      .find('input')
      .filterWhere(el => el.prop('type') === 'file')
      .prop('onChange');

    const fakeEvent = {
      target: { value: 'test-file.jpg' },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    expect(spy).toHaveBeenCalledTimes(0);

    handler(fakeEvent);

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
