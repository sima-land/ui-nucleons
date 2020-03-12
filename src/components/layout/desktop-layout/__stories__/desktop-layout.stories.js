import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styles from '../../layout/__stories__/layout-demo.scss';
import DesktopLayout from '../';

storiesOf('DesktopLayout', module)
  .add('with content', () => (
    <Fragment>
      <DesktopLayout>
        <div className={styles['content-green']}>
          Layout with desktop settings
        </div>
      </DesktopLayout>
    </Fragment>
  ));
