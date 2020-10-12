## Кнопка-стрелка

Используется в галереях и слайдерах

```jsx
const sizes = ['l', 's'];

const directions = ['up', 'right', 'down', 'left'];

<React.Fragment>
  {sizes.map(size => (
    <div key={size} style={{ paddingTop: 16 }}>
      <h3>Size: {size}</h3>
      {directions.map(direction => (
        <div key={direction} style={{ display: 'inline-block', paddingRight: 32 }}>
          <ArrowButton size={size} direction={direction} />
        </div>
      ))}
    </div>
  ))}
</React.Fragment>
```
