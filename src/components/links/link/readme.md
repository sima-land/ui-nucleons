Ссылка на внешний ресурс
```jsx
import { LINK_COLORS } from '../create-link-style';
LINK_COLORS.map(color => (
    <span style={{marginRight: '15px'}}>
        <Link
            color={color}
            underlined
            external
            inline
        >
            Ссылка
        </Link>
    </span>
))
