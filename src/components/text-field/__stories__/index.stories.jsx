import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '../index';
import Icon from '../../icon';
import { BaseInput } from '../base-input';

const stateProps = {
  default: {},
  disabled: { disabled: true },
  failed: { failed: true },
  focused: { focused: true },
};

const desktopSizes = ['xs', 's', 'l'];

const longValue = [
  'Lorem ipsum dolor sit amet consectetur,',
  'adipisicing elit. Distinctio maxime at tempora',
  'adipisci placeat odio omnis laudantium cumque.',
  'Omnis, accusamus?',
].join(' \n');

const testValues = ['test', 123, '', [], null, undefined, false, true, {}];

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
  ))
  .add('Multiline', () => (
    <Fragment>
      <h2>Desktop</h2>
      <TextField
        defaultValue={longValue}
        multiline
        label='Label'
        caption='Caption'
        placeholder='Placeholder'
      />
      <div style={{ height: 32 }} />
      <TextField
        defaultValue={longValue}
        multiline
        caption='Caption'
        placeholder='Placeholder'
      />

      <h2>Mobile</h2>
      <TextField
        defaultValue={longValue}
        multiline
        label='Label'
        caption='Caption'
        placeholder='Placeholder'
        variant='mobile'
      />
      <div style={{ height: 32 }} />
      <TextField
        defaultValue={longValue}
        multiline
        caption='Caption'
        placeholder='Placeholder'
        variant='mobile'
      />
    </Fragment>
  ))
  .add('Different values', () => testValues.map((testValue, index) => (
    <Fragment key={index}>
      <h3>Value: {String(testValue) || JSON.stringify(testValue)}</h3>
      <TextField
        label='Label'
        defaultValue={testValue}
      />
    </Fragment>
  )))
  .add('Rounds', () => (
    <Fragment>
      <h2>Скругления</h2>
      <p>Их можно задавать только для варианта <code>desktop</code>:</p>
      {[
        'none',
        'all',
        'top',
        'left',
        'bottom',
        'right',
        'bottomLeft',
        'bottomRight',
        'topLeft',
        'topRight',
      ].map(variant => (
        <div style={{ marginBottom: 32 }} key={variant}>
          <TextField
            label={`rounds="${variant}"`}
            rounds={variant}
          />
        </div>
      ))}
    </Fragment>
  ))
  .add('service: Value prop change', () => {
    const [value, setValue] = useState('');

    return (
      <Fragment>
        <button onClick={() => setValue('Some text')}>Fill value</button>
        <button onClick={() => setValue('')}>Clear value</button>

        <div style={{ height: 32 }} />

        <TextField label='Test label' value={value} onChange={event => setValue(event.target.value)} />
      </Fragment>
    );
  })
  .add('service: BaseInput', () => (
    <Fragment>
      <div style={{ border: '1px solid #000', display: 'flex', width: 200 }}>
        <BaseInput defaultValue='Text' />
      </div>

      <div style={{ height: 32 }} />

      <div style={{ border: '1px solid #000', display: 'flex', width: 200 }}>
        <BaseInput defaultValue='Text' multiline />
      </div>
    </Fragment>
  ));
