/**
 * Ищет в заданном элементе все ячейки таблиц и задает им атрибут "data-table-column-title".
 * Необходимо для стилизации адаптивных таблиц по гайдам.
 * @param element Элемент.
 */
export const setTableRowLabels = (element: Element): void => {
  element.querySelectorAll('tbody td').forEach(td => {
    // считаем, что parentNode есть всегда т.к. селектор это подразумевает
    const index = [...(td.parentNode as ParentNode).children].indexOf(td);

    // считаем, что index не может быть равен -1 т.к. поиск внутри родительского элемента
    td.setAttribute(
      'data-table-column-title',
      (td.closest('table') as HTMLTableElement).querySelector(`thead td:nth-child(${index + 1})`)
        ?.textContent || '',
    );
  });
};
