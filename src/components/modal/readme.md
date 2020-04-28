Базовый вид:
```jsx
import Button from '../button';
import '!style-loader!css-loader!sass-loader!./__stories__/modal-storybook.scss';

const [isModalOpen, toggleModal] = React.useState(false);
const showModal = () => toggleModal(true);
const onClose = () => toggleModal(false);

<div style={{ width: '400px', position: 'relative' }}>
  <Button onClick={showModal}>
      Click me
  </Button>
  {isModalOpen && (
    <Modal onClose={onClose} customClasses={{ overlay: 'modal-center' }}>
      <p style={{ padding: '20px' }}>This is base modal appearance</p>
    </Modal>
  )}
</div>
```

Вид с закрывающей кнопкой:
```jsx
import Button from '../button';
import '!style-loader!css-loader!sass-loader!./__stories__/modal-storybook.scss';

const [isModalOpen, toggleModal] = React.useState(false);
const showModal = () => toggleModal(true);
const onClose = () => toggleModal(false);

<div style={{ width: '400px', position: 'relative' }}>
  <Button onClick={showModal}>
      Click me
  </Button>
  {isModalOpen && (
    <Modal
      onClose={onClose}
      customClasses={{ overlay: 'modal-center' }}
      closeButtonSize={8}
    >
      <p style={{ padding: '20px' }}>This is modal with close button</p>
    </Modal>
  )}
</div>
```

Расширенная версия:
```jsx
import Button from '../button';
import Clean from '../clean-buttons';
import '!style-loader!css-loader!sass-loader!./__stories__/modal-storybook.scss';

const [isModalOpen, toggleModal] = React.useState(false);
const showModal = () => toggleModal(true);
const onClose = () => toggleModal(false);

<div style={{ width: 400, position: 'relative' }}>
  <Button onClick={showModal}>
    Open modal
  </Button>

  {isModalOpen && (
    <Modal
      extended
      title='Extended modal'
      withDivideTopBar
      withCloseButton
      topBarProps={{ size: 's' }}
      onClose={onClose}
      footer={(
        <Clean.Group size='s'>
          <Clean.Button>Button</Clean.Button>
          <Clean.Button>Another button</Clean.Button>
        </Clean.Group>
      )}
    >
      <p style={{ width: 300, height: 100, padding: 20 }}>
        This is content of modal window.
      </p>
    </Modal>
  )}
</div>
```
