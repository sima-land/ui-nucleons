import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../index';

/**
 * Тестовая секция.
 * @param {{ total: number }} props Свойства.
 * @return {ReactElement} Тестовая секция.
 */
const TestSection = ({ total = 100 }) => { // eslint-disable-line react/prop-types
  const [currentPage, setPage] = useState(1);

  return (
    <div style={{ marginBottom: 20 }}>
      <h4 style={{ marginBottom: 10 }}>Page count: {total}</h4>
      <Pagination
        total={total}
        current={currentPage}
        onChange={({ value }) => setPage(value)}
      />
    </div>
  );
};

storiesOf('Pagination', module)
  .add('Defaults', () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <TestSection total={1} />
      <TestSection total={2} />
      <TestSection total={3} />
      <TestSection total={4} />
      <TestSection total={5} />
      <TestSection total={6} />
      <TestSection total={7} />
      <TestSection total={8} />
      <TestSection total={9} />
      <TestSection total={10} />
      <TestSection total={15} />
      <TestSection total={20} />
      <TestSection total={999} />
    </div>
  ));
