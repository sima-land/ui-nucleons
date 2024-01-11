/**
 * Выполняет цикл для поиска родственного элемента по заданным условиям.
 * @param props Свойства.
 * @param props.target Элемент для которого нужно найти родственный элемент.
 * @param [props.startIndex] Индекс элемента с которого нужно начать поиск.
 * @param [props.increment] Значение инкремента.
 * @param [props.defaultResult] Результат в случае если ни один элемент не прошел проверку.
 * @param [props.isSuitable] Должна определить удовлетворяет ли элемент условию.
 * @param [props.needBreakLoop] Должна определить нужно ли останавливать цикл.
 * @return Родственный элемент.
 */
export function findSiblingIndex({
  target,
  startIndex = 0,
  increment = 1,
  defaultResult = -1,
  isSuitable,
  needBreakLoop = a => a,
}: {
  target: HTMLElement;
  startIndex?: number;
  increment?: number;
  defaultResult?: number;
  isSuitable?: (el: Element) => boolean;
  needBreakLoop?: (passed: boolean) => boolean;
}): number {
  let result = defaultResult;

  if (target && target.parentElement && typeof isSuitable === 'function') {
    const { children } = target.parentElement;

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
}
