import { fireEvent, render } from '@testing-library/react';
import { Accordion } from '../accordion';
import { AccordionContext } from '../accordion-provider';
import { ResizeObserverContext } from '../../context';
import { ResizeObserverMock } from '../../test-utils';

describe('Accordion', () => {
  const mockContext = {
    register: jest.fn().mockReturnValue(123),
    unregister: jest.fn(),
    closeGroup: jest.fn(),
  };

  it('should call unregister from AccordionContext with unmount component', () => {
    const { unmount } = render(
      <AccordionContext.Provider value={mockContext}>
        <Accordion name='test-group' summary='Заголовок' />
      </AccordionContext.Provider>,
    );
    expect(mockContext.unregister).toHaveBeenCalledTimes(0);
    unmount();
    expect(mockContext.unregister).toHaveBeenCalledTimes(1);
    expect(mockContext.unregister).toHaveBeenCalledWith('test-group', 123);
  });

  it('should call expandGroup from AccordionContext with click on header', () => {
    const fakeOnToggle = jest.fn();
    const { getByRole } = render(
      <AccordionContext.Provider value={mockContext}>
        <Accordion theme='dark' name='test-group' summary='Заголовок' onToggle={fakeOnToggle} />
      </AccordionContext.Provider>,
    );
    expect(mockContext.closeGroup).toHaveBeenCalledTimes(0);
    expect(fakeOnToggle).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button'));
    expect(mockContext.closeGroup).toHaveBeenCalledTimes(1);
    expect(mockContext.closeGroup).toHaveBeenCalledWith('test-group');
    expect(fakeOnToggle).toHaveBeenCalledTimes(1);
    expect(fakeOnToggle).toHaveBeenCalledWith(true);
  });

  it('Должен корректно отобразить заголовок аккордеона', () => {
    const { getAllByRole } = render(
      <ResizeObserverContext.Provider
        value={{ createResizeObserver: ResizeObserverMock.createRegistry().getObserver }}
      >
        <Accordion
          theme='dark'
          name='test-group'
          summary='Заголовок'
          description='Это текстовое описание под контентом аккордеона после открытия'
          open
        />
      </ResizeObserverContext.Provider>,
    );
    expect(getAllByRole('heading', { name: 'Заголовок' })).toHaveLength(1);
  });

  it('Не должен регистрировать группу без имени', () => {
    render(
      <AccordionContext.Provider value={mockContext}>
        <Accordion
          theme='dark'
          summary='Заголовок'
          description='Это текстовое описание под контентом аккордеона после открытия'
          open
        />
      </AccordionContext.Provider>,
    );
    expect(mockContext.register).not.toHaveBeenCalled();
  });
});
