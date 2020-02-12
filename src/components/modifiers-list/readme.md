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
