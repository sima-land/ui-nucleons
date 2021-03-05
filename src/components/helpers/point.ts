export interface IPoint { x: number, y: number }

/**
 * Возвращает объект представляющий точку в двухмерном пространстве.
 * @param [x=0] Координата по оси X.
 * @param [y=0] Координата по оси Y.
 * @return Объект представляющий точку.
 */
const Point = (x = 0, y = 0): IPoint => ({ x, y });

export default Point;
