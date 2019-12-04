import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../';
import Button from '../../button';
import '!style-loader!css-loader!sass-loader!./modal-storybook.scss';

const childPadding = {
  padding: '20px',
};

/**
 * Компонент для демонстрации работы модального окна.
 */
class ModalDemo extends React.Component {
  state = {
    isOpen: false,
  };
  onClose = () => {
    this.setState({
      isOpen: false,
    });
  };
  showModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  /**
   * Отрисовка компонента.
   * @return {ReactElement} Компонент.
   */
  render () {
    return (
      <React.Fragment>
        <Button onClick={this.showModal}>
          Click me
        </Button>
        {this.state.isOpen && (
          <Modal {...this.props} customClasses={{ overlay: 'modal-center' }} onClose={this.onClose.bind(this)}>
            <p style={childPadding}>This is modal window</p>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

storiesOf('Modal', module)
  .add('default appearance', () => (
    <ModalDemo />
  ))
  .add('with close cross', () => (
    <ModalDemo closeButtonSize={8} />
  ));
