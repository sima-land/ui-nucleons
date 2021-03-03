/**
 * Возвращает элемент-потомок переданного элемента по индексу.
 * @param parent Элемент-родитель.
 * @param index Индекс.
 * @return Элемент-потомок.
 */
const getChild = (parent?: HTMLElement, index = 0) => parent?.children?.[index];

export default getChild;
