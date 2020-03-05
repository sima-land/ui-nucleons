Layer - это обертка над `React.createPortal`.
При монтировании она добавляет в конец body новый div и выводит туда все свое содержимое.

### Важно
Получить ссылку на дочерний элемент для Layer подобным образом нельзя:

```jsx static
const someRef = React.useRef();

<Layer>
  <div ref={someRef}>Test</div>
</Layer>
```

Это связано с тем, что содержимое Layer монтируется только после того, как новый div будет добавлен.

Как вариант, можно использовать функцию для получения ref и обновления состояния для повторного render'а.

```jsx static
const [element, setElement] = React.useState();

<Layer>
  <div ref={setElement}>Test</div>
</Layer>
```

### Использование

```jsx static
const [isModalOpen, toggleModal] = useState();

<button size='small' onClick={() => toggleModal(true)}>Open modal</button>

{isModalOpen && (
  <Layer>
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, .2)',
      }}
    >
      <div style={{ width: 320, height: 240, background: '#fff', padding: 16 }}>
        <h2>Test modal </h2>
        <p>its rendered in new div, check DOM in dev tools...</p>
        <button size='small' onClick={() => toggleModal(false)}>Close modal</button>
      </div>
    </div>
  </Layer>
)}
```
