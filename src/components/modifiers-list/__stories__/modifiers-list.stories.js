import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import ModifiersList from '../';
import classes from './modifiers-list.scss';
import items from './items';

storiesOf('ModifiersList', module)
  .add('All types', () => (
    <Fragment>
      <div className={classes.list}>
        <div className={classes.title}>Фото</div>
        <ModifiersList
          items={items.withPhoto}
          currencyGrapheme='₽'
        />
      </div>
      <div className={classes.list}>
        <div className={classes.title}>Цвет</div>
        <ModifiersList
          items={items.withColor}
          currencyGrapheme='₽'
        />
      </div>
      <div className={classes.list}>
        <div className={classes.title}>Текст</div>
        <ModifiersList
          items={items.withText}
          currencyGrapheme='₽'
        />
      </div>
    </Fragment>
  ));
