import { act, fireEvent, render } from '@testing-library/react';
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
    expect(mockContext.unregister).toHaveBeenCalledWith('test-group', expect.any(Symbol));
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

  it('for opened accordion style.height is relative content height', () => {
    const { getByRole } = render(
      <AccordionContext.Provider value={mockContext}>
        <Accordion
          theme='dark'
          name='test-group'
          summary='Заголовок'
          description='Это текстовое описание под контентом аккордеона после открытия'
          open
        />
      </AccordionContext.Provider>,
    );
    expect(getByRole('region').style.maxHeight).toEqual(String(getByRole('region').scrollHeight));
  });

  it('should update content height after resize', () => {
    const observers = ResizeObserverMock.createRegistry();
    const { getByRole } = render(
      <ResizeObserverContext.Provider value={{ createResizeObserver: observers.getObserver }}>
        <Accordion
          theme='dark'
          name='test-group'
          summary='Заголовок'
          description='Это текстовое описание под контентом аккордеона после открытия'
          open
        />
      </ResizeObserverContext.Provider>,
    );
    const button = getByRole('region');
    expect(button.style.maxHeight).toEqual('0');
    act(() => {
      Object.defineProperty(button, 'scrollHeight', {
        value: 320,
      });

      observers.simulateEntryChange({ target: button });
    });

    expect(button.style.maxHeight).toEqual('320px');
  });

  it('should update content height after resize on default value is 0', () => {
    const observers = ResizeObserverMock.createRegistry();
    const { getByRole } = render(
      <ResizeObserverContext.Provider value={{ createResizeObserver: observers.getObserver }}>
        <Accordion
          theme='dark'
          summary='Заголовок'
          description='Это текстовое описание под контентом аккордеона после открытия'
          open
        />
      </ResizeObserverContext.Provider>,
    );
    const button = getByRole('region');
    act(() => {
      Object.defineProperty(button, 'scrollHeight', {
        value: 320,
        configurable: true,
      });
      observers.simulateEntryChange({ target: button });
    });
    expect(button.style.maxHeight).toEqual('320px');

    act(() => {
      Object.defineProperty(button, 'scrollHeight', {
        value: undefined,
        configurable: true,
      });
      observers.simulateEntryChange({ target: button });
    });
    expect(button.style.maxHeight).toEqual('0');
  });
});
