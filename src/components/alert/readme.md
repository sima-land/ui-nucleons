Компонент модального диалога.

```jsx static
import Box from '../box';
import Text from '../text';
import Clean from '../clean-buttons';

<Alert
  children={(
    <Box marginTop={24} marginBottom={16} display='flex' justifyContent='center'>
      <Text align='center'>
        Перенести товары
        <br />
        из списка в корзину?
      </Text>
    </Box>
  )}
  footer={(
    <Clean.Group>
      <Clean.Button>Отмена</Clean.Button>
      <Clean.Button>Ок</Clean.Button>
    </Clean.Group>
  )}
/>
```
