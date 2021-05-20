import React from 'react';
import { mount } from 'enzyme';
import { CardContent, CardFooter, CardHeader } from '../slots';
import { CardContext } from '../utils';
import { TopBar } from '../../top-bar';

describe('CardHeader', () => {
  it('should render just children inside', () => {
    const wrapper = mount(
      <CardContext.Provider value={{}}>
        <CardHeader>
          Just children
        </CardHeader>
      </CardContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe('Just children');
  });

  it('should handle TopBar as children', () => {
    const wrapper = mount(
      <CardContext.Provider value={{ rounds: 'm' }}>
        <CardHeader divided>
          <TopBar />
        </CardHeader>
      </CardContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle small rounds', () => {
    const wrapper = mount(
      <CardContext.Provider value={{ rounds: 's' }}>
        <CardHeader divided>
          <TopBar />
        </CardHeader>
      </CardContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('CardContent', () => {
  it('should handle props', () => {
    const wrapper = mount(
      <CardContent className='test-class' style={{ width: 1080 }}>
        Just content
      </CardContent>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').hasClass('test-class')).toBe(true);
    expect(wrapper.find('div').prop('style')?.width).toBe(1080);
  });
});

describe('CardFooter', () => {
  it('should handle props', () => {
    const wrapper = mount(
      <CardFooter divided className='test-footer' style={{ width: 1920 }}>
        Just content
      </CardFooter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').hasClass('test-footer')).toBe(true);
    expect(wrapper.find('div').prop('style')?.width).toBe(1920);
  });
});
