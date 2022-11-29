import { fireEvent, render } from '@testing-library/react';
import React from 'react';
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
    expect(getByTestId('info-text:icon').getAttribute('role')).toBe('button');
    expect(getByTestId('info-text:icon').getAttribute('aria-label')).toBe('Подробнее');
    expect(spy).toBeCalledTimes(0);
    fireEvent.click(getByTestId('info-text:icon'));
    expect(spy).toBeCalledTimes(1);
    fireEvent.keyDown(getByTestId('info-text:icon'), { code: 'Enter' });
    expect(spy).toBeCalledTimes(2);
    fireEvent.keyDown(getByTestId('info-text:icon'), { code: 'Space' });
    expect(spy).toBeCalledTimes(3);
  });
});
