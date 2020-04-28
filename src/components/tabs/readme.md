Стандартные табы без обработчиков:

```jsx
const items = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];

<div>
  <Tabs items={items} />
</div>
```

Табы с обработчиками выбранного элемента:

```jsx
const items = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];
const [selectedName, selectByName] = React.useState(2);

<div>
  <Tabs
    items={items}
    isSelectedItem={item => item === selectedName}
    onSelectItem={item => selectByName(item)}
  />
</div>
```

Табы с кастомным рендерингом элемента:

```jsx
const items = [{ id: 1, name: 'first' }, { id: 2, name: 'second' }, { id: 3, name: 'third' }];
const [selectedId, selectById] = React.useState(2);

<div>
  <Tabs
    items={items}
    renderItem={item => `Tab ${item.id}: ${item.name}`}
    isSelectedItem={item => item.id === selectedId}
    onSelectItem={item => selectById(item.id)}
  />
</div>
```
