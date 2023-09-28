import { render } from '@testing-library/react';
import { FileIcon } from '..';

describe('FileIcon', () => {
  const types = ['doc', 'xls', 'pdf', 'jpg', 'xml'];

  for (const type of types) {
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
