import { times } from 'lodash';
import React from 'react';
import { UnknownContent } from '..';
import { someImageUrl } from '../../../.storybook/utils';

export default {
  title: 'common/UnknownContent',
  component: UnknownContent,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={{ margin: '0 auto', maxWidth: '960px' }}>
      <UnknownContent>
        <h1>Заголовок 1</h1>
        <h2>Заголовок 2</h2>
        <h3>Заголовок 3</h3>
        <h4>Заголовок 4</h4>
        <h5>Заголовок 5</h5>
        <h6>Заголовок 6</h6>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta praesentium suscipit
          totam labore illo, obcaecati eligendi mollitia reprehenderit velit!
        </p>

        <hr />

        <p>
          Lorem <b>ipsum dolor</b> sit<sup>sup</sup> amet<sub>sub</sub> consectetur adipisicing
          elit. Nihil dicta <a href='https://ya.ru'>praesentium</a> suscipit totam labore illo,
          obcaecati eligendi mollitia reprehenderit velit!
        </p>

        <ul>
          {times(15).map(i => (
            <li key={i}>
              {i % 4
                ? `Пункт списка №${i + 1}`
                : 'Пункт списка идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение форм развития '}
            </li>
          ))}
        </ul>

        <ol>
          {times(15).map(i => (
            <li key={i}>
              {i % 4
                ? `Пункт списка №${i + 1}`
                : 'Пункт списка идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение форм развития '}
            </li>
          ))}
        </ol>

        <table>
          <thead>
            <tr>
              <td>Заголовок 1</td>
              <td>Заголовок 2</td>
              <td>Заголовок 3</td>
              <td>Заголовок 4</td>
              <td>Заголовок 5</td>
              <td>Заголовок 6</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Значение А1</td>
              <td>Значение А2</td>
              <td>Значение А3</td>
              <td>Значение А4</td>
              <td>Значение А5</td>
              <td>Значение А6</td>
            </tr>
            <tr>
              <td>Значение B1</td>
              <td>Значение B2</td>
              <td>Значение B3</td>
              <td>Значение B4</td>
              <td>Значение B5</td>
              <td>Значение B6</td>
            </tr>
            <tr>
              <td>Значение C1</td>
              <td>Значение C2</td>
              <td>Значение C3</td>
              <td>Значение C4</td>
              <td>Значение C5</td>
              <td>Значение C6</td>
            </tr>
          </tbody>
        </table>

        <img src={someImageUrl({ w: 1200, h: 900, id: 1 })} alt='' />
        <img src={someImageUrl({ w: 1200, h: 600, id: 2 })} alt='' />

        <blockquote>
          <p>
            Бессилие эксплуатируемых классов в борьбе с эксплуататорами так же неизбежно порождает
            веру в лучшую загробную жизнь, как бессилие дикаря в борьбе с природой порождает веру в
            богов, чертей, в чудеса и т. п. Того, кто всю жизнь работает и нуждается, религия учит
            смирению и терпению в земной жизни, утешая надеждой на небесную награду.{' '}
          </p>
          <cite>Владимир Ленин, председатель Совета народных комиссаров</cite>
        </blockquote>
      </UnknownContent>
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function Markup() {
  const markup = `
    <h2>Для физических лиц</h2>

    <p>
      Оптовая цена вступает в силу, когда в «Корзине» стоимость товаров с этим значком превышает 10&nbsp;000 рублей.
    </p>

    <h2>Для юридических лиц и ИП</h2>

    <p>
      Те же условия + дополнительная скидка при покупке:
    </p>

    <table>
      <thead>
        <tr>
          <td>Сумма товаров</td>
          <td>Скидка от оптовой цены</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>От 20 000 ₽</td>
          <td>до 3 %</td>
        </tr>
        <tr>
          <td>От 50 000 ₽</td>
          <td>до 5 %</td>
        </tr>
        <tr>
          <td>От 100 000 ₽</td>
          <td>до 8 %</td>
        </tr>
      </tbody>
    </table>

    <p>
      На часть позиций со значком Опт «Галантерея и швейная галантерея» дополнительные скидки не распространяются.
    </p>
  `;

  return (
    <div style={{ margin: 'auto', maxWidth: '960px' }}>
      <UnknownContent markup={markup} />
    </div>
  );
}

Markup.storyName = 'HTML-код в качестве содержимого';
