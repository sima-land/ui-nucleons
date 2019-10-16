Указание отступов
```jsx
import { graphemes } from '../constants';

<Box
  margin={4}
  padding={4}
  children='Test margins and paddings'
  dangerouslySetInlineStyle={{ __style: { border: '1px dashed #000' } }}
/>
```

Работа с flex-содержимым
```jsx
import { graphemes } from '../constants';

const testAlignItems = [
  <Box
    key={20}
    margin={1}
    dangerouslySetInlineStyle={{ __style: { minWidth: 10, minHeight: 20, background: '#323232' } }}
  />,
  <Box
    key={40}
    margin={1}
    dangerouslySetInlineStyle={{ __style: { minWidth: 10, minHeight: 40, background: '#323232' } }}
  />,
  <Box
    key={60}
    margin={1}
    dangerouslySetInlineStyle={{ __style: { minWidth: 10, minHeight: 60, background: '#323232' } }}
  />,
];

const getTestBoxes = ({ alignItems, justifyContent }) => (
  <Box
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
    getTestBoxes({ alignItems: 'center', justifyContent: 'start' }),
    getTestBoxes({ alignItems: 'center', justifyContent: 'center' }),
    getTestBoxes({ alignItems: 'center', justifyContent: 'end' }),
    getTestBoxes({ alignItems: 'center', justifyContent: 'between' }),
    getTestBoxes({ alignItems: 'center', justifyContent: 'around' }),
  ]}
</Box>
<Box display='flex' wrap>
  {[
    getTestBoxes({ alignItems: 'start', justifyContent: 'center' }),
    getTestBoxes({ alignItems: 'end', justifyContent: 'center' }),
    getTestBoxes({ alignItems: 'center', justifyContent: 'center' }),
    getTestBoxes({ alignItems: 'stretch', justifyContent: 'center' }),
  ]}
</Box>
</React.Fragment>

```
