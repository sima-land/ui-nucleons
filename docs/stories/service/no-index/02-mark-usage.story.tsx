import { NoIndexMark } from '@sima-land/ui-nucleons/no-index';

export const meta = {
  category: 'Утилиты/NoIndex',
  title: 'Использование составных частей',
};

export default function MarkUsage() {
  return (
    <>
      <NoIndexMark />
      <div>
        Данный блок не будет индексироваться Яндексом, поскольку обрамлён специальными
        HTML-комментариями
      </div>
      <NoIndexMark closing />
    </>
  );
}
