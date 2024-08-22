/* eslint-disable jsdoc/require-jsdoc */
import { createContext } from 'react';

// @todo возможно стоит убрать "window." тк наблюдаются проблемы в iOS

export const MatchMediaContext = createContext({
  matchMedia(query: string) {
    // ВАЖНО: доступ к window.matchMedia должен осуществляться именно в момент вызова а не в момент определения контекста
    // ВАЖНО: используем "window.matchMedia" вместо "matchMedia" тк падают ошибки в некоторых браузерах
    return window.matchMedia(query);
  },
});

export const ResizeObserverContext = createContext({
  createResizeObserver(callback: ResizeObserverCallback) {
    // ВАЖНО: доступ к window.ResizeObserver должен осуществляться именно в момент вызова а не в момент определения контекста
    return new window.ResizeObserver(callback);
  },
});

export const IntersectionObserverContext = createContext({
  createIntersectionObserver(...args: ConstructorParameters<typeof IntersectionObserver>) {
    // ВАЖНО: доступ к window.IntersectionObserver должен осуществляться именно в момент вызова а не в момент определения контекста
    return new window.IntersectionObserver(...args);
  },
});
