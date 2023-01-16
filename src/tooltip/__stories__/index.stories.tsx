import { action } from '@storybook/addon-actions';
import React from 'react';
import { Tooltip } from '..';

const shortText = 'Это тестовый тултип.';

const longText = [
  'Тормоза делятся на 3 основных вида: барабанный (ножной), ободной и дисковый.',
  'Преимущество барабанного тормоза заключается в простоте обслуживания.',
  'Такой тормоз долговечен, потому что механизм закрыт, и в него попадает мало грязи.',
  'Он не изнашивает обод. Ободной тормоз отличается наименьшим весом.',
  'В сравнении с барабанным, обеспечивает более плавное торможение.',
  'Дисковый тормоз эффективен в любых погодных условиях, потому что на механизм не попадает грязь с ободьев.',
  'Обеспечивает мощное торможение, подходит для экстремальной езды по бездорожью. Не изнашивает обод. ',
]
  .join(' ')
  .repeat(2);

export default {
  title: 'deprecated/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return <Tooltip onClose={() => action('onClose')()}>{shortText}</Tooltip>;
}

Primary.storyName = 'Простой пример';

export function LargeContent() {
  return <Tooltip onClose={() => action('onClose')()}>{longText}</Tooltip>;
}

LargeContent.storyName = 'Много текста';
