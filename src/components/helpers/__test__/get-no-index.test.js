import { getNoIndex } from '../get-no-index';

describe('getNoIndex() return correctly', () => {
  it('with plain text', () => {
    expect(getNoIndex('Test string').__html).toEqual('<!--noindex-->Test string<!--/noindex-->');
  });
  it('with html tags', () => {
    expect(getNoIndex('<p>Test <span>srting</span></p>').__html)
      .toEqual('<!--noindex--><p>Test <span>srting</span></p><!--/noindex-->');
  });
  it('with number', () => {
    expect(getNoIndex(123).__html).toEqual('<!--noindex-->123<!--/noindex-->');
  });
  it('with null', () => {
    expect(getNoIndex(null)).toEqual(null);
  });
  it('with empty string', () => {
    expect(getNoIndex('').__html).toEqual(undefined);
  });
  it('with undefined', () => {
    expect(getNoIndex(undefined)).toEqual(undefined);
  });
});
