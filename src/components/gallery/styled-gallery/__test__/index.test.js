import React from 'react';
import { mount, shallow } from 'enzyme/build';
import StyledGallery, { getControlProps } from '../index';
import BaseGallery from '../../base-gallery/';
import Button from '../../../button';
import RightSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/right';

describe('<StyledGallery />', () => {
  const items = ['test 1', 'test 2', 'test 3', 'test 4', 'test 5'];
  let gallery;

  it('should render without props', () => {
    gallery = mount(<StyledGallery />);
    expect(gallery.find(BaseGallery)).toHaveLength(1);
    expect(gallery.find(Button)).toHaveLength(0);
    expect(gallery).toMatchSnapshot();
  });
  it('should render with custom props', () => {
    gallery = mount(
      <StyledGallery
        items={items}
        direction='vertical'
        slideStepSize={78}
        slideBy={2}
        galleryContainerProps={{
          className: 'test-gallery',
        }}
        needShowControls='always'
      />
    );
    const galleryContainer = gallery.find('.vertical-gallery-container');
    expect(galleryContainer).toHaveLength(1);
    expect(galleryContainer.hasClass('test-gallery')).toBeTruthy();
    expect(gallery.find(BaseGallery)).toHaveLength(1);
    expect(gallery.find('button')).toHaveLength(2);
    expect(gallery).toMatchSnapshot();
  });
  it('should render without errors if wrong props value', () => {
    expect(() => shallow(
      <StyledGallery
        items={items}
        galleryContainerProps={null}
        itemsWrapperProps={null}
      />
    )).not.toThrow();
  });
});

describe('getControlProps', () => {
  let controlProps;
  it('default', () => {
    controlProps = getControlProps();
    expect(mount(<Button {...controlProps} />)).toMatchSnapshot();
  });
  it('with params', () => {
    controlProps = getControlProps('backward', true, { backward: [RightSVG, 'test-right-class'] });
    expect(controlProps.children).toEqual(<RightSVG />);
    expect(mount(<Button {...controlProps} />)).toMatchSnapshot();
  });
});
