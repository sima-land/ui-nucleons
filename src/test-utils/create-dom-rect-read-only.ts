/**
 * Создает новый DOMRectReadOnly.
 * @inheritdoc
 */
export function createDOMRectReadOnly(
  x: number | undefined = 0,
  y: number | undefined = 0,
  width: number | undefined = 0,
  height: number | undefined = 0,
): DOMRectReadOnly {
  const rect = {
    x,
    y,
    width,
    height,
    top: y,
    left: x,
    bottom: y + height,
    right: x + width,
  };

  return {
    ...rect,

    // ВАЖНО: копируем чтобы не было возможности изменить результат
    toJSON: () => ({ ...rect }),
  };
}
