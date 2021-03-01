import axios from 'axios';

axios.get = (...args) => Array.of(...args);
axios.put = (...args) => Array.of(...args);
axios.post = (...args) => Array.of(...args);
axios.delete = (...args) => Array.of(...args);

const api = {
  'axios:simav3': axios,
  'axios:simav6': axios,
  'axios:ilium': axios,
  'axios:auth': axios,
  'axios:notices': axios,
  'axios:chponki': axios,
};

export default api;
