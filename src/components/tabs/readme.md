Стандартные табы без обработчиков:
```jsx
    const items = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];
  
    <div>
      <Tabs items={items} />
    </div>
```
Табы с обработчиками выбранного элемента:
```jsx
    const items = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'],
    initialState = {
        selected: 'Tab 2'
    },
    onSelect = item => setState({ selected: item }),
    isSelected = item => item === state.selected;
  
    <div>
      <Tabs items={items} isSelectedItem={isSelected} onSelectItem={onSelect}/>
    </div>
```
Табы с кастомным рендерингом элемента:
```jsx
    const items = [{ id: 1, name: 'first' }, { id: 2, name: 'second' }, { id: 3, name: 'third' }],
    initialState = {
        selected: 2
    },
    renderItem = item => `Tab ${item.id}: ${item.name}`,
    onSelect = item => setState({ selected: item.id }),
    isSelected = item => item.id === state.selected;
  
    <div>
      <Tabs items={items} renderItem={renderItem} isSelectedItem={isSelected} onSelectItem={onSelect}/>
    </div>
```
