Выводит список кнопок для перехода по страницам

```jsx
import Pagination from './index';

const [currentPage, setPage] = React.useState(1);

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
  <Pagination
    range={3}
    total={350}
    current={currentPage}
    onChange={({ value }) => setPage(value)}
  />
</div>
```
