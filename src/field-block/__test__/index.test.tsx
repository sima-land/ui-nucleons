import React from 'react';
import { render } from '@testing-library/react';
import { FieldBlock } from '..';
import CopySVG from '@sima-land/ui-quarks/icons/16x16/Stroked/copy';
import LockSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/lock';

describe('FiledBlock', () => {
  it('should renders correctly', () => {
    const { queryAllByTestId } = render(<FieldBlock />);

    expect(queryAllByTestId('field-block')).toHaveLength(1);
    expect(queryAllByTestId('field-block:block')).toHaveLength(1);
    expect(queryAllByTestId('field-block:main')).toHaveLength(1);
  });

  it('should handle "size" prop', () => {
    const { getByTestId, rerender } = render(<FieldBlock />);

    expect(getByTestId('field-block').classList).toContain('size-l');

    rerender(<FieldBlock size='s' />);
    expect(getByTestId('field-block').classList).toContain('size-s');

    rerender(<FieldBlock size='l' />);
    expect(getByTestId('field-block').classList).toContain('size-l');

    rerender(<FieldBlock size='m' />);
    expect(getByTestId('field-block').classList).toContain('size-m');
  });

  it('should render label only on L size', () => {
    const { rerender, queryAllByTestId } = render(<FieldBlock size='l' label='Some label' />);
    expect(queryAllByTestId('field-block:label')).toHaveLength(1);

    rerender(<FieldBlock size='s' label='Some label' />);
    expect(queryAllByTestId('field-block:label')).toHaveLength(0);

    rerender(<FieldBlock size='m' label='Some label' />);
    expect(queryAllByTestId('field-block:label')).toHaveLength(0);
  });

  it('should render adornments', () => {
    const { rerender, queryAllByTestId } = render(<FieldBlock />);

    expect(queryAllByTestId('field-block:adornment-start')).toHaveLength(0);
    expect(queryAllByTestId('field-block:adornment-end')).toHaveLength(0);

    rerender(<FieldBlock adornmentStart={<CopySVG />} />);

    expect(queryAllByTestId('field-block:adornment-start')).toHaveLength(1);
    expect(queryAllByTestId('field-block:adornment-end')).toHaveLength(0);

    rerender(<FieldBlock adornmentStart={<CopySVG />} adornmentEnd={<LockSVG />} />);

    expect(queryAllByTestId('field-block:adornment-start')).toHaveLength(1);
    expect(queryAllByTestId('field-block:adornment-end')).toHaveLength(1);
  });

  it('should render caption', () => {
    const { rerender, queryAllByTestId } = render(<FieldBlock />);

    expect(queryAllByTestId('field-block:caption')).toHaveLength(0);

    rerender(<FieldBlock caption='Some caption' />);

    expect(queryAllByTestId('field-block:caption')).toHaveLength(1);
  });

  it('should NOT allow to override "data-testid" on child elements', () => {
    const { queryAllByTestId } = render(
      <FieldBlock
        label='My label slot'
        labelProps={{ 'data-testid': 'my-custom-label' } as any}
        blockProps={{ 'data-testid': 'my-custom-block' } as any}
        main={<div>My main slot</div>}
        mainProps={{ 'data-testid': 'my-custom-main' } as any}
      />,
    );

    expect(queryAllByTestId('my-custom-label')).toHaveLength(0);
    expect(queryAllByTestId('my-custom-block')).toHaveLength(0);
    expect(queryAllByTestId('my-custom-main')).toHaveLength(0);

    expect(queryAllByTestId('field-block:label')).toHaveLength(1);
    expect(queryAllByTestId('field-block:block')).toHaveLength(1);
    expect(queryAllByTestId('field-block:main')).toHaveLength(1);
  });
});
