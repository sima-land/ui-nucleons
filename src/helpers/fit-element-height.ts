/**
 * Подгонит высоту поля под содержимое.
 * @param eventLike Событие.
 * @param eventLike.target Поле.
 */
export function fitElementHeight({ target }: { target: HTMLElement }) {
  target.style.height = 'auto';

  // ВАЖНО (1): актуальные значения берем ПОСЛЕ установки "auto" (в начало функции не переносить)
  // ВАЖНО (2): дважды обращаемся к scrollHeight из-за бага в Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1799404
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scrollHeight, offsetHeight, clientHeight } = target;

  target.style.height = `${target.scrollHeight + offsetHeight - clientHeight}px`;
}
