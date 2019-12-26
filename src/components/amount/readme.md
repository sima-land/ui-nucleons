Базовый компонент поля количества товаров c кнопками управления:

```jsx
import Amount from './amount';
  const initialState = {
    value: '',
  },

  onSubtract = ({ target }) => setState({ value: Number(state.value) - 1 }),

  onAdd = ({ target }) => setState({ value: Number(state.value) + 1 }),

  onClear = () => setState({ value: '' });

<div style={{ position: 'relative', width: '130px' }}>
  <Amount
    value={state.value}
    onSubtract={onSubtract}
    onAdd={onAdd}
    onClear={onClear}
    onChange={() => {}}
  />
</div>
```

Без кнопок управления:

```jsx
<Amount withControls={false} />
```
