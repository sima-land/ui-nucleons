import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

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
}
