Стрелка попапа.<br />
Используется с компонентом PositioningPopup
```jsx
import PopupArrow from './';
import { COLORS } from './create-arrow-styles';
<div style={{ padding: '10px 0', position: 'relative' }}>
    {COLORS.map((color, index) => (
        <PopupArrow
            key={index}
            color={color}
            direction={index % 2 === 0 ? 'bottom' : 'top'}
            position={{ top: '5px', left: `${30*index}px` }}
        />
    ))}
</div>
```

