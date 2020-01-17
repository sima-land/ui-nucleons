Базовый компонент избранное c текстом:

```jsx
import Wish from './';
  const initialState = {
    isChecked: false,
  },

  onClick = ({ target }) => setState({ isChecked: state.isChecked !== true });

<div style={{ position: 'relative', width: '200px' }}>
  <Wish
    isChecked={state.isChecked}
    size={32}
    isDisplayText
    onClick={onClick}
  />
</div>
```

Без текста:

```jsx
  const initialState = {
    isChecked: false,
  },

  onClick = ({ target }) => setState({ isChecked: state.isChecked !== true });

<div style={{ position: 'relative', width: '200px' }}>
  <Wish
    isChecked={state.isChecked}
    size={32}
    onClick={onClick}
  />
</div>
```
