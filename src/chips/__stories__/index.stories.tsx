import { Chips, ChipsItem } from '@sima-land/ui-nucleons/chips';
import { useReducer } from 'react';

export default {
  title: 'common/Chips',
  component: Chips,
  parameters: {
    layout: 'padded',
  },
};

const items = [
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

export function Primary() {
  return (
    <>
      <Chips>
        {items.map((item, index) => (
          <ChipsItem key={index} checked={index % 2 === 0}>
            {item}
          </ChipsItem>
        ))}
      </Chips>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function Links() {
  return (
    <>
      <Chips>
        {items.map((item, index) => (
          <ChipsItem key={index} href='https://www.sima-land.ru' checked={index % 2 === 0}>
            {item}
          </ChipsItem>
        ))}
      </Chips>
    </>
  );
}

Links.storyName = 'Чипсы-ссылки';

export function WithCross() {
  const reducer = (ids: Record<number, boolean>, id: number) => ({ ...ids, [id]: !ids[id] });
  const [checked, toggle] = useReducer(reducer, { 2: true });

  return (
    <>
      <Chips>
        {items.map((item, id) => (
          <ChipsItem key={id} withCross checked={checked[id]} onClick={() => toggle(id)}>
            {item}
          </ChipsItem>
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
        <ChipsItem>{longText}</ChipsItem>
      </Chips>

      <h3>С крестиком:</h3>
      <Chips>
        <ChipsItem withCross>{longText}</ChipsItem>
      </Chips>

      <h3>Активный:</h3>
      <Chips>
        <ChipsItem checked>{longText}</ChipsItem>
      </Chips>

      <h3>Активный с крестиком:</h3>
      <Chips>
        <ChipsItem checked withCross>
          {longText}
        </ChipsItem>
      </Chips>
    </div>
  );
}

TruncatedText.storyName = 'Обрезка текста';
