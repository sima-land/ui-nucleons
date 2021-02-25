```jsx
import RightSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/right.js';

const stateProps = {
  default: {},
  disabled: { disabled: true },
  failed: { failed: true },
};

const desktopSizes = ['xs', 's', 'l'];

<div style={{ padding: 16, background: '#fff' }}>
  <h2>Desktop</h2>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {Object.entries(stateProps).map(([stateName, props]) => (
      <div style={{ width: '30%', padding: 16 }} key={stateName}>
        <h4 style={{ textTransform: 'capitalize' }}>{stateName}</h4>
        {desktopSizes.map(sizeName => (
          <div style={{ marginTop: 24 }} key={sizeName}>
            <h5 style={{ textTransform: 'uppercase' }}>Size: {sizeName}</h5>
            <TextField
              style={{ width: '100%' }}
              {...props}
              label='Label'
              placeholder='Placeholder'
              size={sizeName}
              variant='desktop'
              caption='Caption'
              endAdornment={(
                <RightSVG fill='#ccc' />
              )}
            />
            {sizeName === 'l' && (
              <React.Fragment>
                <div style={{ height: 32 }} />
                <TextField
                  style={{ width: '100%' }}
                  {...props}
                  size={sizeName}
                  placeholder='Placeholder'
                  defaultValue='Text'
                  variant='desktop'
                  caption='Caption'
                  endAdornment={(
                    <RightSVG fill='#ccc' />
                  )}
                />
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>

  <h2 style={{ marginTop: 32 }}>Mobile</h2>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
    {Object.entries(stateProps).map(([stateName, props]) => (
      <div style={{ width: '30%', padding: 16 }} key={stateName}>
        <h4 style={{ textTransform: 'capitalize' }}>{stateName}</h4>
        <TextField
          style={{ width: '100%' }}
          {...props}
          label='Label'
          placeholder='Placeholder'
          variant='mobile'
          caption='Caption'
          endAdornment={(
            <RightSVG fill='#ccc' />
          )}
        />
        <div style={{ height: 32 }} />
        <TextField
          style={{ width: '100%' }}
          {...props}
          placeholder='Placeholder'
          defaultValue='Text'
          variant='mobile'
          caption='Caption'
          endAdornment={(
            <RightSVG fill='#ccc' />
          )}
        />
      </div>
    ))}
  </div>
</div>
```
