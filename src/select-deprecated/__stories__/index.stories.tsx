import { Select, renderDefaultArrow } from '@sima-land/ui-nucleons/select-deprecated';
import { useState } from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import GoogleSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Social/Google';
import VkSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Social/Vk';
import InstagramSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Social/Instagram';
import TelegramSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Social/Telegram';
import TwitterSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Social/Twitter';

export default {
  title: 'deprecated/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
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
}

Primary.storyName = 'Простой пример';

export function SizeS() {
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
        placeholder='Название организации / ФИО'
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
}

SizeS.storyName = 'Размер S';

export function SizeXS() {
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
        placeholder='Название организации / ФИО'
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
}

SizeXS.storyName = 'Размер XS';

export function WithLoading() {
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
}

WithLoading.storyName = 'С загрузкой';

interface SocialOption {
  Icon: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
  name: string;
}

export function CustomIcon() {
  const options: Array<SocialOption> = [
    { Icon: GoogleSVG, name: 'Google' },
    { Icon: VkSVG, name: 'VK' },
    { Icon: InstagramSVG, name: 'Instagram' },
    { Icon: TelegramSVG, name: 'Telegram' },
    { Icon: TwitterSVG, name: 'Twitter' },
  ];

  const [currentOption, selectOption] = useState<SocialOption>(options[0]);
  const Icon = currentOption.Icon;

  return (
    <>
      <Select
        label='Название организации / ФИО'
        value={currentOption.name}
        options={options}
        renderOption={option => option.name}
        optionSize='m'
        onSelect={selectOption}
        caption='Test caption'
        endAdornment={opened =>
          opened ? renderDefaultArrow(opened) : <Icon fill={COLORS.get('basic-gray38')} />
        }
      />
    </>
  );
}

CustomIcon.storyName = 'Особая иконка';
