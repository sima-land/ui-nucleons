import { Pagination } from '@sima-land/ui-nucleons/pagination';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Pagination',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  const total = 18;
  const [page, setPage] = useState(1);

  return (
    <>
      <Pagination
        total={total}
        current={page}
        onPageChange={(event, button) => setPage(button.value)}
      />
    </>
  );
}
