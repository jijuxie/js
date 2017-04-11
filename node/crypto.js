'use strict'
const crypto = require('crypto');
function l(param) {
    console.log(param);
}
const md5 = crypto.createHash('md5');//创建一个md5 hash算法
md5.update('aa');//添加要转化的值
md5.update('cc');//与前面的要转化的值进行拼接
l(md5.digest('hex'));//打印16进制的密文，
const sha1 = crypto.createHash('sha1');//创建一个sh1 hash算法
sha1.update('bbbb');
l(sha1.digest('hex'));
const hmac = crypto.createHmac('md5', 'key');//创建一个带秘钥的sha1或者md5算法
hmac.update('aacc');
l(hmac.digest('hex'));
//以上的加密都是不可反编译的只能通过对比加密后的数据来确定数据是否一致,一般用于密码存储
//下面的加密手段是可以反编译的。可以用于密码存储也可以用于加密信息交互
//AES 对称加密算法的一种。
//创建加密算法
function aesEncode(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
//创建解密算法
function aesDecode(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
var data = '我是一个大傻瓜';
var key = 'keykey';
l(aesEncode(data, key));
l(data);
l(aesDecode(aesEncode(data, key), key));
//DH算法协商秘钥
/**
 * 主动方使用的协商方法
 * @returns array():say是要传达给被动方的三个数据 one是自己要用的一个数据
 */
function dhOneSay() {
    var one = crypto.createDiffieHellman(512);
    var one_key = one.generateKeys();
    var prime = one.getPrime();
    var generator = one.getGenerator();
    var say = {
        prime: prime, generator: generator, one_key: one_key
    };

    return [say, one];
}
/**
 * 被动方使用的协商方法已经可以得到秘钥
 * @param {prime: prime, generator: generoter, one_key: one_key} props 
 * @returns array() two_key是要返回给主动方的秘数，theSecret是计算出来的秘钥
 */
function dhTwoGetSay(props) {
    var two = crypto.createDiffieHellman(props.prime, props.generator);
    var two_key = two.generateKeys();
    var theSecret = (two.computeSecret(props.one_key)).toString('hex');
    return [ two_key, theSecret ];
}
/**
 * 主动方收到被动方给予的秘钥后
 * @param str two_key 被动方返回的密数
 * @param str one 主动方最初的随机数
 * @returns str 计算出来的秘钥
 */
function dhOneGet(two_key,one){
return (one.computeSecret(two_key)).toString('hex');
}
//主动方自己产生数据
var oneSay=dhOneSay();
//被动方接受主动方传过来的数据进行计算，产生握手数据和最终的秘钥
var twoGetSay=dhTwoGetSay(oneSay[0]);
//主动方接收到被动方传来的数据进行计算得到最终秘钥
var oneSecret=dhOneGet(twoGetSay[0],oneSay[1]);
//被动方的秘钥早已产生了直接读取
var twoSecret=twoGetSay[1];
l(oneSay);
l(twoGetSay);
l(oneSecret);
l(twoSecret);
