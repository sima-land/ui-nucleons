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
   */
  constructor (props) {
    super(props);

    this.state = { mounted: false };

    this.element = hasDocumentBody() && document.createElement('div');
  }

  /**
   * Добавляет свой элемент в конец document.body.
   */
  componentDidMount () {
    hasDocumentBody() && (
      document.body.appendChild(this.element),
      this.setState({ mounted: true })
    );
  }

  /**
   * Удаляет свой элемент из document.body.
   */
  componentWillUnmount () {
    hasDocumentBody() && (
      document.body.removeChild(this.element),
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
};

/**
 * Определяет, существует ли document.body.
 * @return {boolean} Существует ли document.body.
 */
const hasDocumentBody = () => typeof document !== 'undefined' && Boolean(document.body);

export default Layer;
