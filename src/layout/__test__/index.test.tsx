import { render } from '@testing-library/react';
import { Layout, DesktopLayout, MobileLayout } from '..';

describe('Layout', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <Layout className='test-class' style={{ height: 128 }}>
        Hello, world!
      </Layout>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle "disabledOn" prop', () => {
    const { container } = render(<Layout disabledOn={['xl', 'xs']}>Hello, world!</Layout>);

    expect(container).toMatchSnapshot();
  });
});

describe('Layouts (legacy)', () => {
  [DesktopLayout, MobileLayout].forEach(LayoutComponent => {
    it('should renders correctly', () => {
      const { container } = render(
        <LayoutComponent className='test-class' style={{ height: 128 }}>
          Hello, world!
        </LayoutComponent>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should handle "element" prop', () => {
      const { container } = render(
        <LayoutComponent element='main' className='test-class' style={{ height: 128 }}>
          Hello, world!
        </LayoutComponent>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should handle "disabledOn" prop', () => {
      const { container } = render(
        <LayoutComponent disabledOn={['xl', 'xs']}>Hello, world!</LayoutComponent>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
