import cutTextContent from '../cut-text-content';

const nonElements = Object.freeze([
  1,
  '',
  false,
  {},
  [],
  null,
  undefined,
]);

describe('cutTextContent', () => {
  it('should not throw error when arguments is invalid', () => {
    nonElements.forEach(nonElement => {
      expect(() => cutTextContent(nonElement, 10)).not.toThrow();
    });
  });
  it('should cut textContent properly', () => {
    const testSpan = document.createElement('span');
    let testTextContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quis!';
    Object.defineProperty(testSpan, 'textContent', {
      /**
       * Возвращает тестовый контент.
       * @return {string} Тестовый контент.
       */
      get () {
        return testTextContent;
      },

      /**
       * Изменяет тестовый контент.
       * @param {string} value Тестовый контент.
       */
      set (value) {
        testTextContent = value;
        Object.defineProperty(testSpan, 'clientHeight', {
          configurable: true,
          value: 5,
        });
      },
    });
    Object.defineProperty(testSpan, 'clientHeight', {
      configurable: true,
      value: 20,
    });
    cutTextContent(testSpan, 10);
    expect(testSpan.textContent).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, q...');
  });
});
