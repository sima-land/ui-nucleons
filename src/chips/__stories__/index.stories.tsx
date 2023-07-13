import { Chips } from '@sima-land/ui-nucleons/chips';
import { useReducer } from 'react';

const ITEMS = [
  'Ручка для пакета',
  'Спортивные кружки',
  'Пакеты пищевые',
  'Пакеты для заморозки',
  'Домашние животные',
  'Дикие звери',
  'Крафт пакеты',
  'Интерьер',
  'Зоотовары',
] as const;

export default {
  title: 'common/Chips',
  component: Chips,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const reducer = (ids: Record<number, boolean>, id: number) => ({ ...ids, [id]: !ids[id] });
  const [checked, toggle] = useReducer(reducer, { 2: true });

  return (
    <Chips>
      {ITEMS.map((children, id) => (
        <Chips.Item key={id} checked={checked[id]} onClick={() => toggle(id)}>
          {children}
        </Chips.Item>
      ))}
    </Chips>
  );
}

Primary.storyName = 'Простой пример';

export function Links() {
  return (
    <Chips>
      {ITEMS.map((children, index) => (
        <Chips.Item key={index} href='https://www.sima-land.ru' checked={index % 2 === 0}>
          {children}
        </Chips.Item>
      ))}
    </Chips>
  );
}

Links.storyName = 'Чипсы-ссылки';

export function WithCross() {
  const reducer = (ids: Record<number, boolean>, id: number) => ({ ...ids, [id]: !ids[id] });
  const [checked, toggle] = useReducer(reducer, { 2: true });

  return (
    <>
      <Chips>
        {ITEMS.map((children, id) => (
          <Chips.Item key={id} withCross checked={checked[id]} onClick={() => toggle(id)}>
            {children}
          </Chips.Item>
        ))}
      </Chips>
    </>
  );
}

WithCross.storyName = 'С крестиком';

export function TruncatedText() {
  const longText =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, quos unde asperiores dolorum.';

  return (
    <div style={{ width: '240px' }}>
      <h3>Базовый вид:</h3>
      <Chips>
        <Chips.Item>{longText}</Chips.Item>
      </Chips>

      <h3>С крестиком:</h3>
      <Chips>
        <Chips.Item withCross>{longText}</Chips.Item>
      </Chips>

      <h3>Активный:</h3>
      <Chips>
        <Chips.Item checked>{longText}</Chips.Item>
      </Chips>

      <h3>Активный с крестиком:</h3>
      <Chips>
        <Chips.Item checked withCross>
          {longText}
        </Chips.Item>
      </Chips>
    </div>
  );
}

TruncatedText.storyName = 'Обрезка текста';
