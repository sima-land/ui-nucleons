import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../index';

storiesOf('Pagination', module)
  .add('Defaults', () => {
    const [currentPage, setPage] = useState(1);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <Pagination
          total={350}
          current={currentPage}
          onChange={({ value }) => setPage(value)}
        />
      </div>
    );
  });
