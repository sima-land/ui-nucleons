import { shallow } from 'enzyme';
import { SuperEllipseClipPath } from '..';

describe('SuperEllipseClipPath', () => {
  it('should match snapshot', () => {
    const component = shallow(<SuperEllipseClipPath id='test' />);
    expect(component.find('clipPath').prop('id')).toEqual('test');
    expect(component).toMatchSnapshot();
  });
});
