import { PageScrollLock } from '../body-scroll-lock';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

jest.mock('body-scroll-lock', () => {
  const original = jest.requireActual('body-scroll-lock');

  return {
    ...original,
    disableBodyScroll: jest.fn(original.disableBodyScroll),
    enableBodyScroll: jest.fn(original.enableBodyScroll),
    __esModule: true,
  };
});

describe('PageScrollLock', () => {
  it('replaceLib should provide able to replace library', () => {
    const element = document.createElement('div');
    document.body.append(element);
    const adapter = new PageScrollLock(document.createElement('div'));

    expect(disableBodyScroll).toBeCalledTimes(0);
    expect(enableBodyScroll).toBeCalledTimes(0);
    adapter.lock();
    expect(disableBodyScroll).toBeCalledTimes(1);
    expect(enableBodyScroll).toBeCalledTimes(0);
    adapter.unlock();
    expect(disableBodyScroll).toBeCalledTimes(1);
    expect(enableBodyScroll).toBeCalledTimes(1);

    const replacement = {
      disableBodyScroll: jest.fn(),
      enableBodyScroll: jest.fn(),
    };

    adapter.replaceLib(replacement);
    adapter.lock();
    expect(replacement.disableBodyScroll).toBeCalledTimes(1);
    expect(replacement.enableBodyScroll).toBeCalledTimes(0);
    adapter.unlock();
    expect(replacement.disableBodyScroll).toBeCalledTimes(1);
    expect(replacement.enableBodyScroll).toBeCalledTimes(1);
    expect(disableBodyScroll).toBeCalledTimes(1);
    expect(enableBodyScroll).toBeCalledTimes(1);
  });
});
