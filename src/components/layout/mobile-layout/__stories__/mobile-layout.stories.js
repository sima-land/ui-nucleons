import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styles from '../../layout/__stories__/layout-demo.scss';
import MobileLayout from '../';

storiesOf('MobileLayout', module)
  .add('with content', () => (
    <Fragment>
      <MobileLayout>
        <div className={styles['content-green']}>
          Layout with mobile settings
        </div>
      </MobileLayout>
    </Fragment>
  ));
