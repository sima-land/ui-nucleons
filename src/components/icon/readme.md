Иконка-заглушка:
```jsx
    <Icon/>
```

Все иконки библиотеки:
```jsx
import icons from '../icons';
Object.keys(icons).map(icon => 
    <Icon style={{ marginRight: '10px' }} key={icon} inline icon={icons[icon]}/>
)

``` 

Иконки во всех доступных цветах разных размеров:
```jsx 
import { clock } from '../icons';
import { ICON_COLORS } from './';
ICON_COLORS.map((color, idx) =>
    <Icon
        key={color}
        inline
        style={{ marginRight: '10px' }}
        color={color}
        size={50-5*idx}
        icon={clock}
    />
)
``` 