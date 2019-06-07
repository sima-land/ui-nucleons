import { buildGetParameter, addGetParameters, buildURL } from '../build-url';
import { USER_DEFAULT_PARAMS } from '../../constants';

let result;

describe('buildGetParameter', () => {
  it('should choose correct sign before get parameter', () => {
    result = buildGetParameter('https://www.sima-land.ru/nashi-razrabotki/', 'sort=rank');
    expect(result).toEqual('?sort=rank');
    result = buildGetParameter('https://www.sima-land.ru/nashi-razrabotki/?sort=rank', 'viewtype=xxl');
    expect(result).toEqual('&viewtype=xxl');
  });
});
describe('addGetParameters', () => {
  it('should not add get-parameters if correct urlParameters have not been passed', () => {
    result = addGetParameters('https://www.sima-land.ru/any/path/');
    expect(result).toEqual('https://www.sima-land.ru/any/path/');
    result = addGetParameters('https://www.sima-land.ru/any/path/', 'something');
    expect(result).toEqual('https://www.sima-land.ru/any/path/');
    result = addGetParameters('https://www.sima-land.ru/any/path/', { test: 'wrong' });
    expect(result).toEqual('https://www.sima-land.ru/any/path/');
  });
  it('should add sort parameter correctly', () => {
    result = addGetParameters('https://www.sima-land.ru/any/', { sort: USER_DEFAULT_PARAMS.sort });
    expect(result).toEqual('https://www.sima-land.ru/any/');
    result = addGetParameters('https://www.sima-land.ru/search/?q=test', { sort: 'date' });
    expect(result).toEqual('https://www.sima-land.ru/search/?q=test');
    result = addGetParameters('https://www.sima-land.ru/?sort=test', { sort: 'date' });
    expect(result).toEqual('https://www.sima-land.ru/?sort=test');
    result = addGetParameters('https://www.sima-land.ru/', { sort: 'date' });
    expect(result).toEqual('https://www.sima-land.ru/?sort=date');
  });
  it('should add per_page parameter correctly', () => {
    result = addGetParameters('https://www.sima-land.ru/any/', { perPage: USER_DEFAULT_PARAMS.per_page });
    expect(result).toEqual('https://www.sima-land.ru/any/');
    result = addGetParameters('https://www.sima-land.ru/search/?per-page=30', { perPage: 10 });
    expect(result).toEqual('https://www.sima-land.ru/search/?per-page=30');
    result = addGetParameters('https://www.sima-land.ru/?sort=test', { perPage: 10 });
    expect(result).toEqual('https://www.sima-land.ru/?sort=test&per-page=10');
  });
  it('should add viewtype parameter correctly', () => {
    result = addGetParameters('https://www.sima-land.ru/any/', { viewtype: USER_DEFAULT_PARAMS.viewtype });
    expect(result).toEqual('https://www.sima-land.ru/any/');
    result = addGetParameters('https://www.sima-land.ru/search/?viewtype=test', { viewtype: 'cards' });
    expect(result).toEqual('https://www.sima-land.ru/search/?viewtype=test');
    result = addGetParameters('https://www.sima-land.ru/?sort=test', { viewtype: 'cards' });
    expect(result).toEqual('https://www.sima-land.ru/?sort=test&viewtype=cards');
  });
  it('should add some get-parameters together', () => {
    result = addGetParameters('http://www.sima-land.ru/any/path/', {
      perPage: 50,
      viewtype: 'xxl',
      sort: 'rank',
    });
    expect(result).toEqual('http://www.sima-land.ru/any/path/?sort=rank&per-page=50&viewtype=xxl');
  });
});
describe('buildURL', () => {
  it('should return correct external url', () => {
    result = buildURL({
      url: 'http://any-site.ru/any/path/',
      urlParams: { sort: 'price', viewtype: 'xxl' },
      external: true,
    });
    expect(result).toEqual('http://any-site.ru/any/path/');
    result = buildURL({
      url: 'http://any-site.ru/any/',
      urlParams: { hash: 'test' },
      external: true,
    });
    expect(result).toEqual('http://any-site.ru/any/#test');
  });
  it('should return correct not external url', () => {
    result = buildURL({
      url: 'https://www.sima-land.ru/any/path/',
      urlParams: { sort: 'price', viewtype: 'xxl' },
    });
    expect(result).toEqual('https://www.sima-land.ru/any/path/?sort=price&viewtype=xxl');
    result = buildURL({
      url: 'https://something.sima-land.ru/any/path/',
      urlParams: { hash: 'test' },
    });
    expect(result).toEqual('https://something.sima-land.ru/any/path/#test');
    result = buildURL({
      url: 'sima-land.ru/any/',
    });
    expect(result).toEqual('https://www.sima-land.ru/any/');
  });
  it('should return empty string if url is invalid', () => {
    result = buildURL({ urlParams: { sort: 'price', viewtype: 'xxl' } });
    expect(result).toEqual('');
    result = buildURL();
    expect(result).toEqual('');
  });
});
