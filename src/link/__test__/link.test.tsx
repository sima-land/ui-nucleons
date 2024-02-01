import { it, expect, describe, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { Link } from '../link';

describe('Link', () => {
  it('calls helpers with right params and renders correctly without external', () => {
    const { container } = render(
      <Link className='testClass' href='/cart/' color='basic-gray38' target='_blank'>
        Test link
      </Link>,
    );

    expect(container).toMatchSnapshot();
  });

  it('calls helpers and renders correctly with pseudo', () => {
    const { container } = render(
      <Link pseudo color='basic-gray38'>
        Test link
      </Link>,
    );

    expect(container).toMatchSnapshot();
  });

  it('calls helpers and renders correctly with external', () => {
    const { container } = render(
      <Link href='/cabinet/' color='basic-blue'>
        Test link
      </Link>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle "onClick/onMouseEnter/onMouseLeave..." props', () => {
    const onClickSpy = jest.fn();
    const onMouseEnterSpy = jest.fn();
    const onMouseLeaveSpy = jest.fn();

    const { getByTestId } = render(
      <Link onClick={onClickSpy} onMouseEnter={onMouseEnterSpy} onMouseLeave={onMouseLeaveSpy}>
        Test link
      </Link>,
    );

    fireEvent.click(getByTestId('anchor'));
    expect(onClickSpy).toHaveBeenCalledTimes(1);

    fireEvent.mouseEnter(getByTestId('anchor'));
    expect(onMouseEnterSpy).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(getByTestId('anchor'));
    expect(onMouseLeaveSpy).toHaveBeenCalledTimes(1);
  });

  it('should render regular (indexing) content properly', () => {
    const { container } = render(<Link href='www.test.com'>Test link</Link>);

    expect(container.textContent).toEqual('Test link');

    container.querySelector('a')?.childNodes.forEach(node => {
      expect(node instanceof Comment).toBe(false);
    });
  });

  it('render render pseudo link properly', () => {
    const { container } = render(<Link pseudo>Test link</Link>);

    expect(container).toMatchSnapshot();
  });

  it('render render pseudo link disabled properly', () => {
    const { container } = render(
      <Link pseudo disabled>
        Test link
      </Link>,
    );

    expect(container).toMatchSnapshot();
  });
});
