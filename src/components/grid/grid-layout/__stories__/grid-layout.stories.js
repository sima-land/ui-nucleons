import React, { Fragment } from 'react';
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
  ))
  .add('different settings', () => (
    <Fragment>
      <GridLayout
        containerProps={{ className: styles.dotted }}
        smPadding='lg'
        xsPadding='lg'
        xxsPadding='lg'
        xxxsPadding='lg'
        smMaxWidth='md'
        xsMaxWidth='md'
        xxsMaxWidth='md'
        xxxsMaxWidth='md'
      >
        <div className={styles['content-green']}>Settings for desktop</div>
      </GridLayout>
      <br />
      <GridLayout
        containerProps={{ className: styles.dotted }}
        mdPadding='sm'
        xxlMaxWidth='sm'
        xlMaxWidth='sm'
        lgMaxWidth='sm'
        mdMaxWidth='sm'
      >
        <div className={styles['content-green']}>Settings for mobile</div>
      </GridLayout>
    </Fragment>
  ));
