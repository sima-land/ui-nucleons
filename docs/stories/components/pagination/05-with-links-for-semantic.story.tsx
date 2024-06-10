import { Pagination, PaginationItem } from '@sima-land/ui-nucleons/pagination';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Pagination',
  title: 'Кнопки-ссылки для семантики',
  parameters: {
    layout: 'padded',
  },
};

export default function WithLinksForSemantic() {
  const total = 54;
  const [page, setPage] = useState(1);

  return (
    <>
      <Pagination
        total={total}
        current={page}
        onPageChange={(event, button) => {
          setPage(button.value);
        }}
        renderItem={(item, getProps) => (
          <PaginationItem
            {...getProps({
              href: `http://my-site.ru?page=${item.value}`,
              onClick: event => event.preventDefault(),
            })}
          />
        )}
      />
    </>
  );
}
