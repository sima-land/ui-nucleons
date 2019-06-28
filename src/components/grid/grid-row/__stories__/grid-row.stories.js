import React from 'react';
import { storiesOf } from '@storybook/react';
import GridCol from '../../grid-col';
import GridRow from '../index';
import styles from './grid-row-demo.scss';

export const justifies = ['start', 'between', 'around', 'center', 'end'];

storiesOf('Grid/GridRow', module)
  .add('Row with different justify', () => (
    <div>
      {justifies.map(alignment => (
        <React.Fragment key={alignment}>
          <p className={styles.title}>{`Row with justify-${alignment}`}</p>
          <GridRow externalClass={styles.row} justify={alignment}>
            <GridCol externalClass={styles.column} width={3}><div>column</div></GridCol>
            <GridCol externalClass={styles.column} width={4}><div>column</div></GridCol>
            <GridCol externalClass={styles.column} width={3}><div>column</div></GridCol>
          </GridRow>
        </React.Fragment>
      ))}
    </div>
  ))
  .add('with different gutters', () => (
    <div>
      {['zero', 's', 'm', 'l'].map(gutter => (
        <div key={gutter}>
          <p className={styles.title}>{`With gutter-${gutter}`}</p>
          <GridRow externalClass={styles.row} justify='center' gutter={gutter}>
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
          </GridRow>
          <GridRow externalClass={styles.row} justify='center' gutter={gutter}>
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
          </GridRow>
          <GridRow externalClass={styles.row} justify='center' gutter={gutter}>
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
          </GridRow>
        </div>
      ))}
    </div>
  ));

