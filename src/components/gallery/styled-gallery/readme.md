Горизонтальная галерея
```jsx
import { items } from '../items';

<React.Fragment>
  <div style={{ maxWidth: '60%', margin: '0 auto' }}>
    <StyledGallery
      direction='horizontal'
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
Вертикальная галерея
```jsx
import { items } from '../items';

<React.Fragment>
  <StyledGallery
    itemsContainerProps={{
      style: { height: '300px', width: '140px' },
    }}
    direction='vertical'
    items={items}
    itemContainer='img'
    getItemProps={item => ({
      ...item,
      onLoad: () => { window.dispatchEvent(new Event('resize')); },
    })}
  />
</React.Fragment>
```
