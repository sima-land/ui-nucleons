Псевде-ссылка со стрелкой вверх:
```jsx
import { LINK_COLORS } from '../create-link-style';
LINK_COLORS.map(color => (
    <span style={{marginRight: '15px'}}>
        <PseudoLink
            color={color}
            underlined
            withArrow
            upArrow
            inline
        >
            Ссылка
        </PseudoLink>
    </span>
))
```
Псевдо-ссылка co стрелкой вниз:
```jsx
import { LINK_COLORS } from '../create-link-style';
LINK_COLORS.map(color => (
    <span style={{marginRight: '15px'}}>
        <PseudoLink
            color={color}
            underlined
            withArrow
            inline
        >
            Ссылка
        </PseudoLink>
    </span>
))
```
