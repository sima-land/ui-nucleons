import { Accordion, AccordionProvider } from '@sima-land/ui-nucleons/accordion';
import { UnknownContent } from '@sima-land/ui-nucleons/unknown-content';

export const meta = {
  title: 'HTML контент',
  category: 'Компоненты/Accordion',
};

export default function () {
  return (
    <AccordionProvider>
      <Accordion groupId='html-group' title='Заголовок 1' >
          <UnknownContent markup='<ul><li>Первый элемент</li><li>Второй элемент</li><li>Третий элемент</li></ul>' />
      </Accordion>
    </AccordionProvider>
  );
}
