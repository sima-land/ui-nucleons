import React from 'react';
import { storiesOf } from '@storybook/react';
import styles from './grid-layout-demo.scss';
import GridLayout from '../';
import GridRow from '../../grid-row';
import GridCol from '../../grid-col';

storiesOf('Grid/GridLayout', module)
  .add('with content', () => (
    <GridLayout>
      <div className={styles['content-green']}>
        GridLayout
      </div>
      <GridRow externalClass={styles['row-margin']}>
        <GridCol desktop={3} mobile={4}>
          <div className={styles['content-red']}>desktop-3 mobile-4 </div>
        </GridCol>
        <GridCol desktop={7} mobile={2}>
          <div className={styles['content-red']}>desktop-7 mobile-2</div>
        </GridCol>
        <GridCol desktop={2} mobile={2}>
          <div className={styles['content-red']}>desktop-2 mobile-2</div>
        </GridCol>
      </GridRow>
      <GridRow wrap externalClass={styles['row-margin']}>
        <GridCol desktop={5} mobile={8} externalClass={styles['column-margin']}>
          <div className={styles['content-red']}>desktop-5 mobile-8</div>
        </GridCol>
        <GridCol desktop={2} mobile={2} externalClass={styles['column-margin']}>
          <div className={styles['content-red']}>desktop-2 mobile-2</div>
        </GridCol>
        <GridCol desktop={5} mobile={6} externalClass={styles['column-margin']}>
          <div className={styles['content-red']}>desktop-5 mobile-6</div>
        </GridCol>
      </GridRow>
    </GridLayout>
  ));
