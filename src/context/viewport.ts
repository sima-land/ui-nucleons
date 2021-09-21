import { createRef, RefObject, createContext } from 'react';

/**
 * Контекст необходимый для правильного позиционирования выпадающих элементов (например Tooltip)
 * внутри компонентов формирующих свою область видимости (например Modal).
 */
export const ViewportContext = createContext<RefObject<HTMLElement>>(createRef());
