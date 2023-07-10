import { mount, ReactWrapper } from 'enzyme';
import { act, Simulate } from 'react-dom/test-utils';
import { Select } from '..';
import { TextField } from '../../text-field';
import { render, fireEvent } from '@testing-library/react';
import GoogleSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Social/Google';

describe('Select', () => {
  const openMenu = (wrapper: ReactWrapper) => {
    act(() => {
      Simulate.keyDown(
        wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
        { key: 'Enter' },
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
      />,
    );

    expect(wrapper.getDOMNode()).toMatchSnapshot();
    openMenu(wrapper);
    expect(wrapper.getDOMNode()).toMatchSnapshot();
  });

  it('should handle TextField block click', () => {
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
      />,
    );

    expect(clickSpy).toHaveBeenCalledTimes(0);

    act(() => {
      Simulate.click(wrapper.find(TextField).find('[data-testid="text-field:block"]').getDOMNode());
    });
    wrapper.update();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle TextField mousedown', () => {
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
      />,
    );

    act(() => {
      Simulate.mouseDown(
        wrapper.find(TextField).find('[data-testid="text-field:block"]').getDOMNode(),
      );
    });
    wrapper.update();

    expect(wrapper.find('div[data-testid="select:menu"]')).toHaveLength(1);

    act(() => {
      Simulate.mouseDown(
        wrapper.find(TextField).find('[data-testid="text-field:block"]').getDOMNode(),
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
      />,
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
      />,
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);

    expect(wrapper.getDOMNode()).toMatchSnapshot();
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
      />,
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);

    act(() => {
      Simulate.keyDown(findMenu(wrapper).getDOMNode(), { key: 'Enter' });
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
      />,
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);

    act(() => {
      Simulate.keyDown(findMenu(wrapper).getDOMNode(), { key: 'E' });
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
      />,
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
      />,
    );

    expect(selectSpy).toHaveBeenCalledTimes(0);

    openMenu(wrapper);

    expect(selectSpy).toHaveBeenCalledTimes(0);

    act(() => {
      Simulate.click(wrapper.find('div[role="menuitem"]').at(2).getDOMNode());
    });
    wrapper.update();

    expect(selectSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle ReactNode in "endAdornment" prop', () => {
    const { getAllByTestId } = render(
      <Select
        label='Формат каталога'
        value='AAAA'
        options={['AAAA', 'BBBB', 'CCCC', 'DDDD', 'EEEE']}
        endAdornment={<GoogleSVG data-testid='google-svg' />}
      />,
    );

    expect(getAllByTestId('google-svg')).toHaveLength(1);
  });

  it('should handle function in "endAdornment" prop', () => {
    const { getAllByTestId, getByTestId } = render(
      <Select
        label='Формат каталога'
        value='AAAA'
        options={['AAAA', 'BBBB', 'CCCC', 'DDDD', 'EEEE']}
        endAdornment={opened => (
          <GoogleSVG data-testid={`google-svg-${opened ? 'opened' : 'closed'}`} />
        )}
      />,
    );

    expect(getAllByTestId('google-svg-closed')).toHaveLength(1);

    fireEvent.mouseDown(getByTestId('text-field:block'));

    expect(getAllByTestId('google-svg-opened')).toHaveLength(1);
  });
});
