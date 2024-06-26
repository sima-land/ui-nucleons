import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { ReactNode, MouseEvent as ReactMouseEvent } from 'react';

export const meta = {
  category: 'Компоненты/CleanGroup',
  title: 'Простой пример',
  parameters: {
    backgrounds: { default: '#ccc' },
  },
};

const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
  alert(event.currentTarget.textContent);
};

function DisplayWrapper({ children }: { children?: ReactNode }) {
  return <div style={{ background: '#fff' }}>{children}</div>;
}

export default function Primary() {
  return (
    <div style={{ margin: 'auto', maxWidth: 720 }}>
      <h3>Одна кнопка</h3>

      <DisplayWrapper>
        <CleanGroup>
          <CleanButton onClick={handleClick}>Single button</CleanButton>
        </CleanGroup>
      </DisplayWrapper>

      <h3>Две кнопки</h3>

      <DisplayWrapper>
        <CleanGroup>
          <CleanButton onClick={handleClick}>Hello</CleanButton>
          <CleanButton onClick={handleClick}>World</CleanButton>
        </CleanGroup>
      </DisplayWrapper>

      <h3>Три кнопки</h3>

      <DisplayWrapper>
        <CleanGroup>
          <CleanButton onClick={handleClick}>Foo</CleanButton>
          <CleanButton onClick={handleClick}>Bar</CleanButton>
          <CleanButton onClick={handleClick}>Baz</CleanButton>
        </CleanGroup>
      </DisplayWrapper>

      <h3>Ссылки</h3>

      <DisplayWrapper>
        <CleanGroup>
          <CleanButton href='https://ya.ru'>Yandex</CleanButton>
          <CleanButton href='https://google.com'>Google</CleanButton>
        </CleanGroup>
      </DisplayWrapper>
    </div>
  );
}
