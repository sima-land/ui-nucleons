import { useEffect, useState } from 'react';
import on from '../helpers/on';

/**
 * Возвращает состояние по media-запросу.
 * @param query Запрос.
 * @return Состояние (matches).
 */
export const useMedia = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mql = window.matchMedia(query);

    setMatches(mql.matches);

    return on<MediaQueryListEvent>(mql, 'change', event => {
      setMatches(event.matches);
    });
  }, [query]);

  return matches;
};
