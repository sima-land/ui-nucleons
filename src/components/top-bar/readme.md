Представляет собой шапку модальных окон/экранов.

```jsx
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
        icon: <SearchSVG size={24} />,
        onClick: () => console.log('Click to the start icon'),
      },
      end: {
        icon: <CrossSVG size={24} />,
        onClick: () => console.log('Click to the end icon'),
      },
    }}
  />
</React.Fragment>
```
