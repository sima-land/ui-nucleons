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
        countLimit={12}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle drag events to highlight area', () => {
    (['dragEnter', 'dragOver'] as const).forEach(eventName => {
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
        countLimit={5}
      />
    );

    expect(spy).toBeCalledTimes(0);

    // drop two files
    act(() => {
      Simulate.drop(
        wrapper.find('.root').getDOMNode(),
        {
          dataTransfer: {
            files: [{ fakeFile: true }, { fakeFile: true }],
          },
        } as any
      );
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
    expect(spy.mock.calls[0][0]).toHaveLength(1);

    wrapper.setProps({ multiple: true });

    // drop two files again
    act(() => {
      Simulate.drop(
        wrapper.find('.root').getDOMNode(),
        {
          dataTransfer: {
            files: [{ fakeFile: true }, { fakeFile: true }],
          },
        } as any
      );
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(2);
    expect(spy.mock.calls[1][0]).toHaveLength(2);

    // drop two files again (without onSelect)
    wrapper.setProps({ onSelect: undefined });

    act(() => {
      Simulate.drop(
        wrapper.find('.root').getDOMNode(),
        {
          dataTransfer: {
            files: [{ fakeFile: true }, { fakeFile: true }],
          },
        } as any
      );
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(2);
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
      Simulate.change(wrapper.find('input').getDOMNode(), { target: { files: [] } as any });
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);

    // without onSelect
    wrapper.setProps({ onSelect: undefined });

    act(() => {
      Simulate.change(wrapper.find('input').getDOMNode(), { target: { files: [] } as any });
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });

  it('should render different visual variants', () => {
    [
      {
        fileRole: 'фото',
        formats: undefined,
        multiple: undefined,
      },
      {
        fileRole: 'архив',
        formats: 'PDF, JPG, PNG',
        multiple: undefined,
      },
      {
        fileRole: 'документ',
        formats: undefined,
        multiple: true,
      },
      {
        fileRole: 'скан',
        formats: 'PDF, JPG, PNG',
        multiple: true,
      },
      {
        fileRole: 'изображение',
        formats: 'PDF, JPG, PNG',
        multiple: true,
        failed: true,
      },
    ].forEach(props => {
      const wrapper = mount(
        <UploadArea {...props} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
