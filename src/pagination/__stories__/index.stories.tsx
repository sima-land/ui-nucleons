import { useState } from 'react';
import { Pagination, PaginationItem, getPaginationItems } from '..';

export default {
  title: 'common/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const total = 1200;
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

Primary.storyName = 'Простой пример';

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

export function WithLinks() {
  const total = 45;

  return (
    <>
      <Pagination
        total={total}
        current={2}
        renderItem={(item, getProps) => (
          <PaginationItem {...getProps()} href={`http://my-site.ru?page=${item.value}`} />
        )}
      />
    </>
  );
}

WithLinks.storyName = 'Кнопки-ссылки';

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
