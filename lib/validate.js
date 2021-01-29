/*
 * Copyright © 2020-present LiuDanYang. All rights Reserved.
 */

/**
 * navigator.userAgent
 * @type {string}
 */
const userAgent = window.navigator.userAgent;

/**
 * 安卓设备
 * @type {boolean}
 */
const isAndroid = userAgent.indexOf("Android") > -1 || userAgent.indexOf("Linux") > -1;

/**
 * ios设备
 * @type {boolean}
 */
const isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

/**
 * 中国姓名正则表达式
 * @type {RegExp}
 */
const validChineseNameReg = /^[\u4e00-\u9fa5]{2,4}$/;

/**
 * 中国姓名验证
 * @param name {String} 姓名
 * @returns {boolean} true|false
 */
function validChineseName(name) {
  return validChineseNameReg.test(name);
}

/**
 * 手机号码正则表达式
 * @type {RegExp}
 */
const validPhoneReg = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;

/**
 * 手机号码验证
 * @param phone {String} 手机号码
 * @returns {boolean} true|false
 */
function validPhone(phone) {
  return validPhoneReg.test(phone);
}

/**
 * 邮箱正则表达式
 * @type {RegExp}
 */
//eslint-disable-next-line no-useless-escape
const validEmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * 邮箱验证
 * @param email {String} 邮箱地址
 * @returns {Boolean} true|false
 */
function validEmail(email) {
  return validEmailReg.test(email);
}

/**
 * 身份证号正则表达式
 * @type {RegExp}
 */
const validIDCardReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;

/**
 * 身份证号验证
 * @param number {String} 身份证号
 * @returns {boolean} true|false
 */
function validIDCard(number) {
  return validIDCardReg.test(number);
}

/**
 * 银行账号正则表达式
 * @type {RegExp}
 */
const validBankReg = /^([1-9]{1})(\d{11}|\d{15}|\d{16}|\d{17}|\d{18})$/;

/**
 * 银行账号验证
 * @param bank {String} 银行账号
 * @returns {boolean} true|false
 */
function validBank(bank) {
  return validBankReg.test(bank);
}

/**
 * 判断是否是外部链接
 * @param path {String}
 * @returns {Boolean}
 */
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * 网址正则表达式
 * @type {RegExp}
 */
const validWebUrl = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

/**
 * @param url {String}
 * @returns {Boolean}
 */
function validURL(url) {
  return validWebUrl.test(url);
}

/**
 * @param str {String}
 * @returns {Boolean}
 */
function validLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 网址验证
 * @param str {String}
 * @returns {Boolean}
 */
function validUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 字母验证
 * @param str {String}
 * @returns {Boolean}
 */
function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * 字符串验证
 * @param str {String}
 * @returns {Boolean}
 */
function isString(str) {
  return typeof str === "string" || str instanceof String;
}

/**
 * 数组验证
 * @param arg {Array}
 * @returns {any[]|boolean}
 */
function isArray(arg) {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}

export {
  userAgent,
  isAndroid,
  isIOS,
  validChineseNameReg,
  validChineseName,
  validPhoneReg,
  validPhone,
  validEmailReg,
  validEmail,
  validIDCardReg,
  validIDCard,
  validBankReg,
  validBank,
  isExternal,
  validWebUrl,
  validURL,
  validLowerCase,
  validUpperCase,
  validAlphabets,
  isString,
  isArray
}
