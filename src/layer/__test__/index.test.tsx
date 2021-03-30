import React, { useState } from 'react';
import { mount } from 'enzyme';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Layer, Props } from '..';

describe('<Layer />', () => {
  const TestComponent = ({
    defaultWithLayer = false,
    children,
    layerProps,
  }: { defaultWithLayer?: boolean, children?: React.ReactNode, layerProps?: Props }) => {
    const [withLayer, toggleLayer] = useState(defaultWithLayer);

    return (
      <div className='test-app'>
        <button onClick={() => toggleLayer(!withLayer)}>Toggle layer</button>
        {withLayer && (
          <Layer {...layerProps}>
            {children}
          </Layer>
        )}
      </div>
    );
  };

  it('should render children into created element', () => {
    const wrapper = mount(
      <TestComponent
        children={(
          <h2 className='test-title'>New layer</h2>
        )}
      />
    );

    // mount layer
    act(() => {
      wrapper.find('button').simulate('click');
    });
    wrapper.update();

    const element = document.body.lastElementChild as HTMLDivElement;

    expect(element.querySelectorAll('h2.test-title')).toHaveLength(1);

    // unmount layer
    act(() => {
      wrapper.find('button').simulate('click');
    });
    wrapper.update();

    expect(document.body.contains(element)).toBe(false);
  });

  it('should handle "defineRoot" prop', () => {
    const container = document.createElement('div');
    const otherContainer = document.createElement('div');

    document.body.append(container, otherContainer);

    expect(otherContainer.children).toHaveLength(0);

    act(() => {
      render(
        <TestComponent
          defaultWithLayer
          children={(
            <h2 className='test-title'>New layer</h2>
          )}
          layerProps={{
            defineRoot: () => otherContainer,
          }}
        />,
        container
      );
    });

    expect(otherContainer.children).toHaveLength(1);

    container.remove();
    otherContainer.remove();
  });
});
