import {
  Breakpoint,
  ChangeHandler,
  Direction,
  Registry,
  RegistryItem,
  Subscription,
} from './types';

const Resolution: Record<Breakpoint, number> = {
  mxs: 0,
  ms: 480,
  mm: 720,
  ml: 840,
  xs: 1024,
  s: 1280,
  m: 1440,
  l: 1600,
  xl: 1920,
} as const;

const BREAKPOINTS: ReadonlyArray<Breakpoint> = [
  'mxs',
  'ms',
  'mm',
  'ml',
  'xs',
  's',
  'm',
  'l',
  'xl',
];

export const BreakpointQuery = {
  getBreakpoint: (query: string) => query.slice(0, -1),

  getDirection: (query: string) => query.slice(-1),

  isValid: (value: unknown) =>
    typeof value === 'string' &&
    value.length >= 2 &&
    BREAKPOINTS.includes(BreakpointQuery.getBreakpoint(value) as any) &&
    ['+', '-', ''].includes(BreakpointQuery.getDirection(value)),

  parse: (query: string): [Breakpoint, Direction] => [
    BreakpointQuery.getBreakpoint(query) as Breakpoint,
    BreakpointQuery.getDirection(query) as Direction,
  ],

  toMediaQuery: (query: string) => {
    const [breakpoint, direction] = BreakpointQuery.parse(query);
    const rule = direction === '+' ? 'min-width' : 'max-width';
    const value = Resolution[breakpoint] + (direction === '+' ? 0 : -1);

    return `(${rule}: ${value}px)`;
  },
} as const;

// eslint-disable-next-line require-jsdoc
export const createRegistry = (): Registry => {
  const registry: Registry = {
    items: {},
    subscribe: (query, listener) => {
      let item = registry.items[query];

      if (item) {
        item.handlers.add(listener);
      } else {
        const newItem: RegistryItem = {
          mql: matchMedia(BreakpointQuery.toMediaQuery(query)),
          handlers: new Set([listener]),
        };

        newItem.mql.addEventListener('change', e => {
          newItem.handlers.forEach(fn => fn(e));
        });

        item = newItem;
        registry.items[query] = newItem;
      }

      return createSubscription(item, listener);
    },
  };

  return registry;
};

// eslint-disable-next-line require-jsdoc
const createSubscription = (
  item: RegistryItem,
  listener: ChangeHandler,
): Subscription => ({
  matches: item.mql.matches,
  unsubscribe: () => item.handlers.delete(listener),
});
