import BaseProxy from './Proxy.js';

class ApiProxy extends BaseProxy {
  constructor(endpoint, parameters = {}) {
    super(endpoint, parameters)
  }
}
export default ApiProxy;
