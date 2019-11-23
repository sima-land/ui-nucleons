/**
 * Возвращает элемент-потомок переданного элемента по индексу.
 * @param {Element} parent Элемент-родитель.
 * @param {number} [index=0] Индекс.
 * @return {Element|undefined} Элемент-потомок.
 */
const getChild = (parent, index = 0) => {
  let child;

  if (parent && parent.children) {
    child = parent.children[index];
  }

  return child;
};

export default getChild;
