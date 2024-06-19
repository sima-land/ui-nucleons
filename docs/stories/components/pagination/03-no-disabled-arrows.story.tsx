import { Pagination, getPaginationItems } from '@sima-land/ui-nucleons/pagination';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Pagination',
  title: 'Без отключенных стрелок',
};

export default function NoDisabledArrows() {
  const total = 36;
  const [page, setPage] = useState(1);

  return (
    <>
      <Pagination
        total={total}
        current={page}
        onPageChange={(event, button) => setPage(button.value)}
        getItems={payload => getPaginationItems(payload, { arrows: 'active' })}
      />
    </>
  );
}
