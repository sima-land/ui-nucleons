import React, { useState } from 'react';
import { mount } from 'enzyme';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Layer from '../index';

/* eslint-disable react/prop-types */

describe('<Layer />', () => {
  const TestComponent = ({
    defaultWithLayer = false,
    layerContent,
    layerProps,
  }) => {
    const [withLayer, toggleLayer] = useState(defaultWithLayer);

    return (
      <div className='test-app'>
        <button onClick={() => toggleLayer(!withLayer)}>Toggle layer</button>
        {withLayer && (
          <Layer {...layerProps}>
            {layerContent}
          </Layer>
        )}
      </div>
    );
  };

  it('should render children into created element', () => {
    const wrapper = mount(
      <TestComponent
        layerContent={(
          <h2 className='test-title'>New layer</h2>
        )}
      />
    );

    // mount layer
    act(() => {
      wrapper.find('button').simulate('click');
    });
    wrapper.update();

    const newLastElement = wrapper.find(Layer).instance().element;
    expect(document.body.contains(newLastElement)).toBe(true);
    expect(document.body.lastElementChild).toBe(newLastElement);
    expect(document.body.lastElementChild.querySelectorAll('h2.test-title')).toHaveLength(1);

    // unmount layer
    act(() => {
      wrapper.find('button').simulate('click');
    });
    wrapper.update();

    expect(document.body.contains(newLastElement)).toBe(false);
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
          layerContent={(
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
