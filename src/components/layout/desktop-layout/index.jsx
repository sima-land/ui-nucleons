import React from 'react';
import Layout from '../layout';

/**
 * Компонент десктопного layout'а.
 * @param {Object} props Свойства Layout.
 * @return {ReactElement} Компонент десктопного layout'а.
 */
const DesktopLayout = props => (
  <Layout
    mdPadding='lg'
    xlMaxWidth='lg'
    lgMaxWidth='md'
    {...props}
  />
);

export default DesktopLayout;
