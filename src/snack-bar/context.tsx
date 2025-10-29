import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

/**
 * Провайдер контекста для вывода нескольких снекбаров.
 * @param props Параметры.
 * @return Элемент.
 */
export function SnackbarContextProvider({ children }: { children?: ReactNode }) {
  const [value, setClose] = useState<{ closePrevious?: VoidFunction }>({});

  return (
    <SnackbarContext.Provider value={{ ...value, setClose }}>{children}</SnackbarContext.Provider>
  );
}

export const SnackbarContext = createContext<ContextProps>({});

interface ContextProps {
  closePrevious?: VoidFunction;
  setClose?: Dispatch<SetStateAction<{ closePrevious?: VoidFunction }>>;
}
