import { Card, CardContent } from '@sima-land/ui-nucleons/card';
import { CSSProperties, useState } from 'react';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { Button } from '@sima-land/ui-nucleons/button';
import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { CustomScrollbar } from '@sima-land/ui-nucleons/_internal/custom-scrollbar';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Cross';

export default {
  title: 'deprecated/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <h3>Пример верстки по макетам</h3>

      <Card rounds='m' shadow='z4' style={{ width: 352, height: 436 }}>
        <TopBar
          divided
          size='s'
          title='Заказ звонка'
          buttons={{
            end: { icon: <CrossSVG /> },
          }}
        />

        <CardContent
          style={{
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          Марина Михайловская позвонит
          <br />
          на этот номер
          <PhoneInput style={{ marginTop: 24 }} />
        </CardContent>

        <BottomBar divided>
          <CleanGroup>
            <CleanButton>Отправить</CleanButton>
          </CleanGroup>
        </BottomBar>
      </Card>
    </>
  );
}

Primary.storyName = 'Пример: верстка по макетам';

export function ComboDropdown() {
  const [count, setCount] = useState(3);

  const styles = {
    controls: {
      display: 'flex',
      gap: '12px',
      marginBottom: '20px',
    },

    root: {
      width: '352px',
      maxHeight: '320px',
      minHeight: '112px',
    } satisfies CSSProperties,

    body: {
      maxHeight: 'calc(320px - 64px - 16px)',
      margin: '8px 0',
    } satisfies CSSProperties,
  };

  return (
    <>
      <div style={styles.controls}>
        <Button size='xs' onClick={() => setCount(n => n + 1)}>
          Добавить
        </Button>
        <Button size='xs' onClick={() => setCount(n => Math.max(n - 1, 0))}>
          Убавить
        </Button>
      </div>

      <Card rounds='m' shadow='z4' style={styles.root}>
        <CardContent>
          <CustomScrollbar overflow={{ x: 'hidden', y: 'scroll' }} style={styles.body}>
            {[...Array(count).keys()].map(index => (
              <DropdownItem key={index}>Элемент {index + 1}</DropdownItem>
            ))}
          </CustomScrollbar>
        </CardContent>
        <BottomBar divided size='s'>
          <CleanGroup>
            <CleanButton>Отправить</CleanButton>
          </CleanGroup>
        </BottomBar>
      </Card>
    </>
  );
}

ComboDropdown.storyName = 'Пример: сложный dropdown';
