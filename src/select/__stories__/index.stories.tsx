import React, { useState } from 'react';
import { Select } from '..';
import { Link } from '../../link';

export default {
  title: 'desktop/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => {
  const options = [
    'ООО "Лаваш-Сервис"',
    'Кайгородцева Анна',
    'ИП Кайгородцев Максимелиан',
    'Fourth Service',
  ];

  const [currentOption, selectOption] = useState('');

  return (
    <>
      <Select
        label='Название организации / ФИО'
        value={currentOption}
        options={options}
        optionSize='m'
        onSelect={selectOption}
        caption='Test caption'
      />

      <div style={{ marginTop: 8 }}>
        <Link pseudo onClick={() => selectOption('')}>
          Сбросить
        </Link>
      </div>
    </>
  );
};

Primary.storyName = 'Использование';

export const SizeS = () => {
  const options = [
    'ООО "Лаваш-Сервис"',
    'Кайгородцева Анна',
    'ИП Кайгородцев Максимелиан',
    'Fourth Service',
  ];

  const [currentOption, selectOption] = useState('');

  return (
    <>
      <Select
        label='Название организации / ФИО'
        value={currentOption}
        options={options}
        optionSize='m'
        onSelect={selectOption}
        caption='Test caption'
        size='s'
      />

      <div style={{ marginTop: 8 }}>
        <Link pseudo onClick={() => selectOption('')}>
          Сбросить
        </Link>
      </div>
    </>
  );
};

export const SizeXS = () => {
  const options = [
    'ООО "Лаваш-Сервис"',
    'Кайгородцева Анна',
    'ИП Кайгородцев Максимелиан',
    'Fourth Service',
  ];

  const [currentOption, selectOption] = useState('');

  return (
    <>
      <Select
        label='Название организации / ФИО'
        value={currentOption}
        options={options}
        optionSize='m'
        onSelect={selectOption}
        caption='Test caption'
        size='xs'
      />

      <div style={{ marginTop: 8 }}>
        <Link pseudo onClick={() => selectOption('')}>
          Сбросить
        </Link>
      </div>
    </>
  );
};

export const WithLoading = () => {
  const [currentOption, selectOption] = useState('');
  const [ready, toggleReady] = useState(false);

  return (
    <>
      <Select
        loading={!ready}
        label='Формат каталога'
        value={currentOption}
        onMenuToggle={opened => {
          opened && !ready && setTimeout(() => toggleReady(true), 1200);
        }}
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
        optionSize='m'
        onSelect={selectOption}
      />
      <div style={{ marginTop: 8 }}>
        <Link
          pseudo
          onClick={() => {
            selectOption('');
            toggleReady(false);
          }}
        >
          Сбросить (+данные)
        </Link>
      </div>
    </>
  );
};

WithLoading.storyName = 'С загрузкой';
