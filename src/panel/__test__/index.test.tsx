import { render } from '@testing-library/react';
import { Panel } from '..';
import LockSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Lock';
import InformationSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';

describe('<Panel />', () => {
  it('should renders without props', () => {
    const { container } = render(<Panel />);

    expect(container).toMatchSnapshot();
  });

  it('should handle props', () => {
    const { container } = render(
      <Panel adornmentStart={<InformationSVG />} adornmentEnd={<LockSVG />} className='test-class'>
        Hello, world!
      </Panel>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle unknown content', () => {
    const markup = 'Lorem <i data-testid="ipsum">ipsum</i> <b>dolor</b> sit.';

    const { container, queryAllByTestId } = render(
      <Panel className='test-class'>
        <Panel.UnknownContent markup={markup} />
      </Panel>,
    );

    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('ipsum')).toHaveLength(1);
  });

  it('should handle "data-testid" prop', () => {
    const { container } = render(<Panel data-testid='other-panel'>Hello, world!</Panel>);

    expect(container.querySelectorAll('[data-testid="modal"]')).toHaveLength(0);
    expect(container.querySelectorAll('[data-testid="other-panel"]')).toHaveLength(1);
  });
});
