import { useContext, useEffect, useState } from 'react';
import { AccordionContext, AccordionProvider } from '../accordion-provider';
import { fireEvent, render } from '@testing-library/react';

describe('AccordionProvider', () => {
  const fakeSetExpand = jest.fn();
  const TestComponent = ({ name = 'test1' }: any) => {
    const { register, unregister, closeGroup } = useContext(AccordionContext);
    useEffect(() => {
      const id = register(name, fakeSetExpand);
      return () => unregister(name, id);
    }, []);

    return <div data-testid='close-all-div' onClick={() => closeGroup(name)} />;
  };
  it('should close all registered accordions in group', () => {
    const { getAllByTestId } = render(
      <AccordionProvider>
        <TestComponent />
        <TestComponent />
      </AccordionProvider>,
    );

    fireEvent.click(getAllByTestId('close-all-div')[0]);
    expect(fakeSetExpand).toHaveBeenCalledTimes(2);
  });

  it('should unregister elements', () => {
    const Component = () => {
      const [open, setOpen] = useState(true);
      return (
        <AccordionProvider>
          {open && (
            <>
              <TestComponent />
              <TestComponent />
            </>
          )}
          <TestComponent name='test1' />
          <div data-testid='fake-button' onClick={() => setOpen(!open)} />
        </AccordionProvider>
      );
    };
    const { getByTestId } = render(<Component />);

    fireEvent.click(getByTestId('fake-button'));
    fireEvent.click(getByTestId('close-all-div'));
    expect(fakeSetExpand).toHaveBeenCalledTimes(1);
  });
});
