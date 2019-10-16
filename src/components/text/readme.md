Варианты размеров
```jsx
import { SIZES } from '../text/';

Array.from(SIZES).map(size => (
  <div key={size}>
    <Text size={size}>
      Text with size {size} px
    </Text>
  </div>
));
```

Варианты цветов
```jsx
import { COLORS } from '../text/';

Array.from(COLORS).map(color => (
  <div key={color}>
    <Text size={16} color={color}>
      Text with color {color}
    </Text>
  </div>
));
```
