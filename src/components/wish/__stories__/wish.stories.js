import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Wish from '../../wish';

/**
 * Возвращает компонент избранное.
 * @param {boolean} isChecked Значение флага избранное без текста.
 * @param {boolean} isCheckedText Значение флага избранное с текстом.
 * @return {ReactElement} Компонент.
 */
class TestComponent extends React.Component {
  state = {
    isChecked: false,
    isCheckedDisplayText: false,
  };

  /**
   * Обработчик нажатия на компонент без текста.
   */
  onClick () {
    this.setState({ isChecked: this.state.isChecked !== true });
  }

  /**
   * Обработчик нажатия на компонент с текстом.
   */
  onClickDisplayText () {
    this.setState({ isCheckedDisplayText: this.state.isCheckedDisplayText !== true });
  }

  /**
   * Отрисовка компонента.
   * @return {ReactElement} Компонент.
   */
  render () {
    const { isChecked, isCheckedDisplayText } = this.state;

    return (
      <div style={{ position: 'relative', width: '200px' }}>
        <h4>Избранное с текстом</h4>
        <Wish
          isChecked={isCheckedDisplayText}
          size={32}
          isDisplayText
          onClick={() => this.onClickDisplayText()}
        />
        <h4>Избранное без текста</h4>
        <Wish
          isChecked={isChecked}
          size={32}
          onClick={() => this.onClick()}
        />
      </div>
    );
  }
}

storiesOf('Wish', module)
  .add('active wish', () => (
    <div style={{ position: 'relative', width: '200px' }}>
      <h4>Избранное с текстом</h4>
      <Wish isChecked size={32} isDisplayText />
      <h4>Избранное без текста</h4>
      <Wish isChecked size={32} />
    </div>
  ))
  .add('not active wish', () => (
    <div style={{ position: 'relative', width: '200px' }}>
      <h4>Избранное с текстом</h4>
      <Wish size={32} isDisplayText />
      <h4>Избранное без текста</h4>
      <Wish size={32} />
    </div>
  ))
  .add('principle operation wish', () => (
    <Fragment>
      <TestComponent />
    </Fragment>
  ));
