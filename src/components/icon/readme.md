Иконка-заглушка:
```jsx
    <Icon/>
```

Все иконки библиотеки:
```jsx
import icons from '../icons';
Object.keys(icons).map(icon => 
    <Icon style={{ marginRight: '10px' }} key={icon} inline icon={icons[icon]} size={36} />
)

``` 

Иконки во всех доступных цветах разных размеров:
```jsx 
import { clock } from '../icons';
import { ICON_COLORS } from './';
ICON_COLORS.map((color, index) =>
    <Icon
        key={color}
        inline
        style={{ marginRight: '10px' }}
        color={color}
        size={50-5*index}
        icon={clock}
    />
)
``` 
