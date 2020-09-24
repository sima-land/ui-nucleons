Варианты отображения:
```jsx
import Link from '../link/deprecated';

<React.Fragment>
  <h3>Без настроек</h3>
  <div>
    <Attach />
  </div>

  <h3>С пользовательским ярлыком</h3>
  <div>
    <Attach
      renderLabel={({ triggerInput }) => (
        <span onClick={triggerInput} style={{ cursor: 'pointer' }}>
          Drop files here or click to select...
        </span>
      )}
      onSelect={files => alert(`You add ${files.length} file(s)`)}
    />
  </div>

  <h3>С пользовательской иконкой</h3>
  <div>
    <Attach
      startAdornment={(
        <span
          style={{ fontSize: 16, marginRight: 8 }}
          children='📂'
        />
      )}
      onSelect={files => alert(`You add ${files.length} file(s)`)}
    />
  </div>
</React.Fragment>
```
