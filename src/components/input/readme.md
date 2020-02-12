Возможные состояния
```jsx
import Icon from '../icon';
import icons from '../icons/';
import withInputMask from '../hoc/with-input-mask';

<React.Fragment>
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
          icon={icons.search}
          color='gray38'
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
          icon={icons.search}
          color='gray38'
          size={19}
        />
      )}
      endAdornment={(
        <Icon
          icon={icons.cross}
          color='gray38'
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

  {MaskedPhoneInput = withInputMask(Input, '+_ (___) ___-__-__')}
  <h3>With phone (numbers) mask</h3>
  <div>
    <MaskedPhoneInput
      value='7'
    />
  </div>
</React.Fragment>
```
