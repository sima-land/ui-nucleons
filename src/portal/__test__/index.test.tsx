import { ReactNode, useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Portal, PortalProps } from '..';

describe('Layer', () => {
  const TestComponent = ({
    defaultWithPortal = false,
    children,
    portalProps,
  }: {
    defaultWithPortal?: boolean;
    children?: ReactNode;
    portalProps?: PortalProps;
  }) => {
    const [withPortal, togglePortal] = useState(defaultWithPortal);

    return (
      <div className='test-app'>
        <button onClick={() => togglePortal(!withPortal)}>Toggle layer</button>
        {withPortal && <Portal {...portalProps}>{children}</Portal>}
      </div>
    );
  };

  it('should render children into created element', async () => {
    const { baseElement } = render(
      <TestComponent children={<h2 className='test-title'>New layer</h2>} />,
    );

    // mount layer
    fireEvent.click(baseElement.querySelector('button') as HTMLElement);
    expect(baseElement.querySelectorAll('div > h2.test-title')).toHaveLength(1);

    // unmount layer
    fireEvent.click(baseElement.querySelector('button') as HTMLElement);
    expect(baseElement.querySelectorAll('div > h2.test-title')).toHaveLength(0);
  });

  it('should handle "defineRoot" prop', () => {
    const otherContainer = document.createElement('div');

    expect(otherContainer.children).toHaveLength(0);

    const { container } = render(
      <TestComponent
        defaultWithPortal
        children={<h2 className='test-title'>New layer</h2>}
        portalProps={{
          defineRoot: () => otherContainer,
        }}
      />,
    );

    expect(otherContainer.children).toHaveLength(1);

    container.remove();
    otherContainer.remove();
  });
});
