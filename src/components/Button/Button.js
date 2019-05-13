import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент кнопки
 */
export default class Button extends React.Component {
  static propTypes = {
    label: PropTypes.string,
  };
  static defaultProps = {
    label: 'default',
  };

  /**
 * Отрисовка компонента
 * @return {ReactElement} Компонент кнопки
 */
  render () {
    return <button>{this.props.label}</button>;
  }
}
