import { fireEvent, render } from '@testing-library/react';
import { Pagination, PaginationItem } from '..';

describe('Pagination', () => {
  it('should handle total and current props missing', () => {
    const { container } = render(<Pagination />);

    expect(container.querySelectorAll('[aria-label="Предыдущая страница"]')).toHaveLength(1);
    expect(container.querySelectorAll('[aria-label="Следующая страница"]')).toHaveLength(1);
    expect(container.textContent).toBe('');
  });

  it('should handle total and current props when total <= 7', () => {
    const { container } = render(<Pagination current={2} total={7} />);

    expect(container.querySelectorAll('[aria-label="Предыдущая страница"]')).toHaveLength(1);
    expect(container.querySelectorAll('[aria-label="Следующая страница"]')).toHaveLength(1);
    expect(container.textContent).toBe('1234567');
  });

  it('should handle total and current props when current > 7 and total in start of range', () => {
    const { container } = render(<Pagination current={2} total={23} />);

    expect(container.querySelectorAll('[aria-label="Предыдущая страница"]')).toHaveLength(1);
    expect(container.querySelectorAll('[aria-label="Следующая страница"]')).toHaveLength(1);
    expect(container.textContent).toBe('12345…23');
  });

  it('should handle total and current props when current > 7 and total in middle of range', () => {
    const { container } = render(<Pagination current={8} total={23} />);

    expect(container.querySelectorAll('[aria-label="Предыдущая страница"]')).toHaveLength(1);
    expect(container.querySelectorAll('[aria-label="Следующая страница"]')).toHaveLength(1);
    expect(container.textContent).toBe('1…789…23');
  });

  it('should handle total and current props when current > 7 and total in end of range', () => {
    const { container } = render(<Pagination current={21} total={23} />);

    expect(container.querySelectorAll('[aria-label="Предыдущая страница"]')).toHaveLength(1);
    expect(container.querySelectorAll('[aria-label="Следующая страница"]')).toHaveLength(1);
    expect(container.textContent).toBe('1…1920212223');
  });

  it('should handle total = 1', () => {
    const { container } = render(<Pagination current={1} total={1} />);

    expect(container.textContent).toBe('1');
  });

  it('should handle total > 999', () => {
    const { container } = render(<Pagination current={999} total={7890} />);

    expect(container.textContent).toBe('1…9989991000…7890');
    expect(container.querySelectorAll('a.large')).toHaveLength(2);
  });

  it('should handle invalid item', () => {
    const { container } = render(
      <Pagination
        current={10}
        total={50}
        getItems={() => [{ type: 'invalid', value: 1 } as any]}
      />,
    );

    expect(container.textContent).toBe('');
  });

  it('should handle renderItem', () => {
    const itemClickSpy = jest.fn();
    const pageChangeSpy = jest.fn();

    const { getByText } = render(
      <Pagination
        current={8}
        total={23}
        onPageChange={pageChangeSpy}
        renderItem={(item, getProps) => (
          <PaginationItem
            {...getProps({
              href: `http://my-site.ru?page=${item.value}`,
              onClick: itemClickSpy,
            })}
          />
        )}
      />,
    );

    expect(itemClickSpy).toHaveBeenCalledTimes(0);
    expect(pageChangeSpy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(9));
    expect(itemClickSpy).toHaveBeenCalledTimes(1);
    expect(pageChangeSpy).toHaveBeenCalledTimes(1);

    fireEvent.click(getByText(8));
    expect(itemClickSpy).toHaveBeenCalledTimes(2);
    expect(pageChangeSpy).toHaveBeenCalledTimes(1);
  });
});
