import React from 'react';
import { Card } from '..';
import { Clean } from '../../clean-buttons';
import { TopBar } from '../../top-bar';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import { PhoneInput } from '../../phone-input';

export default {
  title: 'common/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <h3>Пример верстки по макетам</h3>

    <Card rounds='m' shadow='z4' style={{ width: 352, height: 436 }}>
      <Card.Header divided>
        <TopBar
          size='s'
          title='Заказ звонка'
          buttonsProps={{
            end: { icon: <CrossSVG /> },
          }}
        />
      </Card.Header>

      <Card.Content
        style={{
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        Марина Михайловская позвонит
        <br />
        на этот номер
        <PhoneInput style={{ marginTop: 24, '--phone-input-width': 304 }} />
      </Card.Content>

      <Card.Footer divided>
        <Clean.Group>
          <Clean.Button>Отправить</Clean.Button>
        </Clean.Group>
      </Card.Footer>
    </Card>
  </>
);
