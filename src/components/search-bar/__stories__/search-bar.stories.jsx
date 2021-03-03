import React, { useState } from 'react';
import { SearchBar } from '..';
import BorderedLayout from '../../bordered-layout';
import ArrowLeftSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-left';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Search Bar',
  component: SearchBar,
};

const styles = {
  demo: {
    marginBottom: 20,
  },
};

export const Primary = () => {
  const [query1, setQuery1] = useState('');
  const [query2, setQuery2] = useState('Очень длинный запрос в поисковой строке');

  return (
    <BorderedLayout bottom>
      <div style={styles.demo}>
        <h3>default</h3>
        <SearchBar
          value={query1}
          onChange={({ target }) => setQuery1(target.value)}
          onClear={() => setQuery1('')}
          endButtons={[{ text: 'Oтмена', onClick: action('cancel') }]}
        />
      </div>

      <div style={styles.demo}>
        <h3>custom</h3>
        <SearchBar
          value={query2}
          withSearchIcon={false}
          onChange={({ target }) => setQuery2(target.value)}
          startButtons={[{ text: 'Назад', icon: ArrowLeftSVG, onClick: action('back') }]}
          endButtons={[
            { text: 'Oтмена', onClick: action('cancel') },
            { text: 'Поиск', onClick: action('start') },
          ]}
          onClear={() => setQuery2('')}
          description='150 324 предложений'
          placeholder='Найти'
        />
      </div>
    </BorderedLayout>
  );
};
