Базовая ссылка
```jsx
<Link href='test'>
    Ссылка
</Link>
```

Ссылка
```jsx
import { LINK_COLORS } from './create-link-style';
LINK_COLORS.map(color => (
    <span style={{marginRight: '15px'}} key={color}>
        <Link
            href='test'
            color={color}
            underlined
        >
            Ссылка
        </Link>
    </span>
))
```

Псевдо-ссылка
```jsx
import { LINK_COLORS } from './create-link-style';
LINK_COLORS.map(color => (
    <span style={{marginRight: '15px'}} key={color}>
        <Link
            color={color}
            underlined
            pseudo
        >
            Ссылка
        </Link>
    </span>
))
```

Ссылка без hover
```jsx
import { LINK_COLORS } from './create-link-style';
LINK_COLORS.map(color => (
    <span style={{marginRight: '15px'}} key={color}>
        <Link
            href='test'
            color={color}
            disableHoverEffect
        >
            Ссылка
        </Link>
    </span>
))
```
