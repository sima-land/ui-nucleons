import { createButtonStyle } from '../create-button-style';

describe('createButtonStyle', () => {
  it('returns right classes with correct data', () => {
    expect(createButtonStyle({})).toEqual('button button-pill button-clean');
    const cssParams = {
      color: 'blue',
      shape: 'rounded',
    };
    expect(createButtonStyle(cssParams)).toEqual('button button-rounded button-blue');
    cssParams.withShadow = true;
    expect(createButtonStyle(cssParams)).toEqual('button button-rounded button-blue with-shadow');
    cssParams.color = 'clean';
    cssParams.isFocused = true;
    expect(createButtonStyle(cssParams)).toEqual('button button-rounded button-clean button-clean-focused with-shadow');
    cssParams.className = 'test-class';
    expect(createButtonStyle(cssParams))
      .toEqual('button test-class button-rounded button-clean button-clean-focused with-shadow');
  });
  it('does not create wrong classes', () => {
    const cssParams = {
      color: 'red',
      shape: 'apple',
    };
    expect(createButtonStyle(cssParams)).toEqual('button button-pill button-clean');
  });
});
