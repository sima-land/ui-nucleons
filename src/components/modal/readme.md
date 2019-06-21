Базовый вид:
```jsx 
    import Button from '../button';
    import '!style-loader!css-loader!sass-loader!./__stories__/modal-storybook.scss';
    const initialState = {
        isOpen: false
    },
    showModal = () => setState({ isOpen: true }),
    onClose = () => setState({ isOpen: false });
    
    <div style={{ width: '400px', position: 'relative' }}>
        <Button onClick={showModal}>
              Click me
        </Button>
        {state.isOpen && (
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
    const initialState = {
        isOpen: false
    }
    const showModal = () => setState({ isOpen: true }),
    onClose = () => setState({ isOpen: false });
    
    <div style={{ width: '400px', position: 'relative' }}>
        <Button onClick={showModal}>
              Click me
        </Button>
        {state.isOpen && (
            <Modal
                onClose={onClose}
                customClasses={{ overlay: 'modal-center' }}
                withCloseButton
            >
                <p style={{ padding: '20px' }}>This is modal with close button</p>
            </Modal>
        )}
    </div>
```
