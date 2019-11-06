import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../index';
import Icon from '../../icon/';
import searchIcon from '../../icons/search.svg';
import crossIcon from '../../icons/cross.svg';
import classes from './custom-styles.scss';

storiesOf('Input', module)
  .add('Variants', () => (
    <Fragment>
      <h3>Just text input with placeholder</h3>
      <div>
        <h4>Regular</h4>
        <Input
          autoFocus
          placeholder='Enter your name'
        />
        <h4>Failed</h4>
        <Input
          placeholder='Enter your name'
          failed
        />
      </div>

      <h3>With start icon</h3>
      <div>
        <Input
          startAdornment={(
            <Icon
              icon={searchIcon}
              color='gray'
              size={19}
            />
          )}
          placeholder='Type to search'
        />
      </div>

      <h3>With start & end icon</h3>
      <div>
        <Input
          startAdornment={(
            <Icon
              icon={searchIcon}
              color='gray'
              size={19}
            />
          )}
          endAdornment={(
            <Icon
              icon={crossIcon}
              color='gray'
              size={10}
            />
          )}
          placeholder='Enter user name'
        />
      </div>

      <h3>With end adornment</h3>
      <div>
        <Input
          type='number'
          endAdornment='Kg'
          placeholder='Your weight'
        />
      </div>
    </Fragment>
  ))
  .add('Custom styles', () => (
    <Fragment>
      <h3>With custom styles</h3>
      <div>
        <Input
          classes={{
            permanent: classes['custom-input'],
            focused: classes.focused,
            withStartAdornment: classes['custom-with-start-adornment'],
          }}
          type='text'
          placeholder='Login or email'
          startAdornment='👤'
        />
        <div style={{ marginTop: 10 }} />
        <Input
          classes={{
            permanent: classes['custom-input'],
            focused: classes.focused,
            withStartAdornment: classes['custom-with-start-adornment'],
          }}
          type='password'
          placeholder='Password'
          startAdornment='🔒'
        />
      </div>
    </Fragment>
  ));

