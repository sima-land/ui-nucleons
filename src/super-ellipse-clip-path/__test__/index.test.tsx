import { render } from '@testing-library/react';
import { SuperEllipseClipPath } from '..';

describe('SuperEllipseClipPath', () => {
  it('should match snapshot', () => {
    const { container } = render(<SuperEllipseClipPath id='test' />);

    expect(container.querySelector('clipPath')?.id).toEqual('test');
    expect(container).toMatchSnapshot();
  });
});
