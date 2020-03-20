import React from 'react';
import Type from 'prop-types';

/**
 * Возвращает элемент, содержащий путь обрезки в форме `SuperEllipse` для CSS свойства 'clip-path'.
 * @param {Object} props Свойства компонента.
 * @param {string} props.id Id, по которому будет доступен path на странице.
 * @return {ReactElement} Элемент.
 */
const SuperEllipseClipPath = ({ id }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='0'
    height='0'
    style={{ position: 'absolute' }}
  >
    <defs>
      <clipPath
        id={id}
        clipPathUnits='objectBoundingBox'
      >
        <path d='M1 0.5 C 1 0.856, 0.856 1, 0.5 1 S 0 0.856, 0 0.5 S 0.143 0, 0.5 0 S 1 0.143 1 0.5 Z' />
      </clipPath>
    </defs>
  </svg>
);

SuperEllipseClipPath.propTypes = {
  /**
   * ID, по которому на clipPath смогут ссылаться другие компоненты.
   * Должен быть уникальным для страницы.
   */
  id: Type.string,
};

export default SuperEllipseClipPath;
