import { NoIndex } from '@sima-land/ui-nucleons/no-index';

export const meta = {
  category: 'Утилиты/NoIndex',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <>
      <NoIndex>
        Данный текст не будет индексироваться Яндексом, поскольку обрамлён специальными
        HTML-комментариями
      </NoIndex>
    </>
  );
}
