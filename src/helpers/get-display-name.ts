/**
 * Возвращает имя компонента.
 * @param Component Компонент.
 * @param placeholder Заглушка при невозможности получить имя.
 * @return Имя компонента.
 */
const getDisplayName = (Component: any, placeholder = 'Unknown') => Component?.displayName
  || Component?.name
  || placeholder;

export default getDisplayName;
