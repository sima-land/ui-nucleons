import { PageScrollLockAdapterBSL, allowTouchMove, BSL_IGNORE_ATTR } from '../body-scroll-lock';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

describe('PageScrollLock', () => {
  it('replaceLib should provide able to replace library', () => {
    const element = document.createElement('div');
    document.body.append(element);
    const adapter = new PageScrollLockAdapterBSL(document.createElement('div'));

    expect(adapter.lib.disableBodyScroll).toBe(disableBodyScroll);
    expect(adapter.lib.enableBodyScroll).toBe(enableBodyScroll);

    jest.spyOn(adapter.lib, 'disableBodyScroll');
    jest.spyOn(adapter.lib, 'enableBodyScroll');

    expect(adapter.lib.disableBodyScroll).toHaveBeenCalledTimes(0);
    expect(adapter.lib.enableBodyScroll).toHaveBeenCalledTimes(0);
    adapter.lock();
    expect(adapter.lib.disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(adapter.lib.enableBodyScroll).toHaveBeenCalledTimes(0);
    adapter.unlock();
    expect(adapter.lib.disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(adapter.lib.enableBodyScroll).toHaveBeenCalledTimes(1);

    const replacement = {
      disableBodyScroll: jest.fn(),
      enableBodyScroll: jest.fn(),
    };

    adapter.replaceLib(replacement);
    adapter.lock();
    expect(replacement.disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(replacement.enableBodyScroll).toHaveBeenCalledTimes(0);
    adapter.unlock();
    expect(replacement.disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(replacement.enableBodyScroll).toHaveBeenCalledTimes(1);
    expect(adapter.lib.disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(adapter.lib.enableBodyScroll).toHaveBeenCalledTimes(1);
  });
});

describe('allowTouchMove', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('should works with marked element', () => {
    container.innerHTML = `
      <div ${BSL_IGNORE_ATTR}="true">
        <div id="test-target">Target</div>
      </div>
    `;

    document.body.append(container);

    const target = document.body.querySelector('#test-target') as any;

    expect(allowTouchMove(target)).toBe(true);
  });

  it('should works without marked element', () => {
    container.innerHTML = `
      <div>
        <div id="test-target">Target</div>
      </div>
    `;

    const target = document.body.querySelector('#test-target') as any;

    expect(allowTouchMove(target)).toBe(false);
  });
});
