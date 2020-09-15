Компонент панели навигации для экранов.

Примеры:

```jsx
import { crossBig, fullLeftArrow, cart, user } from '../icons';

const DisplayWrapper = ({ children }) => (
  <div
    style={{ width: 480, margin: '64px auto', boxShadow: '0 8px 12px rgba(0,0,0,.1)' }}
    children={children}
  />
);

<React.Fragment>
  <DisplayWrapper>
    <NavBar
      title='Достаточно длинный заголовок'
      subtitle='Чрезвычайно длинный подзаголовок'
    />
  </DisplayWrapper>

  <DisplayWrapper>
    <NavBar
      title='Достаточно длинный заголовок'
      subtitle='Чрезвычайно длинный подзаголовок'
      buttons={{
        start: { icon: fullLeftArrow },
        startSecondary: { icon: user },
        end: { icon: crossBig },
        endSecondary: { icon: cart },
      }}
    />
  </DisplayWrapper>

  <DisplayWrapper>
    <NavBar
      title='Достаточно длинный заголовок'
      subtitle='Чрезвычайно длинный подзаголовок'
      buttons={{
        start: { icon: fullLeftArrow },
        end: { text: 'Применить' },
      }}
    />
  </DisplayWrapper>
</React.Fragment>
```
