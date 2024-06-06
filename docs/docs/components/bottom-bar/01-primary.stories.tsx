import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';

export const meta = {
  title: 'Простой пример',
  category: 'Компоненты/BottomBar',
  parameters: {
    backgrounds: { default: '#ccc' },
  },
};

export default function () {
  return (
    <>
      <BottomBar style={{ maxWidth: '480px' }}>
        <CleanGroup>
          <CleanButton>Отмена</CleanButton>
          <CleanButton>Применить</CleanButton>
        </CleanGroup>
      </BottomBar>
    </>
  );
}
