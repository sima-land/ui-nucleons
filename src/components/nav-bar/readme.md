Компонент панели навигации для экранов.

Примеры:

```jsx
import ArrowLeftSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-left';
import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cross';
import CartSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cart';
import PersonSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/person';

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
        start: { icon: ArrowLeftSVG },
        startSecondary: { icon: PersonSVG },
        end: { icon: CrossSVG },
        endSecondary: { icon: CartSVG },
      }}
    />
  </DisplayWrapper>

  <DisplayWrapper>
    <NavBar
      title='Достаточно длинный заголовок'
      subtitle='Чрезвычайно длинный подзаголовок'
      buttons={{
        start: { icon: ArrowLeftSVG },
        end: { text: 'Применить' },
      }}
    />
  </DisplayWrapper>
</React.Fragment>
```
