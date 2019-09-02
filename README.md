<h1 align="center">Welcome to @jsany/date 👋</h1>
<p>
  <img alt="npm bundle size (scoped)" src="https://img.shields.io/bundlephobia/min/@jsany/date">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/jsany/date">
  <img alt="Version" src="https://img.shields.io/npm/v/@jsany/date.svg">
  <a href="https://github.com/jsany/date">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/jsany/date/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/jsany/date/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> javascript date small es5 es6+

### 🏠 [Homepage](https://github.com/jsany/date)

## 🚀 Install

```sh
npm install --save-dev @jsany/date
```

## Usage

```javascript
import { dateFormat, UTCTimestamp, UTC2Target, Target2UTC } from '@jsany/date';

// or const { dateFormat, UTCTimestamp, UTC2Target, Target2UTC } = require('@jsany/date');

const dateStr = '2019-01-02 14:08:59';
const bj = '2019-01-01 08:00:00';
const ist = '2019-01-01 05:30:00';
const utc = '2019-01-01 00:00:00';
const utc_unix = 1546300800000;

/**
 * @description dateFormat：格式化日期
 * @param {(object|string)} date - 日期对象/字符串
 * @param {string} mask - 日期格式,默认：mask='yyyy-MM-dd HH:mm:ss'
 * @returns {string} 返回格式化后的日期
 */
dateFormat(dateStr, 'd'); // "2"
dateFormat(dateStr, 'dd'); // "02"
dateFormat(dateStr, 'ddd'); // "Wed"
dateFormat(dateStr, 'dddd'); // "Wednesday"
dateFormat(dateStr, 'M'); // "1"
dateFormat(dateStr, 'MM'); // "01"
dateFormat(dateStr, 'MMM'); // "Jan"
dateFormat(dateStr, 'MMMM'); // "January"
dateFormat(dateStr, 'yy'); // "19"
dateFormat(dateStr, 'yyyy'); // "2019"
dateFormat(dateStr, 'h'); // "2"
dateFormat(dateStr, 'hh'); // "02"
dateFormat(dateStr, 'H'); // "14"
dateFormat(dateStr, 'HH'); // "14"
dateFormat(dateStr, 'm'); // "8"
dateFormat(dateStr, 'mm'); // "08"
dateFormat(dateStr, 's'); // "59"
dateFormat(dateStr, 'ss'); // "59"
dateFormat(dateStr, 'l'); // "000"
dateFormat(dateStr, 'L'); // "00"
dateFormat(dateStr, 'tt'); // "pm"
dateFormat(dateStr, 'TT'); // "PM"
dateFormat(dateStr, 'Z'); // "GMT"
dateFormat(dateStr, 'yyyy/MM/dd HH:mm:ss'); // "2019/01/02 14:08:59"

=============================================

/**
 * @description UTCTimestamp：获取utc时间戳
 * @param {string} date - utc日期对象/字符串，默认：当前时间
 * @returns {number} 返回utc时间戳
 */
console.log(UTCTimestamp(utc), utc_unix);

=============================================

/**
 * @description UTC2Target：utc时间转目标时区的时间，默认为utc时间转本地时间
 * @param {object|string} date - utc时间，日期对象/字符串
 * @param {number} timezone - 目标时区，默认：本地时区timezone=-480（中国时区+0800）
 * @param {*} mask - 日期格式,默认：mask='yyyy-MM-dd HH:mm:ss'
 * @returns {string} 返回目标时区的时间
 */
// utc转北京时间（-480）
UTC2Target(utc, -480); // "2019-01-01 08:00:00"
// utc转印度时间（-330）
UTC2Target(utc, -330); // "2019-01-01 05:30:00"

=============================================

/**
 * @description Target2UTC：目标时区的时间转utc时间，默认为本地时间转utc时间
 * @param {object|string} date - 目标时区时间，日期对象/字符串
 * @param {number} timezone - 目标时区，默认：本地时区timezone=-480（中国时区+0800）
 * @param {*} mask - 日期格式,默认：mask='yyyy-MM-dd HH:mm:ss'
 * @returns {string} 返回目标时区的utc时间
 */
// 北京时间转utc（-480）
Target2UTC(bj, -480); // "2019-01-01 00:00:00"
// 印度时间转utc（-330）
Target2UTC(ist, -330); // "2019-01-01 00:00:00"
```

## Run tests

```sh
npm run test
```

## 👀 View online

[view](https://npm.runkit.com/@jsany/date)

## Author

👤 **jzg**

- Github: [@Mr-jiangzhiguo](https://github.com/Mr-jiangzhiguo)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jsany/date/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [jzg](https://github.com/Mr-jiangzhiguo).<br />
This project is [MIT](https://github.com/jsany/date/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
