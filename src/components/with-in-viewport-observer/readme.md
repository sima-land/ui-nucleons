Правильное название этого компонента высшего порядка - withInViewportObserver

Здесь он назван в PascalCase потому что styleguidist иначе не умеет.

```
const PureSomeComponent = ({
  addToObserve,
}) => {
  const divRef = React.useRef();

  React.useEffect(() => {
    addToObserve(divRef.current, () => {
      console.log('Элемент появился в зоне видимости');
    });
  }, [divRef]);

  return (
    <div style={{height: '300px', overflow: 'auto'}}>
      <div>
        Если проскроллить вниз, то в зоне видимости появится элемент подписанный
        на Intersection Observer.
      </div>

      <div
        ref={divRef}
        style={{
          marginTop: '120vh',
          border: '1px dashed rgba(0, 0, 0, .15)',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        Этот блок подписан на Intersection Observer.
      </div>
    </div>
  );
};

// В проектах нужно использовать withInViewportObserver
const SomeComponent = WithInViewportObserver(
    PureSomeComponent,
    {
        rootMargin: '50px 0px 50px 0px',
    },
    'addToObserve'
);

<SomeComponent />
```
