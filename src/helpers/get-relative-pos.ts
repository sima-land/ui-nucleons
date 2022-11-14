/**
 * Определяет позицию элемента относительно другого заданного элемента.
 * @param target Элемент для определения позиции.
 * @param parent Элемент, относительно которого необходимо определить позицию.
 * @return Относительная позиция элемента.
 */
export function getRelativePos(target: Element, parent = target.parentElement) {
  const targetBounds = target.getBoundingClientRect();
  const parentBounds = parent?.getBoundingClientRect();

  return {
    x: targetBounds.left - (parentBounds?.left || 0),
    y: targetBounds.top - (parentBounds?.top || 0),
  };
}

export default getRelativePos;
