import React from 'react';
import { mount } from 'enzyme';
import { FileIcon } from '..';

describe('<FileIcon />', () => {
  it('should render known file type icons', () => {
    ['doc', 'xls', 'pdf', 'jpg', 'xml'].forEach(type => {
      const wrapper = mount(
        <FileIcon type={type as any} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render unknown file type icon', () => {
    const wrapper = mount(
      <FileIcon type={'cpp' as any} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
