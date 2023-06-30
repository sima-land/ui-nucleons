import { mount } from 'enzyme';
import { NoIndex } from '..';

describe('NoIndex', () => {
  it('should renders correctly', () => {
    const elem = mount(
      <NoIndex>
        test<p>test2</p>
      </NoIndex>,
    );
    expect(elem.find('p').text()).toBe('test2');
    expect(elem).toMatchSnapshot();
  });
});
