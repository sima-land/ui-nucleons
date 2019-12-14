Базовые хлебные крошки.  
Принимаемая структура `items` по умолчанию:
```jsx
const items = [
    {
        name,
        url,
        items: [],
        isActive,
    }
];

<Breadcrumbs items={items} />
```

Хлебные крошки с функцией,
которая должна выполниться при открытии попапа с соседними категориями:
```jsx
<Breadcrumbs
    items={items}
    onOpenBreadcrumbs={onOpenBreadcrumbs}
/>
```

Хлебные крошки с функциями получения имени, ссылки и списка соседних категорий
из переданного списка `items`,
а так же функцией, определяющей, является ли крошка активной:
```jsx
<Breadcrumbs
    items={items}
    getItemName={getItemName},
    getItemURL={getItemURL},
    getItemSiblings={getItemSiblings},
    isActiveItem={isActiveItem},
/>
```
