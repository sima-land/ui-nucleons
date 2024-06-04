import { NoIndex, NoIndexMark } from '@sima-land/ui-nucleons/no-index';

export default {
  title: 'service/NoIndex',
  component: NoIndex,
  parameters: {
    layout: 'padded',
  },
};

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
