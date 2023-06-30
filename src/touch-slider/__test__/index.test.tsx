import { render } from '@testing-library/react';
import { TouchSlider } from '..';

describe('<TouchSlider />', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <TouchSlider>
        <div>Foo</div>
        <div>Bar</div>
        <div>Baz</div>
      </TouchSlider>,
    );

    expect(container).toMatchSnapshot();
  });
});
