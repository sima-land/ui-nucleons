import React from 'react';
import { storiesOf } from '@storybook/react';
import GridCol from '../../grid-col';
import GridRow from '../';
import styles from './grid-row-demo.scss';

export const justifies = ['start', 'between', 'around', 'center', 'end'];
export const alignments = ['start', 'center', 'end', 'stretch', 'baseline'];

storiesOf('Grid/GridRow', module)
  .add('with different justify', () => (
    <div className={styles['container-with-border']}>
      {justifies.map(justify => (
        <React.Fragment key={justify}>
          <p className={styles.title}>{`Row with justify-${justify}`}</p>
          <GridRow justify={justify}>
            <GridCol desktop={3} mobile={1}><div className={styles['content-blue']}>column</div></GridCol>
            <GridCol desktop={3} mobile={1}><div className={styles['content-blue']}>column</div></GridCol>
            <GridCol desktop={3} mobile={1}><div className={styles['content-blue']}>column</div></GridCol>
          </GridRow>
        </React.Fragment>
      ))}
    </div>
  ))
  .add('with different alignItems', () => (
    <div className={styles['container-with-border']}>
      {alignments.map(alignment => (
        <React.Fragment key={alignment}>
          <p className={styles.title}>{`Row with alignItems ${alignment}`}</p>
          <GridRow alignItems={alignment} externalClass={styles['high-row']}>
            <GridCol desktop={3} mobile={3} externalClass={styles['column-background']}>
              <div className={styles['content-blue']}>
                <div>content</div>
                <div>content</div>
                <div>content</div>
              </div>
            </GridCol>
            <GridCol desktop={6} mobile={2} externalClass={styles['column-line-height']}>
              <div className={styles['content-blue']}>content</div>
            </GridCol>
            <GridCol desktop={3} mobile={3} externalClass={styles['column-background']}>
              <div className={styles['content-blue']}>
                <div>content</div>
                <div>content</div>
              </div>
            </GridCol>
          </GridRow>
        </React.Fragment>
      ))}
    </div>
  ))
  .add('with wrap param', () => (
    <div className={styles['container-with-border']}>
      <p className={styles.title}>Row without wrap param</p>
      <GridRow>
        <GridCol desktop={12} mobile={2} externalClass={styles['col-with-top-margin']}>
          <div className={styles['content-blue']}>First</div>
        </GridCol>
        <GridCol desktop={3} mobile={6} externalClass={styles['col-with-top-margin']}>
          <div className={styles['content-blue']}>Second</div>
        </GridCol>
        <GridCol desktop={9} mobile={8} externalClass={styles['col-with-top-margin']}>
          <div className={styles['content-blue']}>Third</div>
        </GridCol>
      </GridRow>
      <p className={styles.title}>Row with wrap param</p>
      <GridRow wrap>
        <GridCol desktop={12} mobile={2} externalClass={styles['col-with-top-margin']}>
          <div className={styles['content-blue']}>First</div>
        </GridCol>
        <GridCol desktop={3} mobile={6} externalClass={styles['col-with-top-margin']}>
          <div className={styles['content-blue']}>Second</div>
        </GridCol>
        <GridCol desktop={9} mobile={8} externalClass={styles['col-with-top-margin']}>
          <div className={styles['content-blue']}>Third</div>
        </GridCol>
      </GridRow>
    </div>
  ))
  .add('with withoutGutters param', () => (
    <div className={styles['container-with-border']}>
      <p className={styles.title}>Row without withoutGutters param</p>
      <GridRow>
        <GridCol desktop={3} mobile={4}><div className={styles['content-blue']}>First</div></GridCol>
        <GridCol desktop={2} mobile={1}><div className={styles['content-blue']}>Second</div></GridCol>
        <GridCol desktop={3} mobile={2}><div className={styles['content-blue']}>Third</div></GridCol>
        <GridCol desktop={4} mobile={1}><div className={styles['content-blue']}>Fourth</div></GridCol>
      </GridRow>
      <p className={styles.title}>Row with withoutGutters param</p>
      <GridRow withoutGutters>
        <GridCol desktop={3} mobile={4}><div className={styles['content-blue']}>First</div></GridCol>
        <GridCol desktop={2} mobile={1}><div className={styles['content-blue']}>Second</div></GridCol>
        <GridCol desktop={3} mobile={2}><div className={styles['content-blue']}>Third</div></GridCol>
        <GridCol desktop={4} mobile={1}><div className={styles['content-blue']}>Fourth</div></GridCol>
      </GridRow>
    </div>
  ));

