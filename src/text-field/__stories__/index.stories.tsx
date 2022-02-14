import React, { useState } from 'react';
import { TextField } from '..';
import RightSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/right.js';
import { COLORS } from '../../colors';
import { Button } from '../../button';

const baseProps = { style: { width: '100%' } };

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

const testValues = ['test', 123, '', null, undefined] as const;

export default {
  title: 'common/TextField',
  component: TextField,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <h2>Desktop</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {Object.entries(stateProps).map(([stateName, props]) => (
        <div style={{ flexGrow: 1, marginRight: 16 }} key={stateName}>
          <h4 style={{ textTransform: 'capitalize' }}>{stateName}</h4>
          {desktopSizes.map(sizeName => (
            <div style={{ marginTop: 24 }} key={sizeName}>
              <h5 style={{ textTransform: 'uppercase' }}>Size: {sizeName}</h5>
              <TextField
                {...baseProps}
                {...props}
                label='Label'
                placeholder='Placeholder'
                size={sizeName as any}
                defaultValue='Text'
                variant='desktop'
                caption='Caption'
                endAdornment={<RightSVG fill={COLORS.get('gray24')} />}
              />
              {sizeName === 'l' && (
                <>
                  <div style={{ height: 32 }} />
                  <TextField
                    {...baseProps}
                    {...props}
                    size={sizeName}
                    placeholder='Placeholder'
                    defaultValue='Text'
                    variant='desktop'
                    caption='Caption'
                    endAdornment={<RightSVG fill={COLORS.get('gray24')} />}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>

    <h2 style={{ marginTop: 32 }}>Mobile</h2>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 32,
      }}
    >
      {Object.entries(stateProps).map(([stateName, props]) => (
        <div style={{ flexGrow: 1, marginRight: 16 }} key={stateName}>
          <h4 style={{ textTransform: 'capitalize' }}>{stateName}</h4>
          <TextField
            {...baseProps}
            {...props}
            label='Label'
            placeholder='Placeholder'
            defaultValue='Text'
            variant='mobile'
            caption='Caption'
            endAdornment={<RightSVG fill={COLORS.get('gray24')} />}
          />
          <div style={{ height: 32 }} />
          <TextField
            {...baseProps}
            {...props}
            placeholder='Placeholder'
            defaultValue='Text'
            variant='mobile'
            caption='Caption'
            endAdornment={<RightSVG fill={COLORS.get('gray24')} />}
          />
        </div>
      ))}
    </div>
  </>
);

export const Multiline = () => (
  <>
    <h2>Desktop</h2>
    <TextField
      {...baseProps}
      defaultValue={longValue}
      multiline
      label='Label'
      caption='Caption'
      placeholder='Placeholder'
      baseInputProps={{ rows: 8 }}
    />
    <div style={{ height: 32 }} />
    <TextField
      {...baseProps}
      defaultValue={longValue}
      multiline
      caption='Caption'
      placeholder='Placeholder'
    />

    <h2>Mobile</h2>
    <TextField
      {...baseProps}
      defaultValue={longValue}
      multiline
      label='Label'
      caption='Caption'
      placeholder='Placeholder'
      variant='mobile'
    />
    <div style={{ height: 32 }} />
    <TextField
      {...baseProps}
      defaultValue={longValue}
      multiline
      caption='Caption'
      placeholder='Placeholder'
      variant='mobile'
    />
  </>
);

export const DifferentValues = () => (
  <>
    {testValues.map((testValue, index) => (
      <div key={index} style={{ marginTop: 32 }}>
        <h3>
          Значение <code>value</code>: {String(testValue) || JSON.stringify(testValue)}
        </h3>
        <TextField {...baseProps} label='Label' defaultValue={testValue as any} />
      </div>
    ))}
  </>
);

export const Rounds = () => (
  <>
    <h2>Скругления</h2>
    <p>
      Их можно задавать только для варианта <code>desktop</code>:
    </p>
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
        <TextField {...baseProps} label={`rounds="${variant}"`} rounds={variant as any} />
      </div>
    ))}
  </>
);

export const RestPlaceholder = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <h3>Введите 10 цифр</h3>
      <TextField
        value={value}
        label='Label'
        onChange={(e: any) => setValue(e.target.value.slice(0, 10))}
        restPlaceholder={'9'.repeat(10).slice(value.length)}
        style={{ width: 240 }}
      />
      <div style={{ height: 24 }} />
      <TextField
        variant='mobile'
        label='Label'
        value={value}
        onChange={(e: any) => setValue(e.target.value.slice(0, 10))}
        restPlaceholder={'9'.repeat(10).slice(value.length)}
        style={{ width: 240 }}
      />
    </>
  );
};

export const ValuePropChange = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <p>Label должен подниматься и опускаться в зависимости от того введено значение или нет</p>

      <p>
        <button onClick={() => setValue('Some text')}>Заполнить</button>{' '}
        <button onClick={() => setValue('')}>Очистить</button>
      </p>

      <TextField
        label='Test label'
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        style={{ width: 240 }}
      />
    </>
  );
};

ValuePropChange.storyName = 'service: Value prop change';

export const ValuePropChangeMultiline = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <p>Label должен подниматься и опускаться в зависимости от того введено значение или нет</p>

      <p>
        <button onClick={() => setValue([longValue, longValue].join('\n'))}>Заполнить</button>{' '}
        <button onClick={() => setValue('')}>Очистить</button>
      </p>

      <TextField
        multiline
        label='Test label'
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        style={{ width: 240 }}
      />
    </>
  );
};

ValuePropChangeMultiline.storyName = 'service: Multiline value prop change';

export const Autofill = () => {
  const styles: React.CSSProperties = {
    display: 'block',
    width: '240px',
    marginBottom: '16px',
  };

  const [shown, toggle] = useState<boolean>();

  return !shown ? (
    <Button onClick={() => toggle(true)}>Открыть форму</Button>
  ) : (
    <form
      action='/login'
      method='POST'
      onSubmit={e => {
        e.preventDefault();
        window.location.assign('');
      }}
    >
      <TextField
        label='Email'
        defaultValue=''
        style={styles}
        name='email'
        type='email'
        autoComplete='email'
      />

      <TextField
        label='Password'
        defaultValue=''
        style={styles}
        name='password'
        type='password'
        autoComplete='password'
      />

      <Button size='s' type='submit'>
        Submit
      </Button>
    </form>
  );
};

Autofill.storyName = 'service: Autofill';
