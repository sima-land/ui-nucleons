export interface IPoint {
  x: number;
  y: number;
}

/**
 * Возвращает объект представляющий точку в двухмерном пространстве.
 * @param x Координата по оси X.
 * @param y Координата по оси Y.
 * @return Объект представляющий точку.
 */
export function Point(x = 0, y = 0): IPoint {
  return { x, y };
}

// @todo перенести в math?
