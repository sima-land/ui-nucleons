import { Pagination, PaginationItem, getPaginationItems } from '@sima-land/ui-nucleons/pagination';
import { useState } from 'react';

export default {
  title: 'common/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
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

export function TestRanges() {
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

TestRanges.storyName = 'Тест: варианты данных';
