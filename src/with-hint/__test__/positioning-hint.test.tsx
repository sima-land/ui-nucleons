import { mount } from 'enzyme';
import { PositioningHint } from '../positioning-hint';

describe('<WithHint />', () => {
  it('should renders correctly', () => {
    const openerRef: React.MutableRefObject<HTMLDivElement> = {
      current: document.createElement('div'),
    };

    const wrapper = mount(
      <PositioningHint openerRef={openerRef} direction='top'>
        Hello, world!
      </PositioningHint>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should not place itself when "openerRef" is empty', () => {
    const openerRef: React.MutableRefObject<HTMLDivElement | null> = {
      current: null,
    };

    const wrapper = mount(
      <PositioningHint openerRef={openerRef} direction='top'>
        Hello, world!
      </PositioningHint>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
