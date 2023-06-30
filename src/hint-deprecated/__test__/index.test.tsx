import { mount } from 'enzyme';
import { Hint } from '..';

describe('<Hint />', () => {
  for (const direction of ['top', 'right', 'bottom', 'left'] as const) {
    it('should renders correctly', () => {
      const wrapper = mount(
        <Hint className='additional-class' direction={direction}>
          Hello, world!
        </Hint>,
      );

      expect(wrapper).toMatchSnapshot();
    });
  }
});
