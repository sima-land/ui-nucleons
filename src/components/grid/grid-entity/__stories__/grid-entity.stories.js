import React from 'react';
import { storiesOf } from '@storybook/react';
import styles from './grid-entity-demo.scss';
import GridEntity from '../';

storiesOf('Grid/GridEntity', module)
  .add('with new createClasses function', () => (
    <GridEntity tag='section' createClasses={() => styles.section}>
      This component takes user's function in createClasses prop and takes HTML-tag in tag prop.
      And returns component with tag and classes, formatted by function from createClasses.
    </GridEntity>
  ));

