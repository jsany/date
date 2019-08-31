'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

/**
 * @description 获取utc时间戳
 * @param {string} date - utc日期对象/字符串，默认：当前时间
 * @returns {number} 返回utc时间戳
 */
var UTCTimestamp = function UTCTimestamp() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return new Date(date).getTime() - new Date().getTimezoneOffset() * 60 * 1000;
};

var _default = UTCTimestamp;
exports['default'] = _default;
