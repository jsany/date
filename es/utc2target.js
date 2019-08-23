import {MyError} from '../helper/index';
import ErrorCode from '../helper/errCode';
import dateFormat from './dateFormat';

/**
 * @description utc时间转目标时区的时间，默认为utc时间转本地时间
 * @param {object|string} date - utc时间，日期对象/字符串
 * @param {number} timezone - 目标时区，默认：本地时区timezone=-480（中国时区+0800）
 * @param {*} mask - 日期格式,默认：mask='yyyy-MM-dd HH:mm:ss'
 * @returns {string} 返回目标时区的时间
 */
const UTC2Target = (
  date,
  timezone = new Date().getTimezoneOffset(),
  mask = 'yyyy-MM-dd HH:mm:ss'
) => {
  const utcTimestamp = new Date(date).getTime();
  if (!utcTimestamp) {
    throw new MyError({code: '000',msg: ErrorCode['000']})
  }
  date = dateFormat(new Date(utcTimestamp - timezone * 60 * 1000), mask);
  return date;
};

export default UTC2Target;