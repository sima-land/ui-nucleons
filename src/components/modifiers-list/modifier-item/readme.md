Разные типы модификаторов:

```jsx 
<div style={{ background: '#fff', width: '300px', margin: '0 auto' }}>
    <ModifierItem
      name='Сирень - фото'
      type='image'
      image='https://cdn3.static1-sima-land.com/items/1131788/0/140.jpg?v=0'
      price={105}
      currencyGrapheme='$'
    />
    <ModifierItem
      name='серый - цвет'
      type='color'
      color='#808080'
      price={109}
      currencyGrapheme='$'
    />
    <ModifierItem
      name='34 (122-128см) - текст'
      type='text'
      price={48}
      currencyGrapheme='$'
    />
</div>
```

С дополнительным текстом:

```jsx 
<div style={{ background: '#fff', width: '300px', margin: '0 auto' }}>
    <ModifierItem
      name='Сирень'
      type='image'
      image='https://cdn3.static1-sima-land.com/items/1131788/0/140.jpg?v=0'
      price={105}
      currencyGrapheme='₽'
      additionalText='В корзине 7 шт'
    />
</div>
```

Выбранный модификатор:

```jsx 
<div style={{ background: '#fff', width: '300px', margin: '0 auto' }}>
    <ModifierItem
      name='Сирень'
      type='image'
      image='https://cdn3.static1-sima-land.com/items/1131788/0/140.jpg?v=0'
      price={105}
      currencyGrapheme='₽'
      selected
    />
</div>
```
