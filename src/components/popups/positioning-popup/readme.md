Позиционирующийся попап с отступом по-умолчанию
```jsx
import PositioningPopupDemo from '../__stories__/positioning-popup-demo';
<div style={{ paddingBottom: '80px' }}>
    <PositioningPopupDemo>
        <p style={{
            padding: '20px',
            margin: 0,
            width: '200px',
        }}
        >
            I am positioning popup. I am very smart.
            <br />I see the opener element and body limits
        </p>
    </PositioningPopupDemo>
</div>
```
Позиционирующийся попап с нулевым отступом от края контенера
```jsx
import PositioningPopupDemo from '../__stories__/positioning-popup-demo';
<div style={{ paddingBottom: '80px' }}>
    <PositioningPopupDemo 
        positioningMargin={0}
    >
        <p style={{
            padding: '20px',
            margin: 0,
            width: '200px',
        }}
        >
            I am positioning popup. I am very smart.
            <br />I see the opener element and body limits
        </p>
    </PositioningPopupDemo>
</div>
```

