import { useContext, useState } from 'react';
import { subscribe } from '../../helpers/media-query-list';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';
import { MatchMediaContext } from '../../context';

/**
 * Возвращает состояние по media-запросу.
 * @param query Запрос.
 * @return Состояние (matches).
 */
export function useMedia(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  const { matchMedia } = useContext(MatchMediaContext);

  useIsomorphicLayoutEffect(() => {
    const mql = matchMedia(query);

    setMatches(mql.matches);

    return subscribe(mql, event => {
      setMatches(event.matches);
    }).unsubscribe;
  }, [query, matchMedia]);

  return matches;
}
