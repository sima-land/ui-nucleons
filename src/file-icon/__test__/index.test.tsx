import { render } from '@testing-library/react';
import { FileIcon, KNOWN_TYPES } from '..';

describe('FileIcon', () => {
  for (const type of KNOWN_TYPES) {
    it('should render known file type icons', () => {
      const { container } = render(<FileIcon type={type} />);

      expect(container).toMatchSnapshot();
    });
  }

  it('should render unknown file type icon', () => {
    const { container } = render(<FileIcon type='cpp' />);

    expect(container).toMatchSnapshot();
  });
});
