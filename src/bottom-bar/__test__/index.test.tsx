import React from 'react';
import { render } from '@testing-library/react';
import { BottomBar } from '..';
import { Clean } from '../../clean-buttons';

describe('BottomBar', () => {
  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(
      <BottomBar size='s' data-testid='my-bottom-bar'>
        <Clean.Group>
          <Clean.Button>Кнопка</Clean.Button>
          <Clean.Button>Ещё кнопка</Clean.Button>
        </Clean.Group>
      </BottomBar>,
    );

    expect(queryAllByTestId('bottom-bar')).toHaveLength(0);
    expect(queryAllByTestId('my-bottom-bar')).toHaveLength(1);
  });
});
