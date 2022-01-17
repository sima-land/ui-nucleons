import React from 'react';
import { Button, computeClassName } from '../index';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import SearchSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/search.js';
import PlusSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/plus.js';

describe('<Button />', () => {
  it('should renders without props', () => {
    const wrapper = shallow(<Button>Кнопка</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render secondary button', () => {
    const wrapper = shallow(<Button viewType='secondary'>Отмена</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render icon button', () => {
    const wrapper = shallow(<Button icon={PlusSVG} />);

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ iconPosition: 'end' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "size" prop', () => {
    const wrapper = shallow(<Button size='s'>Отмена</Button>);

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ size: 'medium' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "icon" and "iconPosition" props', () => {
    const wrapper = shallow(<Button icon={SearchSVG}>Икать</Button>);

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ iconPosition: 'end' });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ iconPosition: 'start' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(
      <Button data-testid='my-specific-button'>My Button</Button>,
    );

    expect(queryAllByTestId('button')).toHaveLength(0);
    expect(queryAllByTestId('my-specific-button')).toHaveLength(1);
  });
});

describe('computeClassName()', () => {
  it('should handle all props', () => {
    expect(
      computeClassName({
        size: 's',
        viewType: 'secondary',
        iconPosition: 'end',
        withIcon: true,
        withContent: true,
        className: 'custom-button',
      }),
    ).toBe('custom-button button-base button-secondary button-s button-s-with-end-icon');
  });
});
