import { Pagination, PaginationItem } from '@sima-land/ui-nucleons/pagination';
import { useState } from 'react';

export default {
  title: 'common/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
};

export function WithLinksForSemantic() {
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

WithLinksForSemantic.storyName = 'Кнопки-ссылки для семантики';
