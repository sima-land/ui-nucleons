Варианты отображения:
```jsx
<React.Fragment>
  <h3>С ярлыком</h3>
  <div>
    <CheckboxField
      label='Оставить отзыв анонимно'
    />
  </div>

  <h3>С ярлыком, описанием и ошибкой</h3>
  <div>
    <CheckboxField
      label='Оставить отзыв анонимно'
      info='По умолчанию отзыв будет оставлен от вашего имени'
      error='Тестовая ошибка'
    />
  </div>

  <h3>С большим количеством текста</h3>
  <div style={{ maxWidth: 240 }}>
    <CheckboxField
      label={`
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita ipsum nisi nobis ratione.
      `.trim()}
      info={`
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita ipsum nisi nobis ratione.
      `.trim()}
      error={`
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita ipsum nisi nobis ratione.
      `.trim()}
    />
  </div>
</React.Fragment>
```
