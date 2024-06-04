import { UnknownContent } from '@sima-land/ui-nucleons/unknown-content';

export default {
  title: 'common/UnknownContent',
  component: UnknownContent,
  parameters: {
    layout: 'padded',
  },
};

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
