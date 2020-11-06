Компонент точек навигации. Используется для вывода навигации под каруселями и слайдерами.

```jsx
const styles = {
  wrap: {
    height: 200,
    position: 'relative',
    margin: 32,
    boxShadow: '0 0 0 1px #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 32,
    pointerEvents: 'none',
  },
  btn: {
    border: 0,
    pointerEvents: 'all',
    padding: 0,
    width: 48,
    height: 48,
    background: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const total = 15;

const [current, setCurrent] = React.useState(0);

<div style={styles.wrap}>
  <DotNav
    current={current}
    total={total}
    onSelect={setCurrent}
  />

  <div style={styles.btnWrap}>
    <button style={styles.btn} onClick={() => setCurrent((total + (current - 1)) % total)}>◄</button>
    <button style={styles.btn} onClick={() => setCurrent((total + (current + 1)) % total)}>►</button>
  </div>
</div>
```
