import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

Error.stackTraceLimit = 1000;

if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
    };
  };

  window.requestAnimationFrame = window.requestAnimationFrame || function (callback) {
    setTimeout(callback, 0);
  };
}
