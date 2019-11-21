import React, { useRef, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import withInViewportObserver from '../';
import PropTypes from 'prop-types';

/**
 * Тестовый компонент.
 * @param {Object} props Свойства компонента.
 * @param {Function} props.addObserve Функция подписки на Intersection Observer.
 * @return {ReactElement} Компонент.
 */
const PureSomeComponent = ({
  addObserve,
}) => {
  const divRef = useRef();

  useEffect(() => {
    addObserve(divRef.current, () => {
      // eslint-disable-next-line no-console
      console.log('Элемент появился в зоне видимости');
    });
  }, [divRef]);

  return (
    <div>
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

PureSomeComponent.propTypes = {
  addObserve: PropTypes.func,
};

const SomeComponent = withInViewportObserver(PureSomeComponent);

storiesOf('withInViewportObserver', module)
  .add('add observer', () => (
    <div>
      <SomeComponent />
    </div>
  ));

