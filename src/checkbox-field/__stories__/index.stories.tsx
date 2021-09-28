import React from 'react';
import { CheckboxField, CheckboxFieldProps } from '..';

export default {
  title: 'common/CheckboxField',
  component: CheckboxField,
  parameters: {
    layout: 'padded',
  },
};

const Demo = (props: Partial<CheckboxFieldProps>) => (
  <>
    <h3>Ярлык</h3>
    <div>
      <CheckboxField {...props} id='label-only' label='Оставить отзыв анонимно' />
    </div>

    <h3>Ярлык + комментарий</h3>
    <div>
      <CheckboxField
        {...props}
        id='label-and-info'
        label='Оставить отзыв анонимно'
        info='По умолчанию отзыв будет оставлен от вашего имени'
      />
    </div>

    <h3>Disabled</h3>
    <div>
      <CheckboxField
        {...props}
        id='disabled'
        label='Оставить отзыв анонимно'
        info='По умолчанию отзыв будет оставлен от вашего имени'
        disabled
      />
    </div>

    <h3>Checked + Disabled</h3>
    <div>
      <CheckboxField
        {...props}
        id='disabled'
        label='Оставить отзыв анонимно'
        info='По умолчанию отзыв будет оставлен от вашего имени'
        disabled
        checked
      />
    </div>

    <h3>Failed</h3>
    <div>
      <CheckboxField
        {...props}
        id='failed'
        label='Оставить отзыв анонимно'
        info='По умолчанию отзыв будет оставлен от вашего имени'
        failed
      />
    </div>

    <h3>Много текста</h3>
    <div style={{ maxWidth: 240 }}>
      <CheckboxField
        {...props}
        id='lot-of-text'
        label={`
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita ipsum nisi nobis ratione.
          `.trim()}
        info={`
            Dolor sit amet consectetur adipisicing elit.
            Expedita ipsum nisi nobis ratione.
          `.trim()}
      />
    </div>
  </>
);

export const Primary = () => <Demo />;

export const SmallText = () => <Demo smallText />;

export const Toggle = () => <Demo fieldView='toggle' />;
