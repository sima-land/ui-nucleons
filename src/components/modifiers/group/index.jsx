import React, { Component, createRef } from 'react';
import isFunction from 'lodash/isFunction';
import debounce from 'lodash/debounce';
import prop from 'lodash/fp/prop';
import ModifierButton from '../button';
import withGlobalListeners from '../../hoc/with-global-listeners';
import classes from './modifiers-group.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Внешний отступ кнопки.
 * @type {number}
 */
const MODIFIER_GUTTER = 4;

/**
 * Создает функцию, находящую индекс элемента, который не должен быть виден.
 * @param {HTMLElement} container Контейнер.
 * @return {Function} Функция.
 */
export const createHiddenNodeIndexFinder = container => childNode => {
  let childOffsetTop = childNode.offsetTop;

  if (childNode.classList.contains(cx('invisible'))) {
    childOffsetTop -= MODIFIER_GUTTER;
  }

  return childOffsetTop - container.offsetTop >= container.clientHeight;
};

const defaultGetItemType = prop('type');
const defaultGetItemCount = prop('count');
const defaultGetItemColor = prop('color');
const defaultGetItemContent = prop('content');
const defaultIsSelectedItem = prop('selected');
const defaultGetItemImage = prop('image');
const defaultGetIsMarkdown = prop('isMarkdown');

/**
 * Стандартная функция-геттер для обработчика клика по модификатору.
 * @param {Function} onSelectItem Функция сменяющая модификатор.
 * @param {Object} item Модификатор.
 * @return {Function} Обработчик клика по модификатору.
 */
export const defaultOnSelectItem = (onSelectItem, item) =>
  () => isFunction(onSelectItem) && onSelectItem(item);

/**
 * Возвращает компонент списка модификаторов.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Список модификаторов.
 * @param {Function} [props.getItemType] Возвращает тип модификатора ("text" или "image", по умолчанию "text").
 * @param {Function} [props.getItemCount] Возвращает число с количеством модификатора (по умолчанию свойство "count").
 * @param {Function} [props.getItemColor] Возвращает цвет модификатора (по умолчанию свойство "color").
 * @param {Function} [props.getItemContent] Возвращает содержимое модификатора (по умолчанию свойство "content").
 * @param {Function} [props.isSelectedItem] Показывает, выбран ли модификатор (по умолчанию свойство "selected").
 * @param {Function} [props.onSelectItem] Будет вызвана при выборе модификатора, получит сам модификатор.
 * @param {Function} [props.getItemImage] Возвращает URL изображения модификатора (по умолчанию свойство "image").
 * @param {boolean} [props.needShowAll] Флаг необходимости отображения всех модификаторов.
 * @param {Function} [props.onClickShowAll] Сработает при нажатии на кнопку отображения всех модификаторов.
 * @param {Function} [props.isMarkdown] Имеет ли товар уценку.
 */
export class ModifiersGroup extends Component {
  state = {
    // нажата ли кнопка показа всех модификаторов
    needShowAll: this.props.needShowAll || false,

    // есть ли дочерние узлы контейнера, которые скрыты из за ограничения его высоты
    hasHiddenNodes: true,

    // индекс последнего видимого элемента в ограниченном по высоте контейнере
    lastVisibleChildIndex: null,
  };
  windowWidth = 0;
  containerRef = createRef();
  showingButtonRef = createRef();

  /**
   * Вызывается после монтирования.
   * Выполняет подписку на глобальное событие "resize".
   * @inheritdoc
   */
  componentDidMount () {
    const { addGlobalListener } = this.props;
    this.windowWidth = document.documentElement.offsetWidth;

    if (isFunction(addGlobalListener)) {
      this.removeGlobalListener = addGlobalListener(
        'resize',
        this.resetVisibleNodesData
      );
    }
    this.checkVisibleNodes();
  }

  /**
   * Вызывается после обновления.
   * Запускает обновление информации о видимых и невидимых дочерних узлах контейнера.
   * @inheritdoc
   */
  componentDidUpdate () {
    this.checkVisibleNodes();
  }

  /**
   * Вызывается при размонтировании.
   * Выполняет отписку от глобального события "resize".
   * @inheritdoc
   */
  componentWillUnmount () {
    if (isFunction(this.removeGlobalListener)) {
      this.removeGlobalListener();
    }
  }

  /**
   * Сбрасывает информацию о видимых и невидимых дочерних узлах контейнера.
   */
  resetVisibleNodesData = debounce(() => {
    if (document.documentElement.offsetWidth !== this.windowWidth) {
      this.windowWidth = document.documentElement.offsetWidth;
      this.setState({
        hasHiddenNodes: true,
        lastVisibleChildIndex: null,
      });
    }
  }, 250, { leading: true });

  /**
   * Обновляет информацию о видимых и невидимых дочерних узлах контейнера,
   * необходимую для показа кнопки раскрытия полного списка модификаторов.
   */
  checkVisibleNodes = () => {
    // если не указан индекс последнего видимого узла
    if (this.state.lastVisibleChildIndex === null) {
      const containerEl = this.containerRef.current;
      const showingButtonEl = this.showingButtonRef.current;

      if (containerEl && showingButtonEl) {
        const childList = [...containerEl.children];
        const firstHiddenNodeIndex = childList.findIndex(createHiddenNodeIndexFinder(containerEl));

        if (firstHiddenNodeIndex !== -1) {
          const lastVisibleElIndex = firstHiddenNodeIndex - 1;
          const lastVisibleNode = childList[lastVisibleElIndex];

          if (lastVisibleNode) {
            const rightBound = lastVisibleNode.getBoundingClientRect().right;
            const rightContainerBound = containerEl.getBoundingClientRect().right;

            // проверяем, хватает ли кнопке места (с запасом в половину) после последнего видимого дочернего элемента
            const isShowingButtonFit = rightContainerBound - rightBound >= (showingButtonEl.clientWidth * 1.5);

            this.setState({
              // если хватает места - ставим кнопку после последнего, иначе - вместо
              lastVisibleChildIndex: lastVisibleElIndex + (isShowingButtonFit ? 1 : 0),
              hasHiddenNodes: true,
            });
          }
        } else {
          this.setState({ hasHiddenNodes: false });
        }
      }
    }
  };

  /**
   * Обработчик нажатия на кнопку отображения всех модификаторов.
   */
  handleShowAllClick = () => {
    this.setState({ needShowAll: true });
    const { onClickShowAll } = this.props;
    isFunction(onClickShowAll) && onClickShowAll();
  };

  /**
   * Возвращает компонент.
   * @inheritdoc
   */
  render () {
    const {
      items,
      onSelectItem,
      getItemType = defaultGetItemType,
      getItemCount = defaultGetItemCount,
      getItemColor = defaultGetItemColor,
      getItemContent = defaultGetItemContent,
      isSelectedItem = defaultIsSelectedItem,
      getItemImage = defaultGetItemImage,
      getSelectItem = defaultOnSelectItem,
      isMarkdown = defaultGetIsMarkdown,
    } = this.props;
    const {
      needShowAll,
      hasHiddenNodes,
      lastVisibleChildIndex,
    } = this.state;
    const hasItems = Array.isArray(items);
    const needHideModifiers = !needShowAll && lastVisibleChildIndex !== null;

    return (
      <div
        className={cx('modifiers-group', !needShowAll && 'height-limited')}
        ref={this.containerRef}
      >
        {hasItems && items.map((item, index) => {
          const isDisplayed = !needHideModifiers || index < lastVisibleChildIndex;

          return (
            <ModifierButton
              key={index}
              type={getItemType(item)}
              count={getItemCount(item)}
              color={getItemColor(item)}
              content={getItemContent(item)}
              selected={isSelectedItem(item)}
              image={getItemImage(item)}
              onClick={getSelectItem(onSelectItem, item)}
              className={cx(
                'guttered',
                !isDisplayed && 'not-display'
              )}
              isMarkdown={isMarkdown(item)}
            />
          );
        })}
        {hasItems && hasHiddenNodes && !needShowAll && (
          <ModifierButton
            squared
            ref={this.showingButtonRef}
            content={`+${items.length - lastVisibleChildIndex}`}
            className={cx(
              'show-all-button',
              'guttered',
              lastVisibleChildIndex === null && 'invisible'
            )}
            onClick={this.handleShowAllClick}
          />
        )}
      </div>
    );
  }
}

ModifiersGroup.propTypes = {

  /**
   * Список модификаторов.
   */
  items: PropTypes.arrayOf(PropTypes.object),

  /**
   * Функция сменяющая модификатор, получит сам модификатор.
   */
  onSelectItem: PropTypes.func,

  /**
   * Возвращает тип модификатора ("text" или "image", по умолчанию "text").
   */
  getItemType: PropTypes.func,

  /**
   * Возвращает число с количеством модификатора (по умолчанию свойство "count").
   */
  getItemCount: PropTypes.func,

  /**
   * Возвращает цвет модификатора (по умолчанию свойство "color").
   */
  getItemColor: PropTypes.func,

  /**
   * Возвращает содержимое модификатора (по умолчанию свойство "content").
   */
  getItemContent: PropTypes.func,

  /**
   * Показывает, выбран ли модификатор (по умолчанию свойство "selected").
   */
  isSelectedItem: PropTypes.func,

  /**
   * Возвращает URL изображения модификатора (по умолчанию свойство "image").
   */
  getItemImage: PropTypes.func,

  /**
   * Возвращает функцию смены модификатора.
   */
  getSelectItem: PropTypes.func,

  /**
   * Имеет ли товар уценку.
   */
  isMarkdown: PropTypes.func,

  /**
   * Глобальный обработчик событий.
   */
  addGlobalListener: PropTypes.func,

  /**
   * Флаг необходимости отображения всех модификаторов.
   */
  needShowAll: PropTypes.bool,

  /**
   * Сработает при нажатии на кнопку отображения всех модификаторов.
   */
  onClickShowAll: PropTypes.func,
};

export default withGlobalListeners(ModifiersGroup);
