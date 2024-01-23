import { it, expect, describe, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { InfoText } from '..';

describe('InfoText', () => {
  it('should render text properly', () => {
    const text = 'Lorem ipsum dolor sit amet.';
    const { getByTestId } = render(<InfoText>{text}</InfoText>);

    expect(getByTestId('info-text').textContent).toBe(text);
    expect(getByTestId('info-text').querySelector('span')?.textContent).toBe(' amet.');
  });

  it('should render non text content properly', () => {
    const { getByTestId } = render(
      <InfoText>
        Lorem ipsum dolor sit amet consectetur <b>hello</b> adipisicing elit. Voluptatum, sapiente.
      </InfoText>,
    );

    expect(getByTestId('info-text').textContent).toBe(
      'Lorem ipsum dolor sit amet consectetur hello adipisicing elit. Voluptatum, sapiente.',
    );

    expect(getByTestId('info-text').querySelector('span')?.textContent).toBe(' sapiente.');
  });

  it('info icon should handle click/keydown as click', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<InfoText onIconClick={spy}>Hello</InfoText>);

    expect(getByTestId('info-text:icon').tabIndex).toBe(0);
    expect(getByTestId('info-text:icon').getAttribute('aria-label')).toBe('Подробнее');
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('info-text:icon'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "iconRef" prop', () => {
    const ref = createRef<HTMLButtonElement>();

    const { getByTestId } = render(
      <InfoText iconRef={ref} onIconClick={jest.fn()}>
        Hello
      </InfoText>,
    );

    expect(ref.current instanceof HTMLButtonElement).toBe(true);
    expect(ref.current === (getByTestId('info-text:icon') as Element)).toBe(true);
  });
});
