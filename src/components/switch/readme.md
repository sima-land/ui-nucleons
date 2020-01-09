Стандартный вид переключателя:
```jsx
<div style={{ background: '#fff', padding: 20, fontSize: 24 }}>
  This is just a <Switch /> without props.
</div>
```

Кастомные стили:
```jsx
import classes from './__stories__/custom-styling.scss';

<div style={{ background: '#fff', padding: 20, fontSize: 24 }}>
  This is
  {' '}
  <Switch
    classes={{
      root: classes['root-custom'],
      track: classes['track-custom'],
      trackChecked: classes['track-checked-custom'],
      circle: classes['circle-custom'],
      circleChecked: classes['circle-checked-custom'],
    }}
  />
  {' '}
  with custom styling.
</div>
```
