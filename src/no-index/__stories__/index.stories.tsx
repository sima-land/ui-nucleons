import { NoIndex, NoIndexMark, getNoIndexProps } from '@sima-land/ui-nucleons/no-index';

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

export function MarkUsage() {
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

MarkUsage.storyName = 'Использование составных частей';

export function UtilsUsage() {
  return (
    <>
      <div {...getNoIndexProps('Данный текст не будет индексироваться Яндексом')} />
      <div>А этот будет =)</div>
    </>
  );
}

UtilsUsage.storyName = 'Использование утилит';
