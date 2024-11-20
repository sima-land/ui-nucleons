import { Accordion, AccordionProvider } from '@sima-land/ui-nucleons/accordion';
import { LoremIpsum } from '../../../src/docs-utils';
import styles from './accordion.m.scss';

export const meta = {
  title: 'Множество групп',
  category: 'Компоненты/Accordion',
};

export default function () {
  return (
    <AccordionProvider>
      <div className={styles.group}>
        <h3 children='Группа №1' />
        <Accordion
          
          summary='Заголовок аккордеона'
          description='Это небольшое дополнительное описание к контенту аккордеона'
        >
          <div>
            <h3 children='Content text for 2nd header' />
            <span children='Content text normal' />
            <span children='Content text small' />
            <ul>
              <li>Bullet list</li>
              <li>Bullet list</li>
              <li>Bullet list</li>
            </ul>
          </div>
        </Accordion>
        <Accordion  summary='Заголовок аккордеона'>
          <span children={LoremIpsum({})} />
        </Accordion>
      </div>
      <div className={styles.group}>
        <h3 children='Группа №2' />
        <Accordion name='group2' theme='dark' summary='Заголовок аккордеона'>
          <div>
            <h3 children='Content text for 2nd header' />
            <span children='Content text normal' />
            <span children='Content text small' />
            <ul>
              <li>Bullet list</li>
              <li>Bullet list</li>
              <li>Bullet list</li>
            </ul>
          </div>
        </Accordion>
        <Accordion name='group2' theme='dark' summary='Заголовок аккордеона'>
          <span children={LoremIpsum({})} />
        </Accordion>
      </div>
      <div className={styles.group}>
        <h3 children='Группа №3' />
        <Accordion name='group3' summary='Заголовок аккордеона'>
          <div>
            <h3 children='Content text for 2nd header' />
            <span children='Content text normal' />
            <span children='Content text small' />
            <ul>
              <li>Bullet list</li>
              <li>Bullet list</li>
              <li>Bullet list</li>
            </ul>
          </div>
        </Accordion>
        <Accordion name='group3' summary='Заголовок аккордеона'>
          <span children={LoremIpsum({})} />
        </Accordion>
      </div>
    </AccordionProvider>
  );
}
