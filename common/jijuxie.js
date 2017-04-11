/**
 * Created by 12156 on 2017/3/26.
 */
'use strict';
var J = {};
/**
 * 打印值
 * @param obj
 */
J.dump = function (obj) {
    console.log(obj);
};
/**
 * 判断两个值是否相等
 * @param value1
 * @param value2
 * @returns {boolean}
 */
J.eq = function (value1, value2) {
    if (typeof value1 === typeof value2) {
        if ((typeof value1) === 'float') {
            return Math.abs(value1 - value2) < 0.0000001;
        } else if (isNaN(value1)) {
            return isNaN(value2);
        } else {
            return value1 === value2;
        }
    }
};
/**
 * 强力提示错误
 * @param str
 */
J.errorAlert = function (str) {
    alert('you have a error about(你存在一个错误)::: ' + str);
};
/**
 * 检查浏览器ES6可用
 */
J.checkedES6 = function () {
    try {
        this.dump(`您的浏览器
支持ES6`);
    } catch (e) {
        JJX.errorAlert(e);
    }
};
/**
 * 返回数组的复制品
 * @param arr
 * @returns {Array.<T>|string|Blob|ArrayBuffer}
 */
J.arrCopy = function (arr) {
    return arr.slice();
};
/**
 * obj json格式化
 * @param obj
 */
J.jsonEncode = function (obj) {
    return JSON.stringify(obj);
};
/**
 * json 解码
 * @param json
 */
J.jsonDeCode = function (json) {
    return JSON.parse(json);
};
/**
 * 继承用方法
 * @param Child
 * @param Parent
 */
J.inherits = function (Child, Parent) {
    var F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
};
/**
 *实例化一个对象
 * @param Class
 * @param props
 * @returns {*}
 */
J.create = function (Class, props) {
    return new Class(props || {});
};