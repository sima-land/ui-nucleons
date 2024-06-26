Error.stackTraceLimit = 1000;

if (typeof window !== 'undefined') {
  window.matchMedia =
    window.matchMedia ||
    function (query) {
      return {
        media: query,
        matches: false,
        addEventListener: () => {},
        removeEventListener: () => {},
      };
    };

  window.ResizeObserver = class ResizeObserver {
    constructor(callback) {
      this.callback = callback;
    }
    observe(target) {
      target.addEventListener('test:resize', () => {
        this.callback(
          [
            {
              target,
              borderBoxSize: [],
              contentBoxSize: [],
              contentRect: null,
              devicePixelContentBoxSize: [],
            },
          ],
          this,
        );
      });
    }
    unobserve() {}
    disconnect() {}
  };

  window.visualViewport = {
    width: window.innerWidth,
    height: window.innerHeight,
    offsetLeft: 0,
    offsetTop: 0,
    pageLeft: 0,
    pageTop: 0,
    scale: 1,
    addEventListener: () => {},
    removeEventListener: () => {},
  };

  // ВАЖНО: для того чтобы не было ненужных сообщений в логе тестов (Not implemented: window.computedStyle)
  const { getComputedStyle } = window;
  window.getComputedStyle = element => getComputedStyle(element);
}
