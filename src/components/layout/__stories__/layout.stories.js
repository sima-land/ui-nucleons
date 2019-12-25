import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styles from './layout-demo.scss';
import Layout from '../';

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
      <Layout
        mdPadding='lg'
        xlMaxWidth='lg'
        lgMaxWidth='md'
      >
        <div className={styles['content-green']}>
          Layout with desktop settings
        </div>
      </Layout>
      <Layout
        xxlMaxWidth='sm'
        xsMaxWidth='xs'
        xxsPadding='md'
        xxxsPadding='sm'
      >
        <div className={styles['content-green']}>
          Layout with mobile settings
        </div>
      </Layout>
    </Fragment>
  ));
