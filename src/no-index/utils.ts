import type { DOMAttributes } from 'react';

/**
 * Оборачивает строку html-комментариями <!--noindex--> для запрета отслеживания контента поисковиками.
 * @param content Исходная строка.
 * @return Новая строка.
 */
export function wrapNoIndex(content: unknown): string {
  // ВАЖНО: проверка согласно тому как работает React (https://legacy.reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored)
  return (content && content !== true) || content === 0
    ? `<!--noindex-->${String(content)}<!--/noindex-->`
    : '';
}

/**
 * Возвращает пропсы dangerouslySetInnerHTML с исходной строкой в тэге <!--noindex--> для запрета отслеживания контента поисковиками.
 * @param content Исходная строка.
 * @return Объект, содержащий обернутую строку, для использования c атрибутом dangerouslySetInnerHTML.
 */
export function getNoIndexProps(
  content: unknown,
): Pick<DOMAttributes<any>, 'dangerouslySetInnerHTML'> {
  return {
    dangerouslySetInnerHTML: {
      __html: wrapNoIndex(content),
    },
  };
}
