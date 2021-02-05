import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { UploadArea } from '../area';

describe('UploadArea', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <UploadArea />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <UploadArea
        formats='PDF, JPG, PNG'
        fileRole='скан'
        sizeLimit='4 Mb'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle drag events to highlight area', () => {
    ['dragEnter', 'dragOver'].forEach(eventName => {
      const spy = jest.fn();

      const wrapper = mount(
        <UploadArea
          formats='PDF, JPG, PNG'
          fileRole='скан'
          sizeLimit='4 Mb'
          onSelect={spy}
        />
      );

      expect(wrapper).toMatchSnapshot();

      act(() => {
        Simulate[eventName](wrapper.find('.root').getDOMNode());
      });
      wrapper.update();

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should handle "dragleave" event', () => {
    const wrapper = mount(
      <UploadArea
        formats='PDF, JPG, PNG'
        fileRole='скан'
        sizeLimit='4 Mb'
      />
    );

    // highlight
    act(() => {
      Simulate.dragEnter(wrapper.find('.root').getDOMNode());
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();

    // remove highlight
    act(() => {
      Simulate.dragLeave(wrapper.find('.root').getDOMNode());
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "drop" event', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <UploadArea
        formats='PDF, JPG, PNG'
        fileRole='скан'
        sizeLimit='4 Mb'
        onSelect={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.drop(wrapper.find('.root').getDOMNode(), { dataTransfer: { files: [] } });
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });

  it('should handle "change" event', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <UploadArea
        formats='PDF, JPG, PNG'
        fileRole='скан'
        sizeLimit='4 Mb'
        onSelect={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.change(wrapper.find('input').getDOMNode(), { target: { files: [] } });
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });
});
