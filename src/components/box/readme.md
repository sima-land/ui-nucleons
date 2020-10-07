Box это умный блок, который довольно много знает про дизайн систему.

Все отступы указываются в шагах (1 шаг = 4px).

Цвет Box указывается с помощью ключа.

Нельзя указать Box'у `className`.
Если этой функциональности не хватает - нужно использовать div.

Указание отступов

```jsx
const testMarginPropsList = [
  { margin: 2 },
  { marginX: 2 },
  { marginY: 2 },
  { marginTop: 2 },
  { marginBottom: 2 },
  { marginLeft: 2 },
  { marginRight: 2 },
  { margin: 2, marginRight: 8 },
];

const testPaddingPropsList = [
  { padding: 2 },
  { paddingX: 2 },
  { paddingY: 2 },
  { paddingTop: 2 },
  { paddingBottom: 2 },
  { paddingLeft: 2 },
  { paddingRight: 2 },
  { padding: 2, paddingLeft: 8 },
];

<div style={{ background: '#fff', padding: 16, width: 320 }}>
  <h2>Margin</h2>
  {testMarginPropsList.map((marginProps, index) => (
    <React.Fragment key={index}>
      <Box display='flex' color='additional-amber'>
        <Box flex='grow' color='brand-sky' padding={2} {...marginProps}>
          {JSON.stringify(marginProps, null, 2)}
        </Box>
      </Box>
      <div style={{ height: 32 }} />
    </React.Fragment>
  ))}

  <h2>Padding</h2>
  {testPaddingPropsList.map((paddingProps, index) => (
    <React.Fragment key={index}>
      <Box display='flex' color='service-success' {...paddingProps}>
        <Box flex='grow' color='brand-sky' padding={2}>
          {JSON.stringify(paddingProps, null, 2)}
        </Box>
      </Box>
      <div style={{ height: 32 }} />
    </React.Fragment>
  ))}
</div>
```

Работа с flex-содержимым

```jsx
import { graphemes } from '../constants';

const testAlignItems = (
  <React.Fragment>
    <Box
      margin={1}
      dangerouslySetInlineStyle={{ __style: { minWidth: 10, minHeight: 20, background: '#323232' } }}
    />
    <Box
      margin={1}
      dangerouslySetInlineStyle={{ __style: { minWidth: 10, minHeight: 40, background: '#323232' } }}
    />
    <Box
      margin={1}
      dangerouslySetInlineStyle={{ __style: { minWidth: 10, minHeight: 60, background: '#323232' } }}
    />
  </React.Fragment>
);

const renderTestBox = ({ alignItems, justifyContent }, key) => (
  <Box
    key={key}
    margin={2}
    padding={1}
    display='flex'
    alignItems={alignItems}
    justifyContent={justifyContent}
    dangerouslySetInlineStyle={{ __style: { width: 100, height: 100, border: '1px dashed #323232' } }}
    children={testAlignItems}
  />
);

<React.Fragment>
  <Box display='flex' wrap>
    {[
      { alignItems: 'center', justifyContent: 'start' },
      { alignItems: 'center', justifyContent: 'center' },
      { alignItems: 'center', justifyContent: 'end' },
      { alignItems: 'center', justifyContent: 'between' },
      { alignItems: 'center', justifyContent: 'around' },
    ].map(renderTestBox)}
  </Box>
  <Box display='flex' wrap>
    {[
      { alignItems: 'start', justifyContent: 'center' },
      { alignItems: 'end', justifyContent: 'center' },
      { alignItems: 'center', justifyContent: 'center' },
      { alignItems: 'stretch', justifyContent: 'center' },
    ].map(renderTestBox)}
  </Box>
</React.Fragment>
```
