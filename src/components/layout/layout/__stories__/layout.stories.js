import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styles from './layout-demo.scss';
import Layout from '../index';

storiesOf('Layout', module)
  .add('with content', () => (
    <Fragment>
      <Layout containerProps={{ className: styles['content-green'] }}>
        Default Layout
      </Layout>
      <Layout
        mdPadding='lg'
        smPadding='sm'
        xxsPadding='md'
        xxxsPadding='sm'
        xlMaxWidth='lg'
        lgMaxWidth='md'
        smMaxWidth='sm'
        xsMaxWidth='xs'
      >
        <div className={styles['content-green']}>
          Layout with desktop and mobile settings
        </div>
      </Layout>
    </Fragment>
  ));
