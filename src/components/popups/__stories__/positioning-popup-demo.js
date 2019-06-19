import * as React from 'react';
import PositioningPopup from '../positioning-popup';
import Button from '../../button';
import Type from 'prop-types';

const styles = {
  position: 'relative',
  padding: '10px',
  margin: '-8px',
  display: 'flex',
  justifyContent: 'space-between',
};
/**
 * Компонент для демонстрации работы позиционирующегося попапа.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.children Содержимое попапа.
 * @param {number} props.positioningMargin Отступ от края контейнера.
 */
class PositioningPopupDemo extends React.Component {
  /**
   * Получаем ширину body.
   */
  componentDidMount () {
    this.parentWidth = this.wrapRef.getBoundingClientRect().width;
  }

  state = {
    firstIsOpen: false,
    secondIsOpen: false,
    thirdIsOpen: false,
  };

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
   * @return {ReactElement} Попап с кнопкой-открывашкой.
   */
  renderExample = (propInState, refName, key) => (
    <React.Fragment key={key}>
      <Button
        onMouseOver={() => this.mouseOver(propInState)}
        onMouseOut={() => this.mouseOut(propInState)}
        style={{
          display: 'block',
          position: 'relative',
        }}
        saveRef={ref => this[refName] = ref}
      >
        Hover me
      </Button>
      <PositioningPopup
        opener={this[refName]}
        isOpen={this.state[propInState]}
        withArrow
        parentWidth={this.parentWidth}
        positioningMargin={this.props.positioningMargin}
      >
        {this.props.children}
      </PositioningPopup>
    </React.Fragment>
  );

  /**
   * Разметка компонента демонстрирующего поведение позиционирующегося попапа.
   * @return {ReactElement} Разметка компонента демонстрирующего поведение позиционирующегося попапа.
   */
  render () {
    return (
      <div style={styles} ref={ref => this.wrapRef = ref}>
        {this.renderExample('firstIsOpen', 'firstRef', '1')}
        {this.renderExample('secondIsOpen', 'secondRef', '2')}
        {this.renderExample('thirdIsOpen', 'thirdRef', '3')}
      </div>
    );
  }
}

PositioningPopupDemo.propTypes = {
  children: Type.any,
  positioningMargin: Type.number,
};

export default PositioningPopupDemo;

