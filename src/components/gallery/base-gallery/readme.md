Базовая галерея
```jsx
import { items } from '../items';

<React.Fragment>
  <h3>Horizontal gallery</h3>
  <div style={{ maxWidth: '60%', margin: '0 auto' }}>
    <BaseGallery
      items={items}
      itemContainer='img'
      controlContainer='button'
      getControlProps={type => ({ children: type === 'forward' ? 'вперед' : 'назад' })}
      needListenResize
      getItemProps={item => ({
        ...item,
        onLoad: () => { window.dispatchEvent(new Event('resize')); },
      })}
    />
  </div>
</React.Fragment>
```
