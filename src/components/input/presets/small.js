import classnames from 'classnames/bind';
import classes from './small.scss';

const cx = classnames.bind(classes);

const DEFAULT_CLASSES = {
  root: cx('root-width'),
};

/**
 * Возвращает свойства для стилизации Input по макетам "medium".
 * @param {Object} options Опции.
 * @param {Object} options.classes Пользовательские классы.
 * @return {Object} Свойства для стилизации Input.
 */
export const SmallSize = ({
  classes: customClasses = DEFAULT_CLASSES,
} = {}) => ({
  computeClasses: () => ({
    input: cx('input-reset'),
    startAdornment: cx('adornment-container', 'adornment-start'),
    endAdornment: cx('adornment-container', 'adornment-end'),
    permanent: cx('root', customClasses.root),
    failed: cx('root-failed'),
    focused: cx('root-focused'),
    withStartAdornment: cx('root-with-start-adornment'),
    withEndAdornment: cx('root-with-end-adornment'),
  }),
});
