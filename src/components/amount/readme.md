Базовый компонент поля количества c кнопками управления:

```jsx
import Amount from './amount';

const [value, setValue] = React.useState('');

<div style={{ background: '#fff', padding: 16 }}>
  <h3>From 0 to 5</h3>
  <Amount
    value={value}
    onChange={({ target }) => {
      setValue(target.value.replace(/\D/g, '').slice(0, 5));
    }}
    onAdd={() => {
      setValue(String(Math.min(5, Number(value) + 1)));
    }}
    onSubtract={() => {
      setValue(String(Math.max(0, Number(value) - 1)));
    }}
    onBlur={() => {
      value && setValue(String(
        Math.min(5, Math.max(0, Number(value)))
      ));
    }}
  />
</div>
```
