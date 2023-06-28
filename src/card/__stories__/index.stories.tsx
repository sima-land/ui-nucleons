import { useState } from 'react';
import { Card, CardContent } from '..';
import { TopBar } from '../../top-bar';
import { BottomBar } from '../../bottom-bar';
import { CleanGroup, CleanButton } from '../../clean-buttons';
import { Button } from '../../button';
import { PhoneInput } from '../../phone-input-deprecated';
import { DropdownItem } from '../../dropdown-item';
import { CustomScrollbar } from '../../_internal/custom-scrollbar';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Cross';

export default {
  title: 'common/Card',
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
          <PhoneInput style={{ marginTop: 24, '--phone-input-width': 304 }} />
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

  return (
    <>
      {/* указываем так потому что через JSX почему-то OS неправильно воспринимает */}
      <style>{`
        .scrollable { max-height: calc(304px - 64px); padding: 8px 0; }
      `}</style>

      <div style={{ marginBottom: 20, display: 'flex', gap: 10 }}>
        <Button size='s' onClick={() => setCount(n => n + 1)}>
          Добавить
        </Button>
        <Button size='s' onClick={() => setCount(n => Math.max(n - 1, 0))}>
          Убрать
        </Button>
      </div>

      <Card rounds='m' shadow='z4' style={{ width: 352, maxHeight: 304, minHeight: 112 }}>
        <CardContent>
          <CustomScrollbar inFlexBox overflow={{ x: 'h', y: 's' }} className='scrollable'>
            {[...Array(count).keys()].map(index => (
              <DropdownItem key={index}>Hello #{index + 1}</DropdownItem>
            ))}
          </CustomScrollbar>
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

ComboDropdown.storyName = 'Пример: сложный dropdown';
