import { Pagination, getPaginationItems } from '@sima-land/ui-nucleons/pagination';
import { useState } from 'react';

export default {
  title: 'common/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
};

export function NoArrows() {
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

NoArrows.storyName = 'Без стрелок';
