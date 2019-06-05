Базовая ссылка
```jsx
<Link>
    Ссылка
</Link>
```

Ссылка
```jsx
import { LINK_COLORS } from './create-link-style';
LINK_COLORS.map(color => (
    <span style={{marginRight: '15px'}}>
        <Link
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
    <span style={{marginRight: '15px'}}>
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

Ссылка на внешний ресурс
```jsx
import { LINK_COLORS } from './create-link-style';
LINK_COLORS.map(color => (
    <span style={{marginRight: '15px'}}>
        <Link
            color={color}
            external
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
    <span style={{marginRight: '15px'}}>
        <Link
            color={color}
            disableHoverEffect
        >
            Ссылка
        </Link>
    </span>
))
```
