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
    selectOpenedId: jest.fn().mockReturnValue(3213),
    register: jest.fn().mockReturnValue(123),
    unregister: jest.fn(),
    toggle: jest.fn(),
  };

  (useContext as jest.Mock).mockReturnValue(mockContext);

  it('При размонтировании должен вызываться unregister', () => {
    const { unmount } = render(<Accordion name='test-group' summary='Заголовок' />);
    expect(mockContext.unregister).toHaveBeenCalledTimes(0);
    unmount();
    expect(mockContext.unregister).toHaveBeenCalledTimes(1);
    expect(mockContext.unregister).toHaveBeenCalledWith('test-group', 123);
  });

  it('Должен вызываться toggle и onClick при нажатии на кнопку - заголовок аккордеона', () => {
    const fakeOnClick = jest.fn();
    const { getByRole } = render(
      <Accordion theme='dark' name='test-group' summary='Заголовок' onClick={fakeOnClick} />,
    );
    expect(mockContext.toggle).toHaveBeenCalledTimes(0);
    expect(fakeOnClick).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button'));
    expect(mockContext.toggle).toHaveBeenCalledTimes(1);
    expect(mockContext.toggle).toHaveBeenCalledWith('test-group', 123);
    expect(fakeOnClick).toHaveBeenCalledTimes(1);
    expect(fakeOnClick).toHaveBeenCalledWith(fakeOnClick.mock.calls[0][0], true);
  });

  it('Для открытых аккордеонов должна быть установлена высота относительно высоты их контента', () => {
    const selectOpenedId = jest.fn().mockReturnValue(123);
    const register = jest.fn().mockReturnValue(123);
    (useContext as jest.Mock).mockReturnValue({ ...mockContext, selectOpenedId, register });
    const { getByRole } = render(
      <Accordion
        theme='dark'
        name='test-group'
        summary='Заголовок'
        description='Это текстовое описание под контентом аккордеона после открытия'
      />,
    );
    expect(getByRole('region').style.height).toEqual('0px');
  });
});
