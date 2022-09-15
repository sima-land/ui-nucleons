import { render } from '@testing-library/react';
import React from 'react';
import { FieldBlock } from '..';
import CopySVG from '@sima-land/ui-quarks/icons/16x16/Stroked/copy';
import LockSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/lock';

describe('FiledBlock', () => {
  it('should renders correctly', () => {
    const { container } = render(<FieldBlock />);

    expect(container).toMatchSnapshot();
  });

  it('should handle size prop', () => {
    const { container, rerender } = render(<FieldBlock size='xs' />);

    expect(container).toMatchSnapshot();

    rerender(<FieldBlock size='s' />);

    expect(container).toMatchSnapshot();

    rerender(<FieldBlock size='l' />);

    expect(container).toMatchSnapshot();
  });

  it('should render label only on L size', () => {
    const { rerender, queryAllByTestId } = render(<FieldBlock size='l' label='Some label' />);
    expect(queryAllByTestId('field:label')).toHaveLength(1);

    rerender(<FieldBlock size='s' label='Some label' />);
    expect(queryAllByTestId('field:label')).toHaveLength(0);

    rerender(<FieldBlock size='xs' label='Some label' />);
    expect(queryAllByTestId('field:label')).toHaveLength(0);
  });

  it('should render adornments', () => {
    const { container, rerender, queryAllByTestId } = render(<FieldBlock />);

    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('field:adornment-start')).toHaveLength(0);
    expect(queryAllByTestId('field:adornment-end')).toHaveLength(0);

    rerender(<FieldBlock adornmentStart={<CopySVG />} />);

    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('field:adornment-start')).toHaveLength(1);
    expect(queryAllByTestId('field:adornment-end')).toHaveLength(0);

    rerender(<FieldBlock adornmentStart={<CopySVG />} adornmentEnd={<LockSVG />} />);

    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('field:adornment-start')).toHaveLength(1);
    expect(queryAllByTestId('field:adornment-end')).toHaveLength(1);
  });

  it('should render caption', () => {
    const { container, rerender, queryAllByTestId } = render(<FieldBlock />);

    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('field:caption')).toHaveLength(0);

    rerender(<FieldBlock caption='Some caption' />);
    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('field:caption')).toHaveLength(1);
  });
});
