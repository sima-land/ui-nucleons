import { getNoIndexProps } from '@sima-land/ui-nucleons/no-index';

export const meta = {
  category: 'Утилиты/NoIndex',
  title: 'Использование утилит',
  parameters: {
    layout: 'padded',
  },
};

export default function UtilsUsage() {
  return (
    <>
      <div {...getNoIndexProps('Данный текст не будет индексироваться Яндексом')} />
      <div>А этот будет =)</div>
    </>
  );
}
