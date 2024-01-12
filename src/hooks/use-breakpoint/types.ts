export type Direction = '+' | '-';

export type ChangeHandler = (event: { matches: boolean }) => void;

export interface RegistryItem {
  mql: MediaQueryList;
  handlers: Set<ChangeHandler>;
}

export interface Subscription {
  matches: boolean;
  unsubscribe: () => void;
}

export type Registry = {
  items: Record<string, RegistryItem | undefined>;
  subscribe: (query: string, handler: ChangeHandler) => Subscription;
};
