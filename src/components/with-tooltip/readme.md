```jsx
import Link from '../link/deprecated';

const [shown, setShown] = React.useState(false);

<WithTooltip
  shown={shown}
  tooltipChildren='Tooltip children'
  onDismiss={() => setShown(false)}
>
  <Link
    onClick={() => setShown(true)}
    pseudo
  >
    [Open tooltip]
  </Link>
</WithTooltip>
```
