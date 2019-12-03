import React from 'react';
import { storiesOf } from '@storybook/react';
import GridCol from '../';
import GridRow from '../../grid-row';
import styles from './grid-col-demo.scss';
import range from 'lodash/range';

storiesOf('Grid/GridCol', module)
  .add('with different columns desktop and mobile value', () => (
    <div className={styles['container-with-border']}>
      <p className={styles.title}>Сетка на 12 колонок при разрешении более 960px</p>
      <GridRow>
        <GridCol externalClass={styles['col-with-top-margin']} desktop={1}>
          <div className={styles['content-blue']}>desktop: 1</div>
        </GridCol>
      </GridRow>
      <GridRow>
        {range(0, 12).map(number => (
          <GridCol key={number} externalClass={styles['col-with-top-margin']} desktop={1}>
            <div className={styles['content-blue']}>desktop: 1</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow>
        {range(0, 6).map(number => (
          <GridCol key={number} externalClass={styles['col-with-top-margin']} desktop={2}>
            <div className={styles['content-blue']}>desktop: 2</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow>
        {range(0, 4).map(number => (
          <GridCol key={number} externalClass={styles['col-with-top-margin']} desktop={3}>
            <div className={styles['content-blue']}>desktop: 3</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow>
        {range(0, 3).map(number => (
          <GridCol key={number} externalClass={styles['col-with-top-margin']} desktop={4}>
            <div className={styles['content-blue']}>desktop: 4</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow>
        {range(0, 2).map(number => (
          <GridCol key={number} externalClass={styles['col-with-top-margin']} desktop={6}>
            <div className={styles['content-blue']}>desktop: 6</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow>
        <GridCol externalClass={styles['col-with-top-margin']} desktop={12} mobile={8}>
          <div className={styles['content-blue']}>desktop: 12</div>
        </GridCol>
      </GridRow>
      <p className={styles.title}>Сетка на 8 колонок при разрешении менее 960px</p>
      <GridRow>
        <GridCol externalClass={styles['col-with-top-margin']} mobile={1}>
          <div className={styles['content-blue']}>mobile: 1</div>
        </GridCol>
      </GridRow>
      <GridRow>
        {range(0, 8).map(number => (
          <GridCol key={number} externalClass={styles['col-with-top-margin']} mobile={1}>
            <div className={styles['content-blue']}>mobile: 1</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow>
        {range(0, 4).map(number => (
          <GridCol key={number} externalClass={styles['col-with-top-margin']} mobile={2}>
            <div className={styles['content-blue']}>mobile: 2</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow>
        {range(0, 2).map(number => (
          <GridCol key={number} externalClass={styles['col-with-top-margin']} mobile={4}>
            <div className={styles['content-blue']}>mobile: 4</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow>
        <GridCol externalClass={styles['col-with-top-margin']} mobile={8}>
          <div className={styles['content-blue']}>mobile: 8</div>
        </GridCol>
      </GridRow>
    </div>
  ));
