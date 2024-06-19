import { getNoIndexProps } from '@sima-land/ui-nucleons/no-index';

export const meta = {
  category: 'Утилиты/NoIndex',
  title: 'Использование утилит',
};

export default function UtilsUsage() {
  return (
    <>
      <div {...getNoIndexProps('Этот текст не будет индексироваться Яндексом')} />
      <div>А этот будет =)</div>
    </>
  );
}
