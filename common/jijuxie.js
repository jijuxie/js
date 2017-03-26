/**
 * Created by 12156 on 2017/3/26.
 */
'use strict';
var JJX = {};
/**
 * 打印值
 * @param obj
 */
JJX.dump = function (obj) {
    console.log(obj);
};
/**
 * 判断两个值是否相等
 * @param value1
 * @param value2
 * @returns {boolean}
 */
JJX.eq = function (value1, value2) {
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
JJX.errorAlert = function (str) {
    alert('you have a error about(你存在一个错误)::: ' + str);
};
/**
 * 检查浏览器ES6可用
 */
JJX.checkedES6 = function () {
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
JJX.arrCopy=function (arr) {
    return arr.slice();
};