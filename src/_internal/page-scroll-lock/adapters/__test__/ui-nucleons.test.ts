import { PageScrollLockAdapterNucleons, StyleAffect } from '../ui-nucleons';

class FakeScrollbarWidth extends PageScrollLockAdapterNucleons {
  protected getScrollbarWidth() {
    return 200;
  }
}

describe('PageScrollLockAdapterNucleons', () => {
  it('should works correctly', () => {
    window.scrollTo = jest.fn();
    const adapter = new PageScrollLockAdapterNucleons();
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);

    adapter.lock();
    expect(document.body.getAttribute('data-scroll-locked')).toBe('true');

    adapter.lock();
    expect(document.body.getAttribute('data-scroll-locked')).toBe('true');

    adapter.unlock();
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);

    adapter.unlock();
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);
  });

  it('should handle reserveScrollBarGap option', () => {
    const adapter = new PageScrollLockAdapterNucleons({ reserveScrollBarGap: true });
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);

    adapter.lock();
    expect(document.body.getAttribute('data-scroll-locked')).toBe('true');

    adapter.unlock();
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);
  });

  it('should handle reserveScrollBarGap option with non zero bar width', () => {
    const adapter = new FakeScrollbarWidth({ reserveScrollBarGap: true });
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);

    adapter.lock();
    expect(document.body.getAttribute('data-scroll-locked')).toBe('true');

    adapter.unlock();
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);
  });
});

describe('StyleAffect', () => {
  it('should handle repeat change on same property', () => {
    const target = document.createElement('div');
    const styles = new StyleAffect(target);
    expect(target.style.width).toBe('');

    styles.set('width', '123px');
    expect(target.style.width).toBe('123px');

    styles.set('width', '1rem');
    expect(target.style.width).toBe('1rem');

    styles.restore();
    expect(target.style.width).toBe('');
  });
});
