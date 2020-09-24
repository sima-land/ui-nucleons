import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Attach from '../index';
import Link from '../../link/deprecated';
import customStyles from './custom-styles.scss';

storiesOf('Attach', module)
  .add('Variants', () => (
    <Fragment>
      <h3>Just attach field</h3>
      <Attach
        onSelect={files => alert(`You add ${files.length} file(s)`)}
      />

      <h3>With custom label</h3>
      <Attach
        renderLabel={({ triggerInput }) => (
          <span>
            Drop files here
            {' '}
            <label>
              <Link pseudo onClick={triggerInput}>or click to select...</Link>
            </label>
          </span>
        )}
        onSelect={files => alert(`You add ${files.length} file(s)`)}
      />

      <h3>With custom start adornment</h3>
      <Attach
        startAdornment={(
          <span
            style={{ fontSize: 16, marginRight: 8 }}
            children='📂'
          />
        )}
        onSelect={files => alert(`You add ${files.length} file(s)`)}
      />

      <h3>With custom styles</h3>
      <Attach
        startAdornment={null}
        renderLabel={({ triggerInput }) => (
          <span>
            Drop files or
            {' '}
            <b
              onClick={triggerInput}
              style={{ cursor: 'pointer', color: 'lightskyblue' }}
              children='click here'
            />
            {' '}
            to select
          </span>
        )}
        classes={{
          permanent: customStyles['custom-permanent'],
          dragActive: customStyles['custom-drag-active'],
          failed: customStyles['custom-failed'],
        }}
        onSelect={files => alert(`You add ${files.length} file(s)`)}
      />
    </Fragment>
  ));
