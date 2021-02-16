Кнопка без свойств:
```jsx
<Button>Кнопка</Button>
```

Виды кнопок:
```jsx
import PlusSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/plus.js';

const types = ['primary', 'secondary'];
const sizes = ['small', 'medium'];
const states = [undefined, 'disabled'];
const contents = [
  {
    icon: PlusSVG,
  },
  {
    children: 'Действие',
  },
  {
    icon: PlusSVG,
    children: 'Действие',
  },
  {
    icon: PlusSVG,
    iconPosition: 'end',
    children: 'Действие',
  },
];

<div style={{ background: '#fff', padding: 16 }}>
  {types.map(actionType => (
    <React.Fragment key={actionType}>
      <h2>Action type: {actionType}</h2>

      {sizes.map(size => (
        <React.Fragment key={size}>
          <h3>Size: {size}</h3>
          {states.map(state => (
            <React.Fragment key={state}>
              <h4>State: {state || 'normal'}</h4>

              <div style={{ display: 'flex' }}>
                {contents.map((content, index) => (
                  <React.Fragment key={index}>
                    <Button
                      {...(state ? { [state]: true } : {})}
                      size={size}
                      actionType={actionType}
                      onClick={() => alert(`${actionType} ${size} button was clicked!`)}
                      {...content}
                    />
                    <div style={{ width: 8, height: 8 }} />
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </React.Fragment>
  ))}
</div>
```
