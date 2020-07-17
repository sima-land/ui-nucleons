import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

/**
 * Выводит содержимое через портал, создавая элемент в конец body.
 */
class Layer extends Component {
  /**
   * Конструктор.
   * @param {Object} props Свойства.
   * @param {*} props.children Содержимое слоя.
   * @param {*} props.defineRoot Должна вернуть элемент в который через портал будет выведено содержимое слоя.
   */
  constructor (props) {
    super(props);

    this.state = { mounted: false };
  }

  /**
   * Добавляет свой элемент в конец заданного родителя.
   */
  componentDidMount () {
    const { defineRoot = () => document.body } = this.props;

    this.element = document.createElement('div');
    this.rootElement = defineRoot();

    this.rootElement && (
      this.rootElement.appendChild(this.element),
      this.setState({ mounted: true })
    );
  }

  /**
   * Удаляет свой элемент из заданного родителя.
   */
  componentWillUnmount () {
    this.rootElement && (
      this.rootElement.removeChild(this.element),
      this.setState({ mounted: false })
    );
  }

  /**
   * Возвращает портал с содержимым.
   * @return {import('react').ReactPortal} Портал с содержимым.
   */
  render () {
    return this.state.mounted && createPortal(this.props.children, this.element);
  }
}

Layer.propTypes = {
  /**
   * Содержимое слоя.
   */
  children: PropTypes.any,

  /**
   * Должна вернуть элемент в который через портал будет выведено содержимое слоя.
   */
  defineRoot: PropTypes.func,
};

export default Layer;
