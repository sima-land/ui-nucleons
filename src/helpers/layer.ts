import { createContext, useContext } from 'react';

const LayerContext = createContext<number>(0);

/**
 * Провайдер, задающий индекс "слоя".
 */
export const LayerProvider = LayerContext.Provider;

/**
 * Хук, возвращающий индекс текущего "слоя".
 * @return Индекс.
 */
export const useLayer = () => {
  const currentLayer = useContext(LayerContext);

  return currentLayer;
};
