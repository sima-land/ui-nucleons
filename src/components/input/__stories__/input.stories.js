import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../index';
import Icon from '../../icon/';
import searchIcon from '../../icons/search.svg';
import crossIcon from '../../icons/cross.svg';
import classnames from 'classnames';
import classes from './custom-styles.scss';
import withInputMask from '../../hoc/with-input-mask';
import { SmallSize } from '../presets/small';
import { MediumSize } from '../presets/medium';

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
  ))
  .add('Extended styles', () => (
    <Fragment>
      <h3>With custom styles</h3>
      <div>
        <Input
          computeClasses={defaults => ({
            ...defaults,
            permanent: classnames(defaults.permanent, classes['extended-permanent']),
            startAdornment: classnames(defaults.startAdornment, classes['custom-start-adornment']),
          })}
          type='text'
          placeholder='Login or email'
          startAdornment='👤'
        />
        <div style={{ marginTop: 10 }} />
        <Input
          computeClasses={defaults => ({
            ...defaults,
            permanent: classnames(defaults.permanent, classes['extended-permanent']),
            startAdornment: classnames(defaults.startAdornment, classes['custom-start-adornment']),
          })}
          type='password'
          placeholder='Password'
          startAdornment='🔒'
        />
      </div>
    </Fragment>
  ))
  .add('With mask', () => {
    const MaskedPhoneInput = withInputMask(Input, '+_ (___) ___-__-__');
    const MaskedDateInput = withInputMask(Input, '__/ __ / ____', /[0-9_]/g);
    const MaskedNameInput = withInputMask(Input, '______________', /[A-Za-z_]/g);
    return (
      <Fragment>
        <h3>Phone (numbers) mask</h3>
        <div>
          <MaskedPhoneInput
            value='7'
          />
        </div>
        <h3>Date (numbers) mask</h3>
        <div>
          <MaskedDateInput
            value='__ __ 2019'
          />
        </div>
        <h3>String mask</h3>
        <div>
          <MaskedNameInput
            value=''
          />
        </div>
      </Fragment>
    );
  })
  .add('preset: small size', () => (
    <Fragment>
      <h3>Just input</h3>
      <Input {...SmallSize()} defaultValue='Hello, World!' />

      <h3>Input with start adornment</h3>
      <Input
        {...SmallSize()}
        defaultValue='Hello, World!'
        startAdornment={(
          <Icon icon={searchIcon} size={16} style={{ padding: 8 }} />
        )}
      />

      <h3>Input with end adornment</h3>
      <Input
        {...SmallSize()}
        defaultValue='Hello, World!'
        endAdornment={(
          <Icon icon={crossIcon} size={10} style={{ padding: 8 }} color='gray38' />
        )}
      />

      <h3>Input with adornments</h3>
      <Input
        {...SmallSize()}
        defaultValue='Hello, World!'
        startAdornment={(
          <Icon icon={searchIcon} size={16} style={{ padding: 8 }} />
        )}
        endAdornment={(
          <Icon icon={crossIcon} size={10} style={{ padding: 8 }} color='gray38' />
        )}
      />
    </Fragment>
  ))
  .add('preset: medium size', () => (
    <Fragment>
      <h3>Just input</h3>
      <Input {...MediumSize()} defaultValue='Hello, World!' />

      <h3>Input with start adornment</h3>
      <Input
        {...MediumSize()}
        defaultValue='Hello, World!'
        startAdornment={(
          <Icon icon={searchIcon} size={16} style={{ padding: 16 }} />
        )}
      />

      <h3>Input with end adornment</h3>
      <Input
        {...MediumSize()}
        defaultValue='Hello, World!'
        endAdornment={(
          <Icon icon={crossIcon} size={10} style={{ padding: 16 }} color='gray38' />
        )}
      />

      <h3>Input with adornments</h3>
      <Input
        {...MediumSize()}
        defaultValue='Hello, World!'
        startAdornment={(
          <Icon icon={searchIcon} size={16} style={{ padding: 16 }} />
        )}
        endAdornment={(
          <Icon icon={crossIcon} size={10} style={{ padding: 16 }} color='gray38' />
        )}
      />
    </Fragment>
  ));
