import { CleanGroup, CleanButton, CleanButtonSize } from '@sima-land/ui-nucleons/clean-buttons';
import { Fragment, ReactNode, MouseEvent as ReactMouseEvent } from 'react';

export const meta = {
  category: 'Компоненты/CleanGroup',
  title: 'Размеры',
  parameters: {
    layout: 'padded',
    backgrounds: { default: '#ccc' },
  },
};

const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
  alert(event.currentTarget.textContent);
};

function DisplayWrapper({ children }: { children?: ReactNode }) {
  return <div style={{ background: '#fff' }}>{children}</div>;
}
export default function Sizes() {
  const sizes: CleanButtonSize[] = ['s', 'm', 'l'];

  return (
    <div style={{ margin: 'auto', maxWidth: 720 }}>
      {sizes.map(size => (
        <Fragment key={size}>
          <h3>{size.toUpperCase()}</h3>
          <DisplayWrapper>
            <CleanGroup size={size}>
              <CleanButton onClick={handleClick}>Foo</CleanButton>
              <CleanButton onClick={handleClick}>Bar</CleanButton>
              <CleanButton onClick={handleClick}>Baz</CleanButton>
            </CleanGroup>
          </DisplayWrapper>
        </Fragment>
      ))}
    </div>
  );
}
