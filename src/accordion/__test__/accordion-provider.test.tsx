import { useContext, useState } from 'react';
import { AccordionContext, AccordionProvider } from '../accordion-provider';
import { fireEvent, render } from '@testing-library/react';

describe('AccordionProvider', () => {
  const TestComponent = () => {
    const groupId = 'test1';
    const { register, unregister, toggle, selectOpenedId } = useContext(AccordionContext);
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
        <div data-testid='selected-div' children={selectOpenedId(groupId)?.description} />
      </div>
    );
  };

  it('should register all elements and selected only last initialed', () => {
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

  it('should toggle open status', () => {
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

  it('Nothing should be processed outside the provider', () => {
    const { getByTestId } = render(<TestComponent />);

    fireEvent.click(getByTestId('register-div-with-initial'));
    fireEvent.click(getByTestId('unregister-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
    fireEvent.click(getByTestId('toggle-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
    fireEvent.click(getByTestId('toggle-div'));
    expect(getByTestId('selected-div').innerHTML).toBe('');
  });

  it('with register should open only 1 accordion', () => {
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

  it('should delete group if deleting last element', () => {
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
    }).toThrow('');
  });
});
