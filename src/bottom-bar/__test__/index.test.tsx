import { it, expect, describe } from '@jest/globals';
import { render } from '@testing-library/react';
import { BottomBar } from '..';
import { CleanGroup, CleanButton } from '../../clean-buttons';

describe('BottomBar', () => {
  it('should handle "size" prop missing', () => {
    const { queryAllByTestId, getByTestId } = render(
      <BottomBar>
        <CleanGroup>
          <CleanButton>Кнопка</CleanButton>
          <CleanButton>Ещё кнопка</CleanButton>
        </CleanGroup>
      </BottomBar>,
    );

    expect(queryAllByTestId('bottom-bar')).toHaveLength(1);
    expect(getByTestId('bottom-bar').classList.contains('size-m')).toBe(true);
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(
      <BottomBar size='s' data-testid='my-bottom-bar'>
        <CleanGroup>
          <CleanButton>Кнопка</CleanButton>
          <CleanButton>Ещё кнопка</CleanButton>
        </CleanGroup>
      </BottomBar>,
    );

    expect(queryAllByTestId('bottom-bar')).toHaveLength(0);
    expect(queryAllByTestId('my-bottom-bar')).toHaveLength(1);
  });

  it('should set value to clean group size context', () => {
    const { getByTestId, queryAllByTestId } = render(
      <BottomBar size='l'>
        <CleanGroup>
          <CleanButton>Кнопка</CleanButton>
          <CleanButton>Ещё кнопка</CleanButton>
        </CleanGroup>
      </BottomBar>,
    );

    expect(getByTestId('bottom-bar').classList.contains('size-l')).toBe(true);
    expect(queryAllByTestId('clean-button').every(b => b.classList.contains('size-l'))).toBe(true);
  });
});
