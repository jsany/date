'use strict';

exports.__esModule = true;
exports.MyError = exports.getDataType = void 0;

/**
 * @description 获取数据的具体类型
 * @param {any} o - 要判断的数据
 * @returns {string} - 返回该数据的具体类型
 */
var getDataType = o => {
  // 映射数据类型
  var map2DataType = {
    '[object String]': 'String',
    '[object Number]': 'Number',
    '[object Undefined]': 'Undefined',
    '[object Boolean]': 'Boolean',
    '[object Array]': 'Array',
    '[object Function]': 'Function',
    '[object Object]': 'Object',
    '[object Symbol]': 'Symbol',
    '[object Set]': 'Set',
    '[object Map]': 'Map',
    '[object WeakSet]': 'WeakSet',
    '[object WeakMap]': 'WeakMap',
    '[object Null]': 'Null',
    '[object Promise]': 'Promise',
    '[object NodeList]': 'NodeList',
    '[object Date]': 'Date',
    '[object FormData]': 'FormData',
  };
  o = Object.prototype.toString.call(o);

  if (map2DataType[o]) {
    return map2DataType[o];
  } else {
    return o.replace(/^\[object\s(.*)\]$/, '$1');
  }
};
/**
 * @description 扩展Error
 */

exports.getDataType = getDataType;

class MyError extends Error {
  constructor(props) {
    super(props);
    this.code = props.code || 0;
    this.msg = props.msg || 'default msg';
    this.name = 'MyError';
    this.message = JSON.stringify(props);
  }
}

exports.MyError = MyError;
