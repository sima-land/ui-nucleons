import { createLinkStyle, createLinkTextStyle, createExternalStyle } from '../create-link-style';

describe('Link helpers', () => {
  it('createLinkStyle returns correct link classes', () => {
    let linkClasses = createLinkStyle({});
    expect(linkClasses).toEqual('link link-can-be-hovered link-block');
    linkClasses = createLinkStyle({ className: 'test-class', disableHoverEffect: true, inline: true });
    expect(linkClasses).toEqual('test-class link');
  });
  it('createLinkTextStyle returns correct text classes', () => {
    let textClasses = createLinkTextStyle({});
    expect(textClasses).toEqual('link-text link-blue');
    textClasses = createLinkTextStyle({ color: 'black', underlineType: 'solid', external: true });
    expect(textClasses).toEqual('link-text link-black link-external link-underlined link-underlined-solid');
    textClasses = createLinkTextStyle({ color: 'gray', underlineType: 'dashed' });
    expect(textClasses).toEqual('link-text link-gray link-underlined link-underlined-dashed');
    textClasses = createLinkTextStyle({ color: 'wrongColor', underlineType: 'wrongType' });
    expect(textClasses).toEqual('link-text link-blue');
  });
  it('createExternalStyle returns correct external classes', () => {
    let externalClasses = createExternalStyle();
    expect(externalClasses).toEqual('icon-external external-blue');
    externalClasses = createExternalStyle('white');
    expect(externalClasses).toEqual('icon-external external-white');
    externalClasses = createExternalStyle('black');
    expect(externalClasses).toEqual('icon-external external-black');
  });
});
