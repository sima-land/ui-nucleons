/**
 * Возвращает имя компонента.
 * @param {*} Component Компонент.
 * @param {string} [placeholder='Unknown'] Заглушка при невозможности получить имя.
 * @return {string} Имя компонента.
 */
const getDisplayName = (Component, placeholder = 'Unknown') => Component
  ? Component.displayName || Component.name || placeholder
  : placeholder;

export default getDisplayName;
