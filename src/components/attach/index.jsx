import React, {
  Fragment,
  useRef,
  useState,
} from 'react';
import Link from '../link';
import Icon from '../icon';
import isFunction from 'lodash/isFunction';
import withPrevent from '../helpers/with-prevent';
import clipIcon from '../icons/clip.svg';
import classnames from 'classnames/bind';
import classes from './attach.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

const defaultClasses = Object.freeze({
  permanent: cx('attach-container'),
  dragActive: cx('drag-active'),
  failed: null,
});

/**
 * Иконка слева от ярлыка по умолчанию.
 */
const defaultAdornment = (
  <Icon
    icon={clipIcon}
    size={20}
    role='presentation'
    className={cx('clip-icon')}
  />
);

/**
 * Возвращает компонент поля выбора файлов.
 * @param {Object} props Свойства.
 * @param {Function} props.renderLabel Получив объект со свойством triggerInput должна вернуть текст ярлыка.
 * @param {*} props.startAdornment Иконка справа от ярлыка.
 * @param {Object} props.classes Классы для различных состояний.
 * @param {Function} props.onSelect Сработает при выборе файлов, получит FileList.
 * @param {string} props.id Идентификатор элемента поля.
 * @param {string} props.name Имя элемента поля.
 * @param {boolean} props.multiple Можно ли выбирать несколько файлов.
 * @return {ReactElement} Компонент поля выбора файлов.
 */
const Attach = ({
  renderLabel: Label = DefaultLabel,
  startAdornment = defaultAdornment,
  classes,
  onSelect,
  id,
  name,
  multiple = true,
}) => {
  const inputRef = useRef();
  const [isDragActive, setDragActive] = useState(false);
  const readyClasses = { ...defaultClasses, ...classes };

  return (
    <div
      onDragEnter={withPrevent(() => setDragActive(true))}
      onDragOver={withPrevent(() => setDragActive(true))}
      onDragLeave={withPrevent(() => setDragActive(false))}
      onDrop={withPrevent(event => {
        setDragActive(false);
        isFunction(onSelect) && onSelect(
          event.dataTransfer.files
        );
      })}
      className={cx(
        readyClasses.permanent,
        isDragActive && readyClasses.dragActive
      )}
    >
      {startAdornment}
      <span
        className={cx('attach-label')}
        children={(
          <Label
            triggerInput={() => {
              inputRef.current && inputRef.current.click();
            }}
          />
        )}
      />
      <input
        ref={inputRef}
        id={id}
        name={name}
        multiple={multiple}
        type='file'
        className={cx('attach-input')}
        onChange={withPrevent(event => {
          isFunction(onSelect) && onSelect(
            event.target.files
          );
        })}
      />
    </div>
  );
};

Attach.propTypes = {
  /**
   * Получив объект со свойством triggerInput (откроет системное окно выбора файлов) должна вернуть текст ярлыка.
   */
  renderLabel: PropTypes.func,

  /**
   * Иконка справа от ярлыка.
   */
  startAdornment: PropTypes.node,

  /**
   * Классы для различных состояний.
   */
  classes: PropTypes.shape({
    permanent: PropTypes.string,
    dragActive: PropTypes.string,
  }),

  /**
   * Сработает при выборе файлов, получит FileList.
   */
  onSelect: PropTypes.func,

  /**
   * Идентификатор элемента поля.
   */
  id: PropTypes.string,

  /**
   * Имя элемента поля.
   */
  name: PropTypes.string,

  /**
   * Можно ли выбирать несколько файлов.
   */
  multiple: PropTypes.bool,
};

/**
 * Возвращает компонент ярлыка по умолчанию.
 * @param {Object} props Свойства.
 * @param {Function} props.triggerInput Откроет системное окно выбора файлов.
 * @return {ReactElement} Компонент ярлыка по умолчанию.
 */
export const DefaultLabel = ({ triggerInput }) => (
  <Fragment>
    Перетащите или
    {' '}
    <Link pseudo onClick={triggerInput}>
      загрузите изображения
    </Link>
  </Fragment>
);

DefaultLabel.propTypes = {
  /**
   * Откроет системное окно выбора файлов.
   */
  triggerInput: PropTypes.func,
};

export default Attach;
