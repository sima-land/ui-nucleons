Виджет модификаторов с основными свойствами:

```jsx
import items from '../__stories__/items.js';
      <ModifiersWidget
        title='Варианты'
        items={items.imgItems}
      />
```

Виджет модификаторов с отметками о количестве в корзине и уценке:

```jsx
import items from '../__stories__/items.js';
      <ModifiersWidget
        title='Варианты'
        items={items.imgItemsWithMark}
      />
```

Виджет модификаторов с ссылкой на таблицу размеров:

```jsx
import items from '../__stories__/items.js';

      <ModifiersWidget
        title='Размер / рост'
        items={items.textItems}
        sizesTableUrl='/'
      />
```

Виджет модификаторов с модификаторами цвета:

```jsx
import items from '../__stories__/items.js';
      <ModifiersWidget
        title='Варианты'
        items={items.colorItems}
      />
```

Виджет модификаторов в ограниченном блоке:

```jsx
import items from '../__stories__/items.js';
      <div style={{ width: 200, border: '1px dashed #ccc' }}>
        <ModifiersWidget
          title='Варианты'
          items={items.imgItems.concat(items.imgItemsWithMark)}
        />
      </div>
```
