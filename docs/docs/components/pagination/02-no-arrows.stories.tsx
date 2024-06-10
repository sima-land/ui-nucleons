import { Pagination, getPaginationItems } from '@sima-land/ui-nucleons/pagination';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Pagination',
  title: 'Без стрелок',
  parameters: {
    layout: 'padded',
  },
};

export default function NoArrows() {
  const total = 27;
  const [page, setPage] = useState(1);

  return (
    <>
      <Pagination
        total={total}
        current={page}
        onPageChange={(event, button) => setPage(button.value)}
        getItems={payload => getPaginationItems(payload, { arrows: false })}
      />
    </>
  );
}
