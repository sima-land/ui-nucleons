```jsx
import Link from '../link';

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
