import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Amount from '../amount';

/**
 * Возвращает компонент поля количества товара.
 * @param {string} value Значение импута.
 * @return {ReactElement} Компонент.
 */
class TestComponent extends React.Component {
  state = {
    value: '',
  };

  /**
   * Обработчик для уменьшения значения.
   */
  onSubtract () {
    this.setState({ value: Number(this.state.value) - 1 });
  }

  /**
   * Обработчик для увеличения значения.
   */
  onAdd () {
    this.setState({ value: Number(this.state.value) + 1 });
  }

  /**
   * Обработчик для сброса значения.
   */
  onClear () {
    this.setState({ value: '' });
  }

  /**
   * Отрисовка компонента.
   * @return {ReactElement} Компонент.
   */
  render () {
    const { value } = this.state;

    return (
      <div style={{ position: 'relative', width: '130px' }}>
        <Amount
          value={value}
          onSubtract={() => this.onSubtract()}
          onAdd={() => this.onAdd()}
          onClear={() => this.onClear()}
          onChange={() => {}}
        />
      </div>
    );
  }
}

storiesOf('Amount', module)
  .add('without withControls', () => (
    <Amount withControls={false} />
  ))
  .add('with withControls', () => (
    <Fragment>
      <TestComponent />
    </Fragment>
  ));
