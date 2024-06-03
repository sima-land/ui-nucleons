import { Pagination, PaginationItem } from '@sima-land/ui-nucleons/pagination';

export default {
  title: 'common/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
};
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
