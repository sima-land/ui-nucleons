import React from 'react';
import style from './phone.scss';
import Type from 'prop-types';

/**
 * Компонент номера телефона.
 * @param {Object} props Свойства компонента.
 * @param {string} props.phone Номер телефона.
 * @return {ReactElement} Номер телефона.
 */
const Phone = ({ phone }) => <span className={style.phone}>{phone}</span>;

Phone.propTypes = {
  /**
   * Номер телефона
   */
  phone: Type.string,
};

export default Phone;
