import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act, Simulate } from 'react-dom/test-utils';
import { Select } from '..';
import { TextField } from '../../text-field';

describe('Select', () => {
  const openMenu = (wrapper: ReactWrapper) => {
    act(() => {
      Simulate.keyDown(
        wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
        { key: 'Enter' }
      );
    });
    wrapper.update();
  };

  const findMenu = (wrapper: ReactWrapper) => wrapper.find('div[data-testid="select:menu"]');

  it('should renders correctly', () => {
    const menuToggleSpy = jest.fn();
    const selectSpy = jest.fn();
    const clickSpy = jest.fn();

    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        onMenuToggle={menuToggleSpy}
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
        optionSize='m'
        onSelect={selectSpy}
        onClick={clickSpy}
        renderOption={option => option.toUpperCase()}
      />
    );

    expect(wrapper).toMatchSnapshot();
    openMenu(wrapper);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle TextField click', () => {
    const clickSpy = jest.fn();

    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
        onClick={clickSpy}
      />
    );

    expect(clickSpy).toHaveBeenCalledTimes(0);

    act(() => {
      Simulate.click(wrapper.find(TextField).find('[data-testid="text-field:block"]').getDOMNode());
    });
    wrapper.update();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle TextField blur', () => {
    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
      />
    );

    act(() => {
      Simulate.click(wrapper.find(TextField).find('[data-testid="text-field:block"]').getDOMNode());
    });
    wrapper.update();

    expect(wrapper.find('div[data-testid="select:menu"]')).toHaveLength(1);

    act(() => {
      Simulate.blur(
        wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
        { relatedTarget: document.createElement('div') }
      );
    });
    wrapper.update();

    expect(wrapper.find('div[data-testid="select:menu"]')).toHaveLength(0);
  });

  it('should handle TextField enter key down', () => {
    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
      />
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);
  });

  it('should render loading state', () => {
    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
        loading
      />
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle menu enter key down', () => {
    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
      />
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);

    act(() => {
      Simulate.keyDown(
        findMenu(wrapper).getDOMNode(),
        { key: 'Enter' }
      );
    });
    wrapper.update();
    expect(findMenu(wrapper)).toHaveLength(0);
  });

  it('should handle menu not enter key down', () => {
    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
      />
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);

    act(() => {
      Simulate.keyDown(
        findMenu(wrapper).getDOMNode(),
        { key: 'E' }
      );
    });
    wrapper.update();
    expect(findMenu(wrapper)).toHaveLength(1);
  });

  it('should handle menu blur', () => {
    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
      />
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);

    act(() => {
      Simulate.blur(findMenu(wrapper).getDOMNode());
    });
    wrapper.update();
    expect(findMenu(wrapper)).toHaveLength(0);
  });

  it('should handle menu outside click', () => {
    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
      />
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });
    wrapper.update();
    expect(findMenu(wrapper)).toHaveLength(0);
  });

  it('should handle menu item select', () => {
    const selectSpy = jest.fn();

    const wrapper = mount(
      <Select
        label='Формат каталога'
        value='Карточки товаров JPG'
        options={[
          'Прайс-лист XML',
          'Прайс-лист YML',
          'Карточки товаров JPG',
          'Фото товаров JPG + прайс-лист XLS',
          'Печатный каталог PDF',
        ]}
        optionSize='m'
        onSelect={selectSpy}
      />
    );

    expect(selectSpy).toBeCalledTimes(0);

    openMenu(wrapper);

    expect(selectSpy).toBeCalledTimes(0);

    act(() => {
      Simulate.click(
        wrapper.find('div[role="menuitem"]').at(2).getDOMNode()
      );
    });
    wrapper.update();

    expect(selectSpy).toBeCalledTimes(1);
  });
});
