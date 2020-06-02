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
    buttonsProps={{
      start: {
        icon: <Icon size={24} icon={search} />,
        onClick: () => console.log('Click to the start icon'),
      },
      end: {
        icon: <Icon size={24} icon={close} />,
        onClick: () => console.log('Click to the end icon'),
      },
    }}
  />
</React.Fragment>
```
