Компонент Screen выводит контент в отдельный экран поверх текущего содержимого страницы.

### Важно

В основе используется Layer. Обратите внимание на его использование...

### Использование

```jsx static
import Box from '../box';
import Button from '../button';

<Screen
  title='Title'
  subtitle='And subtitle here...'
  withBackButton
  footer={(
    <Box padding={4}>
      <Button style={{ width: '100%' }}>Footer button</Button>
    </Box>
  )}
>
  <Box padding={4}>Hello, world!</Box>
</Screen>
```
