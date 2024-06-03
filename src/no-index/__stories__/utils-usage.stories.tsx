import { NoIndex, getNoIndexProps } from '@sima-land/ui-nucleons/no-index';

export default {
  title: 'service/NoIndex',
  component: NoIndex,
  parameters: {
    layout: 'padded',
  },
};

export function UtilsUsage() {
  return (
    <>
      <div {...getNoIndexProps('Данный текст не будет индексироваться Яндексом')} />
      <div>А этот будет =)</div>
    </>
  );
}

UtilsUsage.storyName = 'Использование утилит';
