import React, { useState } from 'react';
import { Card } from '..';
import { Clean } from '../../clean-buttons';
import { TopBar } from '../../top-bar';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import { PhoneInput } from '../../phone-input';
import { DropdownItem } from '../../dropdown-item';
import { CustomScrollbar } from '../../_internal/custom-scrollbar';
import { Button } from '../../button';

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
        <Card.Header divided>
          <TopBar
            size='s'
            title='Заказ звонка'
            buttons={{
              end: { icon: <CrossSVG /> },
            }}
          />
        </Card.Header>

        <Card.Content
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
        </Card.Content>

        <Card.Footer divided>
          <Clean.Group>
            <Clean.Button>Отправить</Clean.Button>
          </Clean.Group>
        </Card.Footer>
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
        <Card.Content>
          <CustomScrollbar inFlexBox overflow={{ x: 'h', y: 's' }} className='scrollable'>
            {[...Array(count).keys()].map(index => (
              <DropdownItem key={index}>Hello #{index + 1}</DropdownItem>
            ))}
          </CustomScrollbar>
        </Card.Content>
        <Card.Footer divided>
          <Clean.Group>
            <Clean.Button>Отправить</Clean.Button>
          </Clean.Group>
        </Card.Footer>
      </Card>
    </>
  );
}

ComboDropdown.storyName = 'Пример: сложный dropdown';
