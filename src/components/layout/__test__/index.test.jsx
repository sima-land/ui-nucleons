import React from 'react';
import { mount } from 'enzyme';
import { DesktopLayout, MobileLayout } from '..';

describe('Layouts', () => {
  [DesktopLayout, MobileLayout].forEach(Layout => {
    it('should renders correctly', () => {
      const wrapper = mount(
        <Layout className='test-class' style={{ height: 128 }}>
          Hello, world!
        </Layout>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should handle "element" prop', () => {
      const wrapper = mount(
        <Layout element='main' className='test-class' style={{ height: 128 }}>
          Hello, world!
        </Layout>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
