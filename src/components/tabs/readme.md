Стандартные табы без обработчиков:
```jsx
    const items = ['tab 1', 'tab 2', 'tab 3', 'tab 4', 'tab 5'];
  
    <div style={{ width: '400px' }}>
      <Tabs items={items} />
    </div>
```
Табы с обработчиками выбранного элемента:
```jsx
    const items = ['tab 1', 'tab 2', 'tab 3', 'tab 4', 'tab 5'],
    initialState = {
        selected: 'tab 2'
    },
    onSelect = item => setState({ selected: item }),
    isSelected = item => item === state.selected;
  
    <div style={{ width: '400px' }}>
      <Tabs items={items} isSelectedItem={isSelected} onSelectItem={onSelect}/>
    </div>
```
Табы с кастомным рендерингом элемента:
```jsx
    const items = [{ id: 1, name: 'first' }, { id: 2, name: 'second' }, { id: 3, name: 'third' }],
    initialState = {
        selected: 2
    },
    renderItem = item => `tab ${item.id}: ${item.name}`,
    onSelect = item => setState({ selected: item.id }),
    isSelected = item => item.id === state.selected;
  
    <div style={{ width: '400px' }}>
      <Tabs items={items} renderItem={renderItem} isSelectedItem={isSelected} onSelectItem={onSelect}/>
    </div>
```
