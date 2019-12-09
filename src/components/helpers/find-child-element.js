import isFunction from 'lodash/isFunction';
import identity from 'lodash/identity';

/**
 * Выполняет цикл для поиска родственного элемента по заданным условиям.
 * @param {Object} props Свойства.
 * @param {Element} props.target Элемент для которого нужно найти родственный элемент.
 * @param {number} [props.startIndex=0] Индекс элемента с которого нужно начать поиск.
 * @param {number} [props.increment=1] Значение инкремента.
 * @param {number} [props.defaultResult=-1] Резуьтат в случае если ни один элемент не прошел проверку.
 * @param {Function} [props.isSuitable] Должна определить удовлетворяет ли элемент условию.
 * @param {Function} [props.needBreakLoop] Должна определить нужно ли останавливать цикл.
 * @return {Element} Родственный элемент.
 */
const findChildElement = ({
  target,
  startIndex = 0,
  increment = +1,
  defaultResult = -1,
  isSuitable,
  needBreakLoop = identity,
} = {}) => {
  let result = defaultResult;

  if (
    target
    && target.children
    && isFunction(isSuitable)
  ) {
    const { children } = target;

    for (let i = startIndex; i >= 0 && i < children.length; i += increment) {
      const sibling = children[i];
      const passed = isSuitable(sibling);

      if (passed) {
        result = i;
      }
      if (needBreakLoop(passed)) {
        break;
      }
    }
  }

  return result;
};

export default findChildElement;
