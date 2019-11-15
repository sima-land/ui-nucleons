Базовая галерея
```jsx
import { items } from './items';

<React.Fragment>
  <h3>Horizontal gallery</h3>
  <div style={{ maxWidth: '60%', margin: '0 auto' }}>
    <Gallery
      items={items}
      itemContainer='img'
      getItemProps={item => ({
        ...item,
        onLoad: () => { window.dispatchEvent(new Event('resize')); },
      })}
    />
  </div>
</React.Fragment>
```
