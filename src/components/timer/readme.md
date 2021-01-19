Таймер

```jsx
import { addDays, formatISO } from 'date-fns';

<div style={{ background: '#fff', padding: 16 }}>
  <Timer date={formatISO(addDays(new Date(), 7))} />
</div>
```
