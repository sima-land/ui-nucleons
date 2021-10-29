import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import brandImage from './logo.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Дизайн-система Сима-ленд',
    brandUrl: 'https://www.sima-land.ru/',
    brandImage,
  }),
});
