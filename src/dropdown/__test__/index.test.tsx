import { mount } from 'enzyme';
import { Dropdown } from '..';

describe('Dropdown', () => {
  it('should render without props', () => {
    const wrapper = mount(<Dropdown />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <Dropdown className='hello' role='test-role'>
        Hello, world!
      </Dropdown>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
