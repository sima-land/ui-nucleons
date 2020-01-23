Базовые хлебные крошки.
```jsx
import items from './items';

<Breadcrumbs items={items.slice(0, 4)} />
```

Хлебные крошки с функциями получения имени, ссылки и списка соседних категорий
из переданного списка `items`,
а так же функцией, определяющей, является ли крошка активной:
```jsx
import items from './items';

<Breadcrumbs
    items={items.slice(0, 4)}
    getItemName={items => items.name}
    getItemURL={items => items.url}
    getItemSiblings={items => items.items}
    isActiveItem={({ name }) => name.includes('First')}
/>
```
В узком блоке:
```jsx
import items from './items';

<div style={{ width: 550, border: '1px dashed #ccc' }}>
    <Breadcrumbs
        items={items}
    />
</div>
```
