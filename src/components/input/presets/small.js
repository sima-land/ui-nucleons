import classnames from 'classnames/bind';
import classes from './small.scss';

const cx = classnames.bind(classes);

const DEFAULT_CLASSES = {
  root: cx('root-width'),
};

/**
 * Возвращает свойства для стилизации Input по макетам "small".
 * @param {Object} [options] Опции.
 * @param {Object} [options.classes] Пользовательские классы.
 * @param {Object} [options.classes.root] Класс, который будет применен к корневому компоненту.
 * @param {Object} [options.classes.input] Класс, который будет применен к элементу input.
 * @return {Object} Свойства для стилизации Input.
 */
export const SmallSize = ({ classes: customClasses } = {}) => {
  const readyClasses = { ...DEFAULT_CLASSES, ...customClasses };

  return {
    computeClasses: () => ({
      input: cx('input-reset', readyClasses.input),
      startAdornment: cx('adornment-container', 'adornment-start'),
      endAdornment: cx('adornment-container', 'adornment-end'),
      permanent: cx('root', readyClasses.root),
      failed: cx('root-failed'),
      focused: cx('root-focused'),
      withStartAdornment: cx('root-with-start-adornment'),
      withEndAdornment: cx('root-with-end-adornment'),
    }),
  };
};
