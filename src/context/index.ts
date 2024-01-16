/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import { createContext } from 'react';

export const MatchMediaContext = createContext({
  // ВАЖНО: используем "window.matchMedia" вместо "matchMedia" тк падают ошибки в некоторых браузерах
  matchMedia(query: string) {
    // ВАЖНО: доступ к window.matchMedia должен осуществляться именно в момент вызова а не в момент определения контекста
    return window.matchMedia(query);
  },
});

export const ResizeObserverContext = createContext({
  createResizeObserver(callback: ResizeObserverCallback) {
    return new window.ResizeObserver(callback);
  },
});

export const IntersectionObserverContext = createContext({
  createIntersectionObserver(...args: ConstructorParameters<typeof IntersectionObserver>) {
    return new window.IntersectionObserver(...args);
  },
});
