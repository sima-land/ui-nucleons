import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import BaseWidget from '../';

storiesOf('BaseWidget', module)
  .add('without props', () => (
    <BaseWidget>
      Базовый виджет без свойств - это "section" со вложенным "div".
    </BaseWidget>
  ))
  .add('with header', () => (
    <BaseWidget
      headerContainer='h4'
      headerContainerProps={{
        style: {
          fontSize: '1.5em',
        },
      }}
      header='Виджет с шапкой'
    >
      По умолчанию шапка находится в теге "header", но это можно переопределить.<br />
      Так же можно передать свойства заголовока при помощи "headerContainerProps".<br />
      В этом примере контейнер заголовка изменен, а так же ему переданы свойства.
    </BaseWidget>
  ))
  .add('with footer', () => (
    <BaseWidget
      footerContainer='i'
      footerContainerProps={{
        style: {
          opacity: '0.6',
        },
      }}
      footer='Подвал виджета с измененной прозрачностью текста'
    >
      По умолчанию заголовок находится в теге "footer", но это можно переопределить.<br />
      Так же можно передать свойства заголовока при помощи "footerContainerProps".<br />
      В этом примере контейнер подвала изменен, а так же ему переданы свойства.
    </BaseWidget>
  ))
  .add('with header and footer', () => (
    <Fragment>
      <BaseWidget
        header='Заголовок'
        footer={(
          <Fragment>
            В этом примере шапке и подвалу не переданы свойства и не изменены теги.<br />
            А у обертки основного конейнера изменен тип, а так же ему переданы свойства.
          </Fragment>
        )}
        childrenContainer='p'
        childrenContainerProps={{
          style: {
            color: 'green',
          },
        }}
      >
        По умолчанию содержимое виджета обернуто в тег "div", но этот тег можно переопределить.<br />
        Можно передать свойства обертке содержимого при помощи "childrenContainerProps".
      </BaseWidget>
    </Fragment>
  ));

