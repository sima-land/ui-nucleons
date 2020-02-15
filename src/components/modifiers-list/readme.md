Список модификаторов с фото:
```jsx 
import items from './__stories__/items.js';

<div style={{ background: '#fff', width: '300px', margin: '0 auto' }}>
    <ModifiersList
      items={items.withPhoto}
      currencyGrapheme='$'
    />
</div>
```

Список модификаторов с цветами:
```jsx 
import items from './__stories__/items.js';

<div style={{ background: '#fff', width: '400px', margin: '0 auto' }}>
    <ModifiersList
      items={items.withColor}
      currencyGrapheme='₽'
    />
</div>
```

Список текстовых модификаторов:
```jsx 
import items from './__stories__/items.js';

<div style={{ background: '#fff', width: '300px', margin: '0 auto' }}>
    <ModifiersList
      items={items.withText}
      currencyGrapheme='€'
    />
</div>
```

Список модификаторов c таблицей размеров:
```jsx 
import items from './__stories__/items.js';

<div style={{ background: '#fff', width: '300px', margin: '0 auto' }}>
    <ModifiersList
      items={items.withText}
      currencyGrapheme='€'
      sizesTableUrl='/'
    />
</div>
```

Список пользовательскими пропами:
```jsx 
import items from './__stories__/items.js';
import classes from './__stories__/modifiers-list.scss';

<React.Fragment>
  <div className={classes.list}>
    <div className={classes.title}>Обертка</div>
    <ModifiersList
      items={[...items.withPhoto, ...items.withColor]}
      currencyGrapheme='₽'
      sizesTableUrl='/'
      wrapperProps={{ className: classes.scrollable }}
    />
  </div>
  <div className={classes.list}>
    <div className={classes.title}>Контейнер</div>
    <ModifiersList
      items={[...items.withPhoto, ...items.withColor]}
      currencyGrapheme='₽'
      sizesTableUrl='/'
      itemsContainerProps={{ className: classes.scrollable }}
    />
  </div>
</React.Fragment>
```
