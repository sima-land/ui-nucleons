type SizeParam = number | [number, number];
type OptionsParam = { w?: number; h?: number; id?: number };

/**
 * Возвращает ссылку на картинку по заданным параметрам.
 * На данный момент за основу взят https://loremflickr.com/.
 * @param params Параметры картинки.
 * @return URL.
 */
export function someImageUrl(params: SizeParam | OptionsParam): string {
  let w: number;
  let h: number;
  let id: number;

  if (typeof params === 'number') {
    w = params;
    h = w;
    id = 1;
  } else if (Array.isArray(params)) {
    w = params[0];
    h = params[1];
    id = 1;
  } else {
    w = params.w || 100;
    h = params.h || w;
    id = typeof params.id === 'number' ? params.id : 1;
  }

  return `https://loremflickr.com/${w}/${h}/architecture?lock=${id}`;
}
