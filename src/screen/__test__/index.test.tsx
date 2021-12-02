import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Screen } from '..';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

jest.mock('body-scroll-lock', () => {
  const original = jest.requireActual('body-scroll-lock');

  return {
    ...original,
    __esModule: true,
    disableBodyScroll: jest.fn(original.disableBodyScroll),
    enableBodyScroll: jest.fn(original.enableBodyScroll),
  };
});

describe('<Screen />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <Screen>
        <Screen.Header divided title='Title' subtitle='Subtitle' />
        <Screen.Body>
          <p>Body</p>
        </Screen.Body>
        <Screen.Footer>
          <p>Footer</p>
        </Screen.Footer>
      </Screen>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('[data-testid="screen"]')).toHaveLength(1);
  });

  it('should handle header title missing', () => {
    const wrapper = mount(
      <Screen>
        <Screen.Header onClose={jest.fn()} />
        <Screen.Body>
          <p>Body</p>
        </Screen.Body>
        <Screen.Footer>
          <p>Footer</p>
        </Screen.Footer>
      </Screen>,
    );

    expect(wrapper.find('button[data-testid="screen:close"]')).toHaveLength(1);
    expect(wrapper.find('button[aria-label="Закрыть"]')).toHaveLength(1);
  });

  it('should handle props', () => {
    const spy = jest.fn();
    const otherSpy = jest.fn();

    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
    expect(disableBodyScroll).toHaveBeenCalledTimes(0);

    const wrapper = mount(
      <Screen>
        <Screen.Header
          title='Test title'
          subtitle='Test subtitle'
          onBack={spy}
          onClose={otherSpy}
        />
        <Screen.Body>Body content</Screen.Body>
        <Screen.Footer>Test footer</Screen.Footer>
      </Screen>,
    );

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);

    expect(spy).toHaveBeenCalledTimes(0);
    act(() => {
      wrapper.find('button[data-testid="screen:back"]').simulate('click');
    });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(1);

    expect(otherSpy).toHaveBeenCalledTimes(0);
    act(() => {
      wrapper.find('button[data-testid="screen:close"]').simulate('click');
    });
    wrapper.update();
    expect(otherSpy).toHaveBeenCalledTimes(1);

    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
  });

  it('should renders without close button', () => {
    const wrapper = mount(
      <Screen>
        <Screen.Header
          buttons={{
            end: { text: 'cross replacer' },
          }}
        />
      </Screen>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('button[data-testid="screen:back"]')).toHaveLength(0);
    expect(wrapper.find('button[data-testid="screen:close"]')).toHaveLength(0);
  });

  it('should handle "loading/loadingOverlayProps" props', () => {
    const wrapper = mount(
      <Screen loading loadingOverlayProps={{ spinnerProps: { size: 'medium' } }} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "loadingArea" prop', () => {
    const wrapper = mount(
      <Screen loading loadingArea='content'>
        <Screen.Header divided title='Title' subtitle='Subtitle' />
        <Screen.Body>
          <p>Body loaded content</p>
        </Screen.Body>
        <Screen.Footer>
          <p>Footer content</p>
        </Screen.Footer>
      </Screen>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('[data-testid="screen:body"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="screen:body"]').text()).not.toContain('Body loaded content');

    expect(wrapper.find('[data-testid="screen:footer"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="screen:footer"]').text()).toContain('Footer content');
  });
});
