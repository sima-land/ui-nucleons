/**
 * @typedef {Object} Point Объект представляющий точку в двухмерном пространстве.
 * @param {number} x Координата по оси X.
 * @param {number} y Координата по оси Y.
 */

/**
 * Возвращает объект представляющий точку в двухмерном пространстве.
 * @param {number} [x=0] Координата по оси X.
 * @param {number} [y=0] Координата по оси Y.
 * @return {Point} Объект представляющий точку.
 */
const Point = (x = 0, y = 0) => ({ x, y });

export default Point;
