'use strict';

exports.__esModule = true;
exports.default = void 0;

var _index = require('../helper/index');

var _errCode = _interopRequireDefault(require('../helper/errCode'));

var _dateFormat = _interopRequireDefault(require('./dateFormat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @description 目标时区的时间转utc时间，默认为本地时间转utc时间
 * @param {object|string} date - 目标时区时间，日期对象/字符串
 * @param {number} timezone - 目标时区，默认：本地时区timezone=-480（中国时区+0800）
 * @param {*} mask - 日期格式,默认：mask='yyyy-MM-dd HH:mm:ss'
 * @returns {string} 返回目标时区的utc时间
 */
var Target2UTC = function Target2UTC(date, timezone, mask) {
  if (timezone === void 0) {
    timezone = new Date().getTimezoneOffset();
  }

  if (mask === void 0) {
    mask = 'yyyy-MM-dd HH:mm:ss';
  }

  var targetTimestamp = new Date(date).getTime();

  if (!targetTimestamp) {
    throw new _index.MyError({
      code: '000',
      msg: _errCode.default['000'],
    });
  }

  date = (0, _dateFormat.default)(new Date(targetTimestamp + timezone * 60 * 1000), mask);
  return date;
};

var _default = Target2UTC;
exports.default = _default;
