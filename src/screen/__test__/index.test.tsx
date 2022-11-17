import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Screen } from '..';
import { render } from '@testing-library/react';
import { LayerProvider, useLayer } from '../../helpers/layer';

describe('<Screen />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <Screen fullScrollThreshold={100}>
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
  });

  it('should renders without close button', () => {
    const wrapper = mount(
      <Screen>
        <Screen.Header
          buttons={{
            end: { text: 'cross replacer' },
          }}
        />
        <Screen.Body />
      </Screen>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('button[data-testid="screen:back"]')).toHaveLength(0);
    expect(wrapper.find('button[data-testid="screen:close"]')).toHaveLength(0);
  });

  it('should handle "loading/loadingOverlayProps" props', () => {
    const wrapper = mount(
      <Screen loading loadingOverlayProps={{ spinnerProps: { size: 'medium' } }}>
        <Screen.Body />
      </Screen>,
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

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(
      <Screen data-testid='my-screen'>
        <Screen.Header divided title='Title' subtitle='Subtitle' />
        <Screen.Body>
          <p>Body loaded content</p>
        </Screen.Body>
        <Screen.Footer>
          <p>Footer content</p>
        </Screen.Footer>
      </Screen>,
    );

    expect(queryAllByTestId('screen')).toHaveLength(0);
    expect(queryAllByTestId('my-screen')).toHaveLength(1);
  });

  it('should handle ref on body slot', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Screen data-testid='my-screen'>
        <Screen.Header divided title='Title' subtitle='Subtitle' />
        <Screen.Body ref={ref}>
          <p>Body loaded content</p>
        </Screen.Body>
        <Screen.Footer>
          <p>Footer content</p>
        </Screen.Footer>
      </Screen>,
    );

    expect(ref.current instanceof HTMLDivElement).toBe(true);
  });

  it('should throw exception when body slot is missing', () => {
    expect(() => {
      render(
        <Screen>
          <Screen.Header title='No body test' />
        </Screen>,
      );
    }).toThrow(
      Error(
        'Looks like you are trying to render <Screen /> without <Screen.Body /> slot, but it is required',
      ),
    );
  });

  it('should increment layer by 300', () => {
    function TestComponent() {
      const layer = useLayer();
      return <div data-testid='test-component' data-layer={layer} />;
    }

    const { getByTestId } = render(
      <LayerProvider value={20}>
        <Screen>
          <Screen.Body>
            <TestComponent />
          </Screen.Body>
        </Screen>
      </LayerProvider>,
    );

    expect(getByTestId('test-component').getAttribute('data-layer')).toBe('320');
  });
});
