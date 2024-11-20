import { createContext, ReactNode, useCallback, useState } from 'react';

interface Group {
  setExpand: (expand: boolean) => void;
  id: symbol;
}

interface ContextProps {
  register: (groupId: string, setExpand: (expand: boolean) => void) => symbol;
  unregister: (groupId: string, id: symbol) => void;
  closeGroup: (groupId: string) => void;
}

interface Props {
  children?: ReactNode;
}

export const AccordionContext = createContext<ContextProps>({
  register: () => Symbol(),
  unregister: () => {},
  closeGroup: () => {},
});

/**
 * Провайдер обрабатывающий логику открытия аккордеонов внутри групп.
 * @param props Пропсы.
 * @return Элемент.
 */
export const AccordionProvider = ({ children }: Props) => {
  const [items, setItems] = useState<Record<string, Group[]>>({});

  const register = useCallback(
    (groupId: string, setExpand: (expand: boolean) => void) => {
      const item = {
        setExpand,
        id: Symbol(groupId),
      };
      setItems(registeredItems => ({
        ...registeredItems,
        [groupId]: (registeredItems[groupId] || []).concat(item),
      }));
      return item.id;
    },
    [items],
  );

  const unregister = useCallback((groupId: string, id: symbol) => {
    setItems(registeredItems => {
      registeredItems[groupId] = registeredItems[groupId].filter(item => item.id !== id);
      if (registeredItems[groupId].length < 1) delete registeredItems[groupId];
      return registeredItems;
    });
  }, []);

  const closeGroup = useCallback(
    (groupId: string) => items[groupId]?.forEach(({ setExpand }) => setExpand(false)),
    [items],
  );

  return (
    <AccordionContext.Provider
      value={{
        register,
        unregister,
        closeGroup,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
