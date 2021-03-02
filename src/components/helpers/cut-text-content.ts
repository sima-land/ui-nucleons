/**
 * Обрезает textContent переданного элемента, пока его высота не будет соответствовать заданной.
 * @param element Элемент для обрезания textContent.
 * @param height Заданная высота.
 */
const cutTextContent = (element?: HTMLElement, height?: number) => {
  if (element instanceof HTMLElement && height && Number.isFinite(height) && height > 0) {
    const selfDisplay = element.style.display;

    element.style.display = 'block';

    while (element.textContent && element.textContent.length > 3 && element.clientHeight > height) {
      // удаляем 4 символа и вставляем многоточие
      element.textContent = `${element.textContent.slice(0, -4).trim()}...`;
    }

    element.style.display = selfDisplay;
  }
};

export default cutTextContent;
