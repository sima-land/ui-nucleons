import React, { useState, useRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import prop from 'lodash/fp/prop';
import DownSVG from './square-arrow-down.svg';
import Link from '../link/deprecated';
import Popup from '../popups/popup';
import withGlobalListeners from '../hoc/with-global-listeners';
import { useApplyMemo, useOnMount } from '../hooks/';
import classnames from 'classnames/bind';
import styles from './breadcrumbs.scss';
import isFunction from 'lodash/isFunction';
import Type from 'prop-types';

const cx = classnames.bind(styles);
const defaultGetName = prop('name');
const defaultGetItemURL = prop('url');
const defaultGetItemSiblings = prop('items');
const defaultIsActiveItem = prop('isActive');

/**
 * Есть ли соседние категории.
 * @param {Array} siblings Соседние категории.
 * @return {boolean} Есть ли соседние категории.
 */
const defaultGetHasSiblings = siblings => Array.isArray(siblings) && siblings.length > 0;

/**
 * Возвращает компонент "хлебных крошек".
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Список "Хлебных крошек".
 * @param {Function} [props.getItemName] Должна вернуть имя элемента списка (по умолчанию свойство "name").
 * @param {Function} [props.getItemURL] Должна вернуть URL элемента списка (по умолчанию свойство "url").
 * @param {Function} [props.getItemSiblings] Должна вернуть список дочерних ссылок (по умолчанию свойство "items").
 * @param {Function} [props.isActiveItem] Должна вернуть true если элемент представляет активный раздел.
 * @param {Function} [props.getHasSiblings] Должна вернуть true если имеются соседние категории.
 * @param {Function} props.onOpenBreadcrumbs Функция, вызываемая при открытии списка соседних элементов.
 * @param {Function} props.addGlobalListener Должен зарегистрировать глобальный обработчик.
 * @return {ReactElement} Компонент "хлебных крошек".
 */
const Breadcrumbs = ({
  items = [],
  getItemName = defaultGetName,
  getItemURL = defaultGetItemURL,
  getItemSiblings = defaultGetItemSiblings,
  isActiveItem = defaultIsActiveItem,
  getHasSiblings = defaultGetHasSiblings,
  addGlobalListener,
  onOpenBreadcrumbs,
}) => (
  <ul className={cx('breadcrumbs')}>
    {Array.isArray(items) && items.map((breadcrumb, index) => {
      const [isPopupOpen, togglePopup] = useState(false);
      const popupNodeContainer = useRef();
      const openerNodeContainer = useRef();
      const siblings = getItemSiblings(breadcrumb);
      const hasSiblings = getHasSiblings(siblings);
      const name = getItemName(breadcrumb);
      const breadcrumbName = isActiveItem(breadcrumb) ? (
        <span className={cx('active')}>{name}</span>
      ) : (
        <Link
          color='dark-gray'
          href={getItemURL(breadcrumb)}
          children={name}
        />
      );

      useOnMount(useApplyMemo(createMountHandler, [
        popupNodeContainer,
        openerNodeContainer,
        addGlobalListener,
        togglePopup,
      ]));

      return (
        <li key={index}>
          {breadcrumbName}
          {hasSiblings && (
            <span ref={openerNodeContainer}>
              <DownSVG
                className={cx('toggle-icon')}
                onClick={() => {
                  togglePopup(true);
                  isFunction(onOpenBreadcrumbs) && onOpenBreadcrumbs(breadcrumb);
                }}
              />
            </span>
          )}
          {hasSiblings && (
            <CSSTransition
              in={isPopupOpen}
              timeout={200}
              unmountOnExit
              classNames={{
                enter: cx('fade-enter'),
                enterActive: cx('fade-enter-active'),
                exit: cx('fade-exit'),
                exitActive: cx('fade-exit-active'),
              }}
            >
              <Popup
                additionalClass={cx('popup')}
                ref={popupNodeContainer}
              >
                {breadcrumbName}
                <DownSVG
                  className={cx('toggle-icon', 'close')}
                  onClick={() => togglePopup(false)}
                />
                <ul className={cx('siblings-list')}>
                  {siblings.map((siblingItem, siblingIndex) => {
                    const isActive = isActiveItem(siblingItem);
                    const siblingName = getItemName(siblingItem);
                    return (
                      <li key={siblingIndex} className={cx('sibling-item')}>
                        {isActive ? (
                          <span className={cx('disabled')}>{siblingName}</span>
                        ) : (
                          <Link
                            color='dark-gray'
                            href={getItemURL(siblingItem)}
                            children={siblingName}
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Popup>
            </CSSTransition>
          )}
        </li>
      );
    })}
  </ul>
);

/**
 * Создает функцию-обработчик монтирования компонента.
 * @param {Array} dependencies Зависимости.
 * @param {Object} dependencies.'0' Должен содержать узел popup'a в свойстве current.
 * @param {Object} dependencies.'1' Должен содержать узел кнопки открытия popup'а в свойстве current.
 * @param {Function} dependencies.'2' Функция подписки на событие window.
 * @param {Function} dependencies.'3' Функция переключения состояния popup'a.
 * @return {Function} Функция-обработчик монтирования компонента.
 */
export const createMountHandler = ([
  popupNodeContainer,
  openerNodeContainer,
  addGlobalListener,
  togglePopup,
]) => () => {
  /**
   * Закрывает popup если клик был не по открывающей иконке и не по popup'у.
   * @param {SyntheticEvent} event Событие клика.
   */
  const checkPopupClose = ({ target }) => {
    if (
      target instanceof Node

      // если клик произошел не по узлу иконки открытия и не внутри popup'а
      && [popupNodeContainer.current, openerNodeContainer.current].every(
        node => node instanceof Node && node !== target && !node.contains(target)
      )
    ) {
      togglePopup(false);
    }
  };

  /**
   * Закрывает popup при нажатии на Escape.
   * @param {SyntheticEvent} event Событие нажатия на клавиатуру.
   */
  const checkEscape = ({ code, keyCode }) => {
    if (code === 'Escape' || keyCode === 27) {
      togglePopup(false);
    }
  };
  const removeClickListener = addGlobalListener('click', checkPopupClose);
  const removeKeydownListener = addGlobalListener('keydown', checkEscape);

  // отписываемся при размонтировании
  return () => {
    removeClickListener();
    removeKeydownListener();
  };
};

Breadcrumbs.propTypes = {

  /**
   * Элементы хлебных крошек.
   */
  items: Type.arrayOf(Type.object),

  /**
   * Функция, возвращающая поле в переданной коллекции, соответсвующее имени крошки.
   */
  getItemName: Type.func,

  /**
   * Функция, возвращающая поле в переданной коллекции, соответсвующее URL крошки.
   */
  getItemURL: Type.func,

  /**
   * Функция, возвращающая поле в переданной коллекции, соответсвующее коллекции смежных элементов крошки.
   */
  getItemSiblings: Type.func,

  /**
   * Функция, возвращающая флаг активности крошки
   * (активная крошка не будет кликабельной и не приведет к перезагрузке страницы).
   */
  isActiveItem: Type.func,

  /**
   * Глобальный обработчик событий.
   */
  addGlobalListener: Type.func,

  /**
   * Функция, вызываемая при открытии попапа смежных элементов.
   */
  onOpenBreadcrumbs: Type.func,

  /**
   * Функция, возвращающая флаг имеются ли соседние категории.
   */
  getHasSiblings: Type.func,
};

export default withGlobalListeners(Breadcrumbs);
