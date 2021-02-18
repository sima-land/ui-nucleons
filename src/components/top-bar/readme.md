Представляет собой шапку модальных окон/экранов.

```jsx
import Icon from '../icon';
import SearchSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/search';
import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cross';

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
        icon: <Icon size={24} icon={SearchSVG} />,
        onClick: () => console.log('Click to the start icon'),
      },
      end: {
        icon: <Icon size={24} icon={CrossSVG} />,
        onClick: () => console.log('Click to the end icon'),
      },
    }}
  />
</React.Fragment>
```
