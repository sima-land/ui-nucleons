import { useEffect, useState } from 'react';
import { subscribe } from '../helpers/media-query-list';

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

    return subscribe(mql, event => {
      setMatches(event.matches);
    }).unsubscribe;
  }, [query]);

  return matches;
};
