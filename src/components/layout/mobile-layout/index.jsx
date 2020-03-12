import React from 'react';
import Layout from '../layout';

/**
 * Компонент мобильного layout'а.
 * @param {Object} props Свойства Layout.
 * @return {ReactElement} Компонент мобильного layout'а.
 */
const MobileLayout = props => (
  <Layout
    xxlMaxWidth='sm'
    xsMaxWidth='xs'
    xxsPadding='md'
    xxxsPadding='sm'
    {...props}
  />
);

export default MobileLayout;
