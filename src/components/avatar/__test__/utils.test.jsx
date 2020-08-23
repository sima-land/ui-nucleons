import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { getMonogram, useImageLoad } from '../utils';

describe('getMonogram()', () => {
  it('getMonogram should return correct result', () => {
    expect(getMonogram('John Doe')).toEqual('JD');
    expect(getMonogram('John')).toEqual('J');
    expect(getMonogram('John ')).toEqual('J');
    expect(getMonogram('Hello World Foo Bar Baz')).toEqual('HW');
    expect(getMonogram('Лорд Командующий')).toEqual('ЛК');
    expect(getMonogram('лорд командующий')).toEqual('ЛК');
    expect(getMonogram('')).toEqual('');
    expect(getMonogram(123)).toEqual('');
    expect(getMonogram(null)).toEqual('');
    expect(getMonogram(undefined)).toEqual('');
  });
});

describe('useImageLoad()', () => {
  let originalImage;

  jest.useFakeTimers();

  beforeAll(() => {
    originalImage = global.Image;
    global.Image = class FakeImage {
      constructor () {
        setTimeout(() => {
          global[Symbol.for('test-image')] = this;
          this.onload && this.onload();
        }, 500);
      }
    };
  });

  afterAll(() => {
    global.Image = originalImage;
  });

  const TestComponent = ({ url }) => {
    const isLoaded = useImageLoad(url);

    return isLoaded ? (
      <img src={url} alt='Image' />
    ) : (
      <span>Stub</span>
    );
  };

  it('should return boolean flag of image load state', () => {
    const wrapper = mount(
      <TestComponent url='www.image.com' />
    );

    expect(wrapper.find('img')).toHaveLength(0);
    expect(wrapper.find('span')).toHaveLength(1);

    act(() => {
      jest.runAllTimers();
      wrapper.update();
    });

    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(0);
  });

  it('should return true if image already loaded', () => {
    useImageLoad.loadedURLs.add('www.images.ru/1');

    const wrapper = mount(
      <TestComponent url='www.images.ru/1' />
    );

    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(0);
  });

  it('should remove onload handler on umount', () => {
    const wrapper = mount(
      <TestComponent url='www.image.com/over9000' />
    );

    expect(typeof global[Symbol.for('test-image')].onload).toBe('function');

    wrapper.unmount();

    act(() => {
      jest.runAllTimers();
    });

    expect(global[Symbol.for('test-image')].onload).toBe(null);
  });
});
