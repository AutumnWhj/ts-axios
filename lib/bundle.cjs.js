'use strict';

function xhr(config) {
    var _a = config || {}, _b = _a.data, data = _b === void 0 ? null : _b, url = _a.url, _c = _a.method, method = _c === void 0 ? 'get' : _c;
    var request = new XMLHttpRequest();
    request.open(method.toUpperCase(), url, true);
    request.send(data);
}

// axios({
function axios(config) {
    xhr(config);
}

module.exports = axios;

if(typeof window !== 'undefined') {
  window._VERSION_ = '1.0.0'
}
