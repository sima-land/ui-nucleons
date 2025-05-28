import { render } from '@testing-library/react';
import { FileIcon, KNOWN_TYPES } from '../file-icon';

describe('FileIcon', () => {
  for (const type of KNOWN_TYPES) {
    it('should render known file type icons', () => {
      const { container } = render(<FileIcon type={type} />);

      expect(container).toMatchSnapshot();
    });
  }

  it('should render unknown file type icon', () => {
    const { container } = render(<FileIcon />);

    expect(container).toMatchSnapshot();
  });

  it('should render broken icon', () => {
    const { container } = render(<FileIcon type={null} />);

    expect(container).toMatchSnapshot();
  });
});
