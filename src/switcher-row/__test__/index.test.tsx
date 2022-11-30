import React from 'react';
import { render } from '@testing-library/react';
import { SwitcherRow } from '..';
import { Checkbox } from '../../checkbox';
import { Toggle } from '../../toggle';
import { RadioButton } from '../../radio-button';

describe('SwitcherRow', () => {
  it('should render Checkbox, label and comment', () => {
    const { getByTestId } = render(
      <SwitcherRow>
        <Checkbox id='test-checkbox' defaultChecked />
        <SwitcherRow.Label>Hello</SwitcherRow.Label>
        <SwitcherRow.Comment>World</SwitcherRow.Comment>
      </SwitcherRow>,
    );

    expect(getByTestId('checkbox').id).toBe('test-checkbox');
    expect(getByTestId('switcher-row:label').textContent).toBe('Hello');
    expect(getByTestId('switcher-row:comment').textContent).toBe('World');
  });

  it('should render Toggle, label and comment', () => {
    const { getByTestId } = render(
      <SwitcherRow>
        <Toggle id='test-toggle' defaultChecked />
        <SwitcherRow.Label>Hello</SwitcherRow.Label>
        <SwitcherRow.Comment>World</SwitcherRow.Comment>
      </SwitcherRow>,
    );

    expect(getByTestId('toggle').id).toBe('test-toggle');
    expect(getByTestId('switcher-row:label').textContent).toBe('Hello');
    expect(getByTestId('switcher-row:comment').textContent).toBe('World');
  });

  it('should render RadioButton, label and comment', () => {
    const { getByTestId } = render(
      <SwitcherRow>
        <RadioButton id='test-radio-button' />
        <SwitcherRow.Label>Hello</SwitcherRow.Label>
        <SwitcherRow.Comment>World</SwitcherRow.Comment>
      </SwitcherRow>,
    );

    expect(getByTestId('radio-button').id).toBe('test-radio-button');
    expect(getByTestId('switcher-row:label').textContent).toBe('Hello');
    expect(getByTestId('switcher-row:comment').textContent).toBe('World');
  });

  it('should render field column at end', () => {
    const { getByTestId, rerender } = render(
      <SwitcherRow fieldPosition='end'>
        <Checkbox id='test-checkbox' />
        <SwitcherRow.Label>Hello</SwitcherRow.Label>
        <SwitcherRow.Comment>World</SwitcherRow.Comment>
      </SwitcherRow>,
    );

    const root = getByTestId('switcher-row');

    expect(root.firstElementChild?.classList.contains('main-col')).toBe(true);
    expect(root.lastElementChild?.classList.contains('field-col')).toBe(true);

    rerender(
      <SwitcherRow fieldPosition='start'>
        <Checkbox id='test-checkbox' />
        <SwitcherRow.Label>Hello</SwitcherRow.Label>
        <SwitcherRow.Comment>World</SwitcherRow.Comment>
      </SwitcherRow>,
    );
    expect(root.firstElementChild?.classList.contains('field-col')).toBe(true);
    expect(root.lastElementChild?.classList.contains('main-col')).toBe(true);
  });
});
