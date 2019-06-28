import React from 'react';
import { storiesOf } from '@storybook/react';
import GridCol from '../';
import GridRow from '../../grid-row';
import styles from './grid-col-demo.scss';
import range from 'lodash.range';

export const justifies = ['start', 'between', 'around', 'center', 'end'];
export const alignments = ['start', 'center', 'end'];
const marginRight = {
  marginRight: '8px',
};

storiesOf('Grid/GridCol', module)
  .add('with different columns width', () => (
    <div>
      {range(0, 11).map(number => (
        <GridRow key={number}>
          <GridCol externalClass={styles.column} width={number + 1}>
            <div>{`width-${number + 1}`}</div>
          </GridCol>
          <GridCol externalClass={styles.column} width={12 - (number + 1)}>
            <div>{`width-${12 - (number + 1)}`}</div>
          </GridCol>
        </GridRow>
      ))}
      <GridRow>
        {range(0, 12).map(number => (
          <GridCol key={number} externalClass={styles.column} width={1}><div>width-1</div></GridCol>
        ))}
      </GridRow>
      <GridRow>
        {range(0, 6).map(number => (
          <GridCol key={number} externalClass={styles.column} width={2}><div>width-2</div></GridCol>
        ))}
      </GridRow>
      <GridRow>
        {range(0, 4).map(number => (
          <GridCol key={number} externalClass={styles.column} width={3}><div>width-3</div></GridCol>
        ))}
      </GridRow>
      <GridRow>
        {range(0, 3).map(number => (
          <GridCol key={number} externalClass={styles.column} width={4}><div>width-4</div></GridCol>
        ))}
      </GridRow>
      <GridRow>
        <GridCol externalClass={styles.column} width={12}><div>width-12</div></GridCol>
      </GridRow>
    </div>
  ))
  .add('Column with different justify', () => (
    <div>
      {justifies.map(justify => (
        <React.Fragment key={justify}>
          <GridRow justify='center'>
            <GridCol externalClass={styles.column} width={8} justify={justify}>
              <div style={marginRight} className={styles.content}>{`justify-${justify}`}</div>
              <div style={marginRight} className={styles.content}>{`justify-${justify}`}</div>
              <div className={styles.content}>{`justify-${justify}`}</div>
            </GridCol>
          </GridRow>
        </React.Fragment>
      ))}
    </div>
  ))
  .add('Column with different alignments', () => (
    <div>
      {alignments.map(alignment => (
        <React.Fragment key={alignment}>
          <GridRow justify='center'>
            <GridCol externalClass={styles['high-column']} justify='center' width={3} alignItems={alignment} wrap>
              <div className={styles.content}>{`items-${alignment}`}</div>
              <div className={styles.content}>{`items-${alignment}`}</div>
              <div className={styles.content}>{`items-${alignment}`}</div>
            </GridCol>
          </GridRow>
        </React.Fragment>
      ))}
    </div>
  ))
  .add('with different gutters', () => (
    <div>
      {['zero', 's', 'm', 'l'].map(gutter => (
        <div key={gutter}>
          <p className={styles.title}>{`Columns with gutter-${gutter}`}</p>
          <GridRow justify='center' gutter={gutter}>
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
            <GridCol externalClass={styles.column} justify='center' gutter={gutter} />
          </GridRow>
        </div>
      ))}
    </div>
  ));

