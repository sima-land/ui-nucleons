import { NoIndex } from '@sima-land/ui-nucleons/no-index';

export default {
  title: 'service/NoIndex',
  component: NoIndex,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <NoIndex>
        Данный текст не будет индексироваться Яндексом, поскольку обрамлён специальными
        HTML-комментариями
      </NoIndex>
    </>
  );
}

Primary.storyName = 'Простой пример';
