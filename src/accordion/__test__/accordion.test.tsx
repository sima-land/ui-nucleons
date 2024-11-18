import { fireEvent, render } from '@testing-library/react';
import { Accordion } from '../accordion';
import { useContext } from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  __esModule: true,
  useContext: jest.fn(),
}));

describe('Accordion', () => {
  const mockContext = {
    selected: jest.fn().mockReturnValue(3213),
    register: jest.fn().mockReturnValue(123),
    unregister: jest.fn(),
    toggle: jest.fn(),
  };

  (useContext as jest.Mock).mockReturnValue(mockContext);

  it('При монтировании аккордеон должен зарегистрироваться, а при размонтировании разрегистрироваться из общего стейта', () => {
    expect(mockContext.register).toHaveBeenCalledTimes(0);
    const { unmount } = render(<Accordion groupId='test-group' title='Заголовок' />);
    expect(mockContext.register).toHaveBeenCalledTimes(1);
    expect(mockContext.register).toHaveBeenCalledWith('test-group', undefined);

    expect(mockContext.unregister).toHaveBeenCalledTimes(0);
    unmount();
    expect(mockContext.unregister).toHaveBeenCalledTimes(1);
    expect(mockContext.unregister).toHaveBeenCalledWith('test-group', 123);
  });

  it('Должен вызываться toggle при нажатии на кнопку - заголовок аккордеона', () => {
    const { getByRole } = render(<Accordion theme='dark' groupId='test-group' title='Заголовок' />);
    expect(mockContext.toggle).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button'));
    expect(mockContext.toggle).toHaveBeenCalledTimes(1);
    expect(mockContext.toggle).toHaveBeenCalledWith('test-group', 123);
  });

  it('Для открытых аккордеонов должна быть установлена высота относительно высоты их контента', () => {
    const selected = jest.fn().mockReturnValue(123);
    const register = jest.fn().mockReturnValue(123);
    (useContext as jest.Mock).mockReturnValue({ ...mockContext, selected, register });
    const { getByRole } = render(
      <Accordion
        theme='dark'
        groupId='test-group'
        title='Заголовок'
        description='Это текстовое описание под контентом аккордеона после открытия'
      />,
    );
    expect(getByRole('region').style.height).toEqual('0px');
  });
});
