/**
 * Возвращает объект с исходной строкой в тэге <!--noindex--> для запрета отслеживания контента поисковиками.
 * @param content Исходная строка.
 * @return Объект, содержащий обернутую строку, для использования c атрибутом dangerouslySetInnerHTML.
 */
export function getNoIndex(content: unknown) {
  return content ? { __html: `<!--noindex-->${String(content)}<!--/noindex-->` } : undefined;
}

// @todo перенести в src/no-index
