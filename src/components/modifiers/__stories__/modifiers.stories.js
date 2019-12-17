import React from 'react';
import { storiesOf } from '@storybook/react';
import ModifiersWidget from '../modifiers-widget';
import items from './items';
import noop from 'lodash/noop';

storiesOf('Modifiers', module)
  .add('Варианты', () => (
    <>
      <h3>Тип &quot;image&quot;:</h3>
      <ModifiersWidget
        title='Варианты'
        items={items.imgItems}
        onSelectItem={noop}
      />
      <br />
      <h3>Тип &quot;image&quot;, отметки о количестве в корзине и уценке:</h3>
      <ModifiersWidget
        title='Варианты'
        items={items.imgItemsWithMark}
        onSelectItem={noop}
      />
      <br />
      <h3>Тип &quot;text&quot;, с ссылкой на таблицу размеров:</h3>
      <ModifiersWidget
        title='Размер / рост'
        items={items.textItems}
        onSelectItem={noop}
        sizesTableUrl='test/url'
      />
      <br />
      <h3>Тип &quot;color&quot;:</h3>
      <ModifiersWidget
        title='Цвет'
        items={items.colorItems}
        onSelectItem={noop}
      />
      <br />
      <h3>Тип &quot;image&quot;, в узком блоке:</h3>
      <div style={{ width: 200, border: '1px dashed #ccc' }}>
        <ModifiersWidget
          title='Варианты'
          items={items.imgItems.concat(items.imgItemsWithMark)}
          onSelectItem={noop}
        />
      </div>
    </>
  ));
