import React, { useRef, useEffect } from 'react';
import withInViewportObserver from '..';

const PureSomeComponent: React.FC<{ addObserve: any }> = ({ addObserve }) => {
  const divRef = useRef();

  useEffect(() => {
    addObserve(divRef.current, () => {
      // eslint-disable-next-line no-console
      console.log('Элемент появился в зоне видимости');
    });
  }, [divRef]);

  return (
    <div className='component-wrapper'>
      <div>
        Если проскроллить вниз, то в зоне видимости появится элемент подписанный на Intersection
        Observer.
      </div>

      <div
        ref={divRef as any}
        style={{
          marginTop: '150vh',
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

const SomeComponent = withInViewportObserver(PureSomeComponent);

const SomeComponentWithCustomOptions = withInViewportObserver(PureSomeComponent, {
  rootMargin: '150px 0px 150px 0px',
});

export default {
  title: 'deprecated/withInViewportObserver',
  component: withInViewportObserver,
  parameters: {
    layout: 'padded',
  },
};

export const AddObserver = () => (
  <div>
    <SomeComponent />
  </div>
);

export const AddObserverWithOptions = () => (
  <div>
    <SomeComponentWithCustomOptions />
  </div>
);
