import { useContext, useState } from 'react';
import { AccordionContext, AccordionProvider } from '../accordion-provider';
import { fireEvent, render } from '@testing-library/react';

describe('AccordionProvider', () => {
  const TestComponent = () => {
    const groupId = 'test1';
    const { register, unregister, toggle, selected } = useContext(AccordionContext);
    const [selectedSymbol, select] = useState(Symbol());

    return (
      <div>
        <div
          data-testid='register-div-with-initial'
          onClick={() => select(register(groupId, true))}
        />
        <div data-testid='register-div' onClick={() => select(register(groupId))} />
        <div data-testid='unregister-div' onClick={() => unregister(groupId, selectedSymbol)} />
        <div data-testid='toggle-div' onClick={() => toggle(groupId, selectedSymbol)} />
        <div data-testid='selected-div' children={selected(groupId)?.description} />
      </div>
    );
  };

  it('Должен зарегистрировать блок в стор и разрегистрировать', () => {
    const { getByTestId } = render(
      <AccordionProvider>
        <TestComponent />
      </AccordionProvider>,
    );

    fireEvent.click(getByTestId('register-div'));
    fireEvent.click(getByTestId('register-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
    fireEvent.click(getByTestId('unregister-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
    fireEvent.click(getByTestId('register-div'));
    fireEvent.click(getByTestId('register-div-with-initial'));
    expect(getByTestId('selected-div').innerHTML).toBe('test1');
  });

  it('Должен переключить статус открытия с закрытого на открытый и наоборот', () => {
    const { getByTestId } = render(
      <AccordionProvider>
        <TestComponent />
      </AccordionProvider>,
    );

    fireEvent.click(getByTestId('register-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
    fireEvent.click(getByTestId('toggle-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('test1');
    fireEvent.click(getByTestId('toggle-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
  });

  it('Вне провайдера ничего не должно меняться и обрабатываться', () => {
    const { getByTestId } = render(<TestComponent />);

    fireEvent.click(getByTestId('register-div-with-initial'));
    fireEvent.click(getByTestId('unregister-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
    fireEvent.click(getByTestId('toggle-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
    fireEvent.click(getByTestId('toggle-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
  });

  it('При регистрации должен остаться только 1 открытый элемент в группе', () => {
    const { getByTestId } = render(
      <AccordionProvider>
        <TestComponent />
      </AccordionProvider>,
    );
    fireEvent.click(getByTestId('register-div'));
    fireEvent.click(getByTestId('register-div-with-initial'));
    fireEvent.click(getByTestId('register-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('test1');
  });

  it('При удалении группы, если группа осталась пуста - она должна быть удалена', () => {
    const { getByTestId } = render(
      <AccordionProvider>
        <TestComponent />
      </AccordionProvider>,
    );
    fireEvent.click(getByTestId('register-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
    fireEvent.click(getByTestId('unregister-div'));
    expect(() => {
        fireEvent.click(getByTestId('unregister-div'));
    }).toThrow('')
  });
});
