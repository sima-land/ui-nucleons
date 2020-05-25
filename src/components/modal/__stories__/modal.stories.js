import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../index';
import Button from '../../button';
import Clean from '../../clean-buttons';
import TopBar from '../../top-bar';
import '!style-loader!css-loader!sass-loader!./modal-storybook.scss';

/**
 * Компонент для демонстрации работы модального окна.
 * @param {Object} modalProps Свойства для Modal.
 * @return {ReactElement} Компонент для демонстрации работы модального окна.
 */
const ModalDemo = modalProps => {
  const [isModalOpen, toggleModal] = useState(false);

  return (
    <Fragment>
      <Button onClick={() => toggleModal(true)}>
        Open modal
      </Button>

      {isModalOpen && (
        <Modal
          customClasses={{ overlay: 'modal-center' }}
          onClose={() => toggleModal(false)}
          {...modalProps}
        />
      )}

      {[...Array(100).keys()].map(index => (
        <p key={index}>A lot of text for check body scroll [{index}]</p>
      ))}
    </Fragment>
  );
};

storiesOf('Modal', module)
  .add('default appearance', () => (
    <ModalDemo>
      <p style={{ padding: 20 }}>This is modal window.</p>
    </ModalDemo>
  ))
  .add('with close cross', () => (
    <ModalDemo closeButtonSize={8}>
      <p style={{ padding: 20 }}>This is modal window.</p>
    </ModalDemo>
  ))
  .add('with header & footer', () => (
    <ModalDemo>
      <TopBar
        title='Extended modal'
        subtitle='With header and footer'
      />
      <p style={{ width: 400, padding: 20 }}>
        This is content of modal window.
      </p>
      <Clean.Group size='s'>
        <Clean.Button>One</Clean.Button>
        <Clean.Button>Two</Clean.Button>
      </Clean.Group>
    </ModalDemo>
  ))
  .add('preset:extended', () => (
    <ModalDemo
      extended
      title='Extended modal'
      withDivideTopBar
      withCloseButton
      topBarProps={{ size: 's' }}
      footer={(
        <Clean.Group size='s'>
          <Clean.Button>Button</Clean.Button>
          <Clean.Button>Another button</Clean.Button>
        </Clean.Group>
      )}
    >
      <p style={{ width: 400, height: 200, padding: 20 }}>
        This is content of modal window.
      </p>
    </ModalDemo>
  ));
