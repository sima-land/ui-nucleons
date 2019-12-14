import React, { useState, useRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import prop from 'lodash/fp/prop';
import { squareArrowDown } from '../icons';
import Link from '../link';
import Icon from '../icon';
import Popup from '../popups/popup';
import withGlobalListeners from '../hoc/with-global-listeners';
import { useApplyMemo, useOnMount } from '../hooks/';
import classnames from 'classnames/bind';
import styles from './breadcrumbs.scss';
import isFunction from 'lodash/isFunction';

const cx = classnames.bind(styles);
const defaultGetName = prop('name');
const defaultGetItemURL = prop('url');
const defaultGetItemSiblings = prop('items');
const defaultIsActiveItem = prop('isActive');

/**
 * Возвращает компонент "хлебных крошек".
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Список "Хлебных крошек".
 * @param {Function} [props.getItemName] Должна вернуть имя элемента списка (по умолчанию свойство "name").
 * @param {Function} [props.getItemURL] Должна вернуть URL элемента списка (по умолчанию свойство "url").
 * @param {Function} [props.getItemSiblings] Должна вернуть список дочерних ссылок (по умолчанию свойство "items").
 * @param {Function} [props.isActiveItem] Должна вернуть true если элемент представляет активный раздел.
 * @param {Function} props.onOpenBreadcrumbs Функция, вызываемая при открытии списка дочерних ссылок.
 * @return {ReactElement} Компонент "хлебных крошек".
 */
const Breadcrumbs = ({
  items = [],
  getItemName = defaultGetName,
  getItemURL = defaultGetItemURL,
  getItemSiblings = defaultGetItemSiblings,
  isActiveItem = defaultIsActiveItem,
  addGlobalListener,
  onOpenBreadcrumbs,
}) => (
  <ul className={cx('breadcrumbs')}>
    {Array.isArray(items) && items.map((breadcrumb, index) => {
      const [isPopupOpen, togglePopup] = useState(false);
      const popupNodeContainer = useRef();
      const openerNodeContainer = useRef();
      const siblings = getItemSiblings(breadcrumb);
      const hasSiblings = Array.isArray(siblings) && siblings.length > 0;
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
              <Icon
                inline
                icon={squareArrowDown}
                size={14}
                className={cx('toggle-icon')}
                onClick={() => {
                  togglePopup(true);
                  isFunction(onOpenBreadcrumbs) && onOpenBreadcrumbs();
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
                <Icon
                  inline
                  icon={squareArrowDown}
                  size={14}
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
 * @param {Object} dependencies.popupNodeContainer Должен содержать узел popup'a в свойстве current.
 * @param {Object} dependencies.openerNodeContainer Должен содержать узел кнопки открытия popup'а в свойстве current.
 * @param {Function} dependencies.addGlobalListener Функция подписки на событие window.
 * @param {Function} dependencies.togglePopup Функция переключения состояния popup'a.
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
  const removeListener = addGlobalListener('click', checkPopupClose);

  // отписываемся при размонтировании
  return removeListener;
};

export default withGlobalListeners(Breadcrumbs);
