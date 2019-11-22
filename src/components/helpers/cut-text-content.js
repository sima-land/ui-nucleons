import isNumber from 'lodash/isNumber';

/**
 * Обрезает textContent переданного элемента, пока его высота не будет соответствовать заданной.
 * @param {HTMLElement} element Элемент для обрезания textContent.
 * @param {number} height Заданная высота.
 */
const cutTextContent = (element, height) => {
  if (element instanceof HTMLElement && isNumber(height) && height > 0) {
    const selfDisplay = element.style.display;
    element.style.display = 'block';

    while (element.textContent.length > 3 && element.clientHeight > height) {
      // удаляем 4 элемента и вставляем многоточие
      element.textContent = `${element.textContent.slice(0, -4).trim()}...`;
    }
    element.style.display = selfDisplay;
  }
};

export default cutTextContent;
