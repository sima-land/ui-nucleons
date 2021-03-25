/**
 * Определяет позицию элемента относительно другого заданного элемента.
 * @param {Element} target Элемент для определения позиции.
 * @param {Element} parent Элемент, относительно которого необходимо определить позицию.
 * @return {{ x: number, y: number }} Относительная позиция элемента.
 */
const getRelativePos = (target: Element, parent = target.parentElement) => {
  const targetBounds = target.getBoundingClientRect();
  const parentBounds = parent?.getBoundingClientRect();

  return {
    x: targetBounds.left - (parentBounds?.left || 0),
    y: targetBounds.top - (parentBounds?.top || 0),
  };
};

export default getRelativePos;
