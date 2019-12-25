import { createLinkStyle } from '../create-link-style';

describe('Link helpers', () => {
  it('createLinkStyle returns correct link classes', () => {
    let linkClasses = createLinkStyle({});
    expect(linkClasses).toEqual('link link-blue link-can-be-hovered');
    linkClasses = createLinkStyle({ className: 'test-class', disableHoverEffect: true });
    expect(linkClasses).toEqual('test-class link link-blue');
    linkClasses = createLinkStyle({ color: 'black', underlineType: 'solid', external: true });
    expect(linkClasses).toEqual('link link-black link-can-be-hovered link-underlined link-underlined-solid');
    linkClasses = createLinkStyle({ color: 'gray', underlineType: 'dashed' });
    expect(linkClasses).toEqual('link link-gray link-can-be-hovered link-underlined link-underlined-dashed');
    linkClasses = createLinkStyle({ color: 'wrongColor', underlineType: 'wrongType' });
    expect(linkClasses).toEqual('link link-blue link-can-be-hovered');
  });
});
