import { createContext, ReactNode, useCallback, useState } from 'react';

interface Group {
  isOpen: boolean;
  id: symbol;
}

interface ContextProps {
  register: (groupId: string, initialOpen?: boolean) => symbol;
  unregister: (groupId: string, id: symbol) => void;
  toggle: (groupId: string, id: symbol) => void;
  selectOpenedId: (groupId: string) => symbol | undefined;
}

interface Props {
  children?: ReactNode;
}

export const AccordionContext = createContext<ContextProps>({
  register: () => Symbol(),
  unregister: () => {},
  toggle: () => {},
  selectOpenedId: () => Symbol(),
});

/**
 * Провайдер обрабатывающий логику открытия аккордеонов внутри групп.
 * @param props Пропсы.
 * @return Элемент.
 */
export const AccordionProvider = ({ children }: Props) => {
  const [items, setItems] = useState<Record<string, Group[]>>({});

  const register = useCallback(
    (groupId: string, initialOpen = false) => {
      const item = {
        isOpen: initialOpen,
        id: Symbol(groupId),
      };
      items[groupId] = (items[groupId] || [])
        .map(({ isOpen, ...rest }) => ({
          ...rest,
          isOpen: initialOpen ? false : isOpen,
        }))
        .concat(item);

      setItems(items);
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

  const toggle = useCallback((groupId: string, id: symbol) => {
    setItems(registeredItems => ({
      ...registeredItems,
      [groupId]: registeredItems[groupId].map(value => ({
        ...value,
        isOpen: value.id === id && !value.isOpen,
      })),
    }));
  }, []);

  const selectOpenedId = useCallback(
    (groupId: string) => items[groupId]?.find(item => item.isOpen)?.id,
    [items],
  );

  return (
    <AccordionContext.Provider
      value={{
        register,
        unregister,
        toggle,
        selectOpenedId,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
