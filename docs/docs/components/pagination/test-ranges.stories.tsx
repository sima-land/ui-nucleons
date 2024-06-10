import { Pagination } from '@sima-land/ui-nucleons/pagination';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Pagination',
  title: 'Тест: Варианты данных',
  parameters: {
    layout: 'padded',
  },
};

export default function TestRanges() {
  const MyPagination = ({ total }: { total: number }) => {
    const [page, setPage] = useState(1);

    return (
      <Pagination
        current={page}
        total={total}
        onPageChange={(event, button) => setPage(button.value)}
      />
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {Array(16)
        .fill(0)
        .map((zero, index) => index)
        .concat(99, 999, 9999)
        .map(count => (
          <div key={count}>
            <h5>Total: {count}</h5>
            <MyPagination total={count} />
          </div>
        ))}
    </div>
  );
}
