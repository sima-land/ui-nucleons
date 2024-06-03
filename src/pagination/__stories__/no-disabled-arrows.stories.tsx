import { Pagination, getPaginationItems } from '@sima-land/ui-nucleons/pagination';
import { useState } from 'react';

export default {
  title: 'common/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
};

export function NoDisabledArrows() {
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

NoDisabledArrows.storyName = 'Без отключенных стрелок';
