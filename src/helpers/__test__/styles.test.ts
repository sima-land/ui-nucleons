import { getTransitionStyle, getTranslateStyle, setViewportHeightUnit } from '../styles';

describe('getTranslateStyle()', () => {
  it('should works properly', () => {
    expect(getTranslateStyle()).toBe('translate3d(0px, 0px, 0px)');
    expect(getTranslateStyle(100, 200, 300)).toBe('translate3d(100px, 200px, 300px)');
  });
});

describe('getTransitionStyle()', () => {
  it('should works properly', () => {
    expect(getTransitionStyle()).toBe('all 0ms ease-out');
    expect(getTransitionStyle(100)).toBe('all 100ms ease-out');
    expect(getTransitionStyle(100, 'top')).toBe('top 100ms ease-out');
    expect(getTransitionStyle(100, 'top', 'ease-in-out')).toBe('top 100ms ease-in-out');
    expect(getTransitionStyle(undefined, 'top', 'ease-in-out')).toBe('top 0ms ease-in-out');
  });
});

describe('setViewportHeightUnit', () => {
  it('should set property', () => {
    const element = document.createElement('div');

    expect(element.style.getPropertyValue('--vh')).toBe('');
    setViewportHeightUnit(element);
    expect(element.style.getPropertyValue('--vh')).toBe('7.68px');
  });

  it('should set property when visualViewport is null', () => {
    const original = window.visualViewport;
    window.visualViewport = null;

    const element = document.createElement('div');

    expect(element.style.getPropertyValue('--vh')).toBe('');
    setViewportHeightUnit(element);
    expect(element.style.getPropertyValue('--vh')).toBe('7.68px');

    window.visualViewport = original;
  });
});
