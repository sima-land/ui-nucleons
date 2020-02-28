import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '../index';
import Icon from '../../icon';

const stateProps = {
  default: {},
  disabled: { disabled: true },
  failed: { failed: true },
};

const desktopSizes = ['xs', 's', 'l'];

storiesOf('TextField', module)
  .add('Default', () => (
    <Fragment>
      <h2>Desktop</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {Object.entries(stateProps).map(([stateName, props]) => (
          <div style={{ width: '30%' }} key={stateName}>
            <h4 style={{ textTransform: 'capitalize' }}>{stateName}</h4>
            {desktopSizes.map(sizeName => (
              <div style={{ marginTop: 24 }} key={sizeName}>
                <h5 style={{ textTransform: 'uppercase' }}>Size: {sizeName}</h5>
                <TextField
                  {...props}
                  label='Label'
                  placeholder='Placeholder'
                  size={sizeName}
                  defaultValue='Text'
                  variant='desktop'
                  caption='Caption'
                  endAdornment={(
                    <Icon
                      size={16}
                    />
                  )}
                />
                {sizeName === 'l' && (
                  <Fragment>
                    <div style={{ height: 32 }} />
                    <TextField
                      {...props}
                      size={sizeName}
                      placeholder='Placeholder'
                      defaultValue='Text'
                      variant='desktop'
                      caption='Caption'
                      endAdornment={(
                        <Icon
                          size={16}
                        />
                      )}
                    />
                  </Fragment>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 32 }}>Mobile</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
        {Object.entries(stateProps).map(([stateName, props]) => (
          <div style={{ width: '30%' }} key={stateName}>
            <h4 style={{ textTransform: 'capitalize' }}>{stateName}</h4>
            <TextField
              {...props}
              label='Label'
              placeholder='Placeholder'
              defaultValue='Text'
              variant='mobile'
              caption='Caption'
              endAdornment={(
                <Icon
                  size={16}
                />
              )}
            />
            <div style={{ height: 32 }} />
            <TextField
              {...props}
              placeholder='Placeholder'
              defaultValue='Text'
              variant='mobile'
              caption='Caption'
              endAdornment={(
                <Icon
                  size={16}
                />
              )}
            />
          </div>
        ))}
      </div>
    </Fragment>
  ));
