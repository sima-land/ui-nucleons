Базовые хлебные крошки.
```jsx
import items from './items';

<Breadcrumbs items={items} />
```

Хлебные крошки с функциями получения имени, ссылки и списка соседних категорий
из переданного списка `items`,
а так же функцией, определяющей, является ли крошка активной:
```jsx
import items from './items';

<Breadcrumbs
    items={items}
    getItemName={items => items.name}
    getItemURL={items => items.url}
    getItemSiblings={items => items.items}
    isActiveItem={({ name }) => name.includes('First')}
/>
```
