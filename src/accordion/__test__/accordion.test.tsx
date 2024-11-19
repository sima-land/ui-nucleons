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

  it('should call unregister from AccordionContext with unmount component', () => {
    const { unmount } = render(<Accordion name='test-group' summary='Заголовок' />);
    expect(mockContext.unregister).toHaveBeenCalledTimes(0);
    unmount();
    expect(mockContext.unregister).toHaveBeenCalledTimes(1);
    expect(mockContext.unregister).toHaveBeenCalledWith('test-group', 123);
  });

  it('should call onToggle from AccordionContext with click on header', () => {
    const fakeOnToggle = jest.fn();
    const { getByRole } = render(
      <Accordion theme='dark' name='test-group' summary='Заголовок' onToggle={fakeOnToggle} />,
    );
    expect(mockContext.toggle).toHaveBeenCalledTimes(0);
    expect(fakeOnToggle).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button'));
    expect(mockContext.toggle).toHaveBeenCalledTimes(1);
    expect(mockContext.toggle).toHaveBeenCalledWith('test-group', 123);
    expect(fakeOnToggle).toHaveBeenCalledTimes(1);
    expect(fakeOnToggle).toHaveBeenCalledWith(true);
  });

  it('for opened accordion style.height is relative content height', () => {
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
