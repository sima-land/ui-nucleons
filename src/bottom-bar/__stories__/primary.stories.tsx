import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'common/BottomBar',
  component: BottomBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function Primary() {
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

Primary.storyName = 'Простой пример';
