`Layout` формирует ширину своего содержимого согласно дизайн системе.

### CSS-переменные
Содержимое Layout получает доступ к переменной `--layoutWidth` - текущей ширине, которая зависит от breakpoint'а.

### Важно
Layout позволяет передать своему контейнеру `className/style` однако не стоит переопределять ширину которую он задает

```jsx static
<Layout>
  <div style={{ background: 'rgb(207, 232, 252)' }}>
    <h2>Контент ограниченный layout'ом</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
  </div>
</Layout>
```
