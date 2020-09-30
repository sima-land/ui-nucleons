**FieldGrid** помогает склеивать несколько полей (`TextField`) в одну сетку.

Использовать поля с ним можно только определенным образом:
- размеры строк вычисляются автоматически
- поля не могут использовать подпись снизу (`caption`)
- в строке не может быть более 3 полей (на данный момент)

Пример использования:

```jsx
import TextField from '../text-field';

<div style={{ background: '#fff', padding: 24 }}>
  <FieldGrid>
    <FieldGrid.Row>
      <FieldGrid.Cell
        field={(
          <TextField defaultValue='Hello, world!' />
        )}
      />
      <FieldGrid.Cell
        field={(
          <TextField defaultValue='Hello, world!' />
        )}
      />
    </FieldGrid.Row>

    <FieldGrid.Row>
      <FieldGrid.Cell
        field={(
          <TextField defaultValue='Hello, world!' />
        )}
      />
      <FieldGrid.Cell
        field={(
          <TextField defaultValue='Hello, world!' />
        )}
      />
      <FieldGrid.Cell
        field={(
          <TextField defaultValue='Hello, world!' />
        )}
      />
    </FieldGrid.Row>
  </FieldGrid>
</div>
```
