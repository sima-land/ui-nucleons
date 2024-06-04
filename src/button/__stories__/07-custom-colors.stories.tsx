import { Button, ButtonStyle } from '@sima-land/ui-nucleons/button';
import { CSSProperties } from 'react';

export default {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  container: {
    maxWidth: '480px',
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    justifyContent: 'stretch',
  } satisfies CSSProperties,

  sber: {
    '--button-color': '#fff',
    '--button-background': '#107f8c',
  } satisfies ButtonStyle,

  tinkoff: {
    '--button-color': '#000',
    '--button-background': '#ffdd2d',
  } satisfies ButtonStyle,

  apple: {
    '--button-color': '#fff',
    '--button-background': '#161616',
    '--button-hover-background': '#404040',
  } satisfies ButtonStyle,
};

export function CustomColors() {
  return (
    <div style={styles.container}>
      <Button viewType='unset' style={styles.sber}>
        Войти по СберБизнес ID
      </Button>

      <Button viewType='unset' style={styles.tinkoff}>
        Войти с Tinkoff
      </Button>

      <Button viewType='unset' style={styles.apple}>
        Войти с Apple ID
      </Button>
    </div>
  );
}

CustomColors.storyName = 'Пользовательские цвета';
