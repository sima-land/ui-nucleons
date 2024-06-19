import { Pagination, PaginationItem } from '@sima-land/ui-nucleons/pagination';

export const meta = {
  category: 'Компоненты/Pagination',
  title: 'Кнопки-ссылки',
};
export default function WithLinks() {
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
