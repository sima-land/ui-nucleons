Варианты размеров
```jsx
import range from 'lodash/range';

<React.Fragment>
  <h3>С подстраиванием высоты</h3>
  <Textarea
    defaultValue={range(10).join(',\n')}
    autoFitHeight
    resizeable={false}
    placeholder='Enter your story'
  />

  <h3>С ошибкой</h3>
  <Textarea
    failed
    resizeable={false}
    defaultValue='Some text'
    placeholder='Enter your story'
  />

  <h3>На всю ширину</h3>
  <Textarea
    fullWidth
    rows={4}
    resizeable={false}
    defaultValue='Another text'
    placeholder='Enter your story'
  />
</React.Fragment>
```
