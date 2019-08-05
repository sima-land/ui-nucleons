import React, { Component, createRef } from 'react';
import PositioningPopup from '../positioning-popup';
import Button from '../../button';
import Type from 'prop-types';

const styles = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  line: {
    position: 'relative',
    margin: '20px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
};
const demoData = [
  {
    popups: [
      { horizontalPosition: 'auto' },
      { horizontalPosition: 'auto' },
      { horizontalPosition: 'auto' },
    ],
  },
  {
    popups: [
      { horizontalPosition: 'right' },
      { horizontalPosition: 'center' },
      { horizontalPosition: 'left' },
    ],
  },
  {
    popups: [
      { horizontalPosition: 'right', verticalPosition: 'top' },
      { horizontalPosition: 'center', verticalPosition: 'top' },
      { horizontalPosition: 'left', verticalPosition: 'top' },
    ],
  },
  {
    popups: [
      { verticalPosition: 'top' },
      { verticalPosition: 'top' },
      { verticalPosition: 'top' },
    ],
  },
  {
    popups: [
      { horizontalPosition: 'center', verticalPosition: 'top' },
      { horizontalPosition: 'center', verticalPosition: 'top' },
    ],
  },
  {
    popups: [
      { horizontalPosition: 'left', verticalPosition: 'top' },
      { horizontalPosition: 'right', verticalPosition: 'top' },
    ],
  },
];

/**
 * Компонент для демонстрации работы позиционирующегося попапа.
 * @param {Object} props Свойства компонента.
 * @param {Array} [props.children] Содержимое попапа.
 * @param {number} [props.positioningMargin] Отступ от края контейнера.
 */
class PositioningPopupDemo extends Component {
  /**
   * Конструктор компонента.
   * @inheritDoc
   */
  constructor (props) {
    super(props);

    this.state = {};
    this.popupRefs = {};
    this.wrapperRef = createRef();

    demoData.forEach((line, indexWrapper) => {
      line.popups.forEach((popup, indexPopup) => {
        this.popupRefs[`popup${indexPopup}in${indexWrapper}`] = createRef();
      });
    });
  }

  /**
   * Обработчик наведения на кнопку.
   * @param {string} prop Свойство в стейт, которое нужно изменить.
   */
  mouseOver = prop => {
    this.setState({
      [prop]: true,
    });
  };

  /**
   * Обработчик покидания области кнопки.
   * @param {string} prop Свойство в стейт, которое нужно изменить.
   */
  mouseOut = prop => {
    this.setState({
      [prop]: false,
    });
  };

  /**
   * Рисует попап с кнопкой-открывашкой.
   * @param {string} propInState Название свойства в стейте.
   * @param {string} refName Название ссылки на элемент.
   * @param {string} key Ключ.
   * @param {string} verticalPosition Положение стрелки.
   * @param {boolean} isCentered Отцентрирован ли попап.
   * @return {ReactElement} Попап с кнопкой-открывашкой.
   */
  renderExample ({ propInState, refName, key, verticalPosition, horizontalPosition = 'auto' }) {
    return (
      <React.Fragment key={key}>
        <Button
          onMouseOver={() => this.mouseOver(propInState)}
          onMouseOut={() => this.mouseOut(propInState)}
          style={{
            display: 'block',
            position: 'relative',
          }}
          ref={this.popupRefs[refName]}
          children='Hover me'
        />
        {this.state[propInState] && (
          <PositioningPopup
            opener={this.popupRefs[refName]}
            isOpen={this.state[propInState]}
            wrapper={this.wrapperRef}
            withArrow
            parent={this.wrapperRef}
            positioningMargin={this.props.positioningMargin}
            verticalPosition={verticalPosition}
            horizontalPosition={horizontalPosition}
          >
            {this.props.children}
          </PositioningPopup>
        )}
      </React.Fragment>
    );
  }

  /**
   * Разметка компонента демонстрирующего поведение позиционирующегося попапа.
   * @return {ReactElement} Разметка компонента демонстрирующего поведение позиционирующегося попапа.
   */
  render () {
    return (
      <div style={styles.wrap}>
        {demoData.map((line, indexWrapper) => (
          <div style={styles.line} key={indexWrapper} ref={this.wrapperRef}>
            {line.popups.map((popup, indexPopup) => this.renderExample({
              propInState: `state${indexPopup}in${indexWrapper}`,
              refName: `popup${indexPopup}in${indexWrapper}`,
              key: indexPopup,
              ...popup,
            }))}
          </div>
        ))}
      </div>
    );
  }
}

PositioningPopupDemo.propTypes = {
  children: Type.any,
  positioningMargin: Type.number,
};

export default PositioningPopupDemo;
