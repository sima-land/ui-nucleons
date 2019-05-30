import createButtonStyle from '../create-button-style';

describe('createButtonStyle', () => {
  it('returns right classes with correct data', () => {
    expect(createButtonStyle({})).toEqual('button button_pill button_clean');
    const cssParams = {
      color: 'blue',
      shape: 'rounded',
    };
    expect(createButtonStyle(cssParams)).toEqual('button button_rounded button_blue');
    cssParams.withShadow = true;
    expect(createButtonStyle(cssParams)).toEqual('button button_rounded button_blue withShadow');
    cssParams.color = 'clean';
    cssParams.isFocused = true;
    expect(createButtonStyle(cssParams)).toEqual('button button_rounded button_clean button_clean_focused withShadow');
    cssParams.className = 'test-class';
    expect(createButtonStyle(cssParams))
      .toEqual('button test-class button_rounded button_clean button_clean_focused withShadow');
  });
  it('does not create wrong classes', () => {
    const cssParams = {
      color: 'red',
      shape: 'apple',
    };
    expect(createButtonStyle(cssParams)).toEqual('button button_pill button_clean');
  });
});
