import React from 'react';
import { render } from '@testing-library/react';
import { StrokedSVG } from '..';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';

describe('StrokedSVG', () => {
  it('should renders correctly', () => {
    const { container } = render(<StrokedSVG component={FavoriteSVG} />);

    expect(container).toMatchSnapshot();
  });

  it('should handle extra props', () => {
    const { container } = render(
      <StrokedSVG
        component={FavoriteSVG}
        fill='#f00'
        stroke='#0f0'
        strokeWidth={2}
        className='root-element'
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
