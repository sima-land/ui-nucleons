import React, { useState } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Layer from '../index';

describe('<Layer />', () => {
  /**
   * Тестовый компонент.
   * @param {Object} props Свойства.
   * @return {ReactElement} Компонент.
   */
  const TestComponent = ({ layerContent }) => { // eslint-disable-line react/prop-types
    const [withLayer, toggleLayer] = useState(false);

    return (
      <div className='test-app'>
        <button onClick={() => toggleLayer(!withLayer)}>Toggle layer</button>
        {withLayer && (
          <Layer>
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
});
