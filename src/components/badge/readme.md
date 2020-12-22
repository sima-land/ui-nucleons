Базовый компонент шильдика:

```jsx
import Badge from './index';

<div style={{ background: '#fff', padding: 16 }}>
    <Badge
        fields={[
            {
              type: 'text',
              value: 'Дефолтный шильдик',
            }
        ]}
    />
</div>
```

Шильдик с разнообразными полями: иконка, текст, таймер:

```jsx
import Badge from './index';

<div style={{ background: '#fff', padding: 16 }}>
    <Badge
        bgColor='#00cc00'
        fields={[
            {
              type: 'icon',
              value: 'https://static2.static1-sima-land.com/img/badges/dolphin.svg',
            },
            {
              type: 'text',
              value: 'Шильдик',
            },            
            {
              type: 'timer',
              value: '2025-01-01',
            }
        ]}
    />
</div>
```

Шильдики с иконками:

> Важное замечание: при использовании типа `svg` серверный рендер выведет пустой блок.
> Сама иконка загрузится только на клиенте.

```jsx
import Badge from './index';

<div style={{ background: '#fff', padding: 16 }}>
  <Badge
    isIconOnly
    bgColor='gold'
    fields={[
      {
        type: 'svg',
        value: 'https://static2.static1-sima-land.com/img/badges/dolphin.svg',
      },
    ]}
  />
  <br />
  <Badge
    isIconOnly
    fields={[
      {
        type: 'icon',
        value: 'https://static2.static1-sima-land.com/favicon/favicon-32x32.png',
      },
    ]}
  />
</div>
```

Шильдики в узком блоке с кастомными стилями:

```jsx
import Badge from './index';

const badges = [
  {
    title: null,
    link: '/offer/specialnye-ceny-na-derevyannye-igrushki/?is_label=1',
    bgColor: '#00aa00',
    textColor: '#FFFFFF',
    strokeColor: null,
    shadowColor: null,
    fields: [
      {
        type: 'timer',
        value: '2025-01-01 23:59:59+05',
        format: 'd:h:m:s',
        textColor: '#face8d',
      },
      {
        type: 'text',
        value: '2 таймера',
      },
      {
        type: 'timer',
        value: '2025-01-01 03:32:14',
        format: 'd:h:m:s',
      },
    ],
  },
  {
    title: null,
    link: '/sale/?is_label=1',
    bgColor: '#64a0eb',
    textColor: '#FFFFFF',
    strokeColor: null,
    shadowColor: null,
    fields: [
      {
        type: 'text',
        value: '-20%',
      },
    ],
  },
  {
    title: 'Товар можно покрутить и рассмотреть с разных сторон',
    link: null,
    bgColor: '#000000',
    textColor: '#FFFFFF',
    strokeColor: null,
    shadowColor: 'transparent',
    isIconOnly: true,
    fields: [
      {
        type: 'icon',
        value: 'https://static2.static1-sima-land.com/img/badges/360_round.svg',
      },
    ],
  },
  {
    title: null,
    bgColor: '#ff0000',
    textColor: '#FFFFFF',
    strokeColor: null,
    shadowColor: null,
    fields: [
      {
        type: 'text',
        value: 'Очень длинное название шильдика',
      },
    ],
  },
  {
    title: null,
    bgColor: 'gold',
    textColor: '#FFFFFF',
    strokeColor: null,
    shadowColor: null,
    fields: [
      {
        type: 'text',
        value: 'Разные',
        textColor: 'red',
      },
      {
        type: 'text',
        value: 'цвета',
        textColor: 'green',
      },
      {
        type: 'text',
        value: 'полей',
        textColor: 'blue',
      },
    ],
  },
];

<div style={{ background: '#fff', padding: 16 }}>
    <div style={{
        width: '200px',
        background: '#eee',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    }}
    >
    {badges.map((badgeProps, index) => (
      <Badge
        {...badgeProps}
        containerProps={{
          className: 'badge',
          style: {
            margin: '2px',
            maxWidth: 'calc(100% - 4px)',
          },
        }}
        key={index}
      />
    ))}
    </div>
</div>
```
