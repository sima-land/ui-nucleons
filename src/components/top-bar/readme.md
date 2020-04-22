Представляет собой шапку модальных окон/экранов.

```jsx
import Icon from '../icon';
import { search, close } from '../icons';

<React.Fragment>
  <TopBar
    title='Заголовок'
    subtitle='Подзаголовок'
  />

  <div style={{ height: 20 }} />

  <TopBar
    title='Заголовок'
    subtitle='Подзаголовок'
    startIcon={<Icon size={24} icon={search} />}
    endIcon={<Icon size={24} icon={close} />}
  />
</React.Fragment>
```
