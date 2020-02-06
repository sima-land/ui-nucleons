Иконка-заглушка:
```jsx
<Icon />
```

Все иконки библиотеки:
```jsx
import icons from '../icons';

Object.keys(icons).map(icon =>
  <Icon
    style={{ marginRight: 10 }}
    key={icon}
    inline
    icon={icons[icon]}
    size={36}
  />
);
```

Иконки во всех доступных цветах разных размеров:
```jsx
import { clock } from '../icons';
import { COLORS } from '../constants';

<React.Fragment>
  {Array.from(COLORS.keys()).map((colorKey, index) => (
    <div key={colorKey} style={{ marginBottom: 16 }}>
      <Icon
        inline
        size={24}
        icon={clock}
        color={colorKey}
        style={{ marginRight: 8 }}
      />
      {colorKey}
    </div>
  ))}
</React.Fragment>
```
