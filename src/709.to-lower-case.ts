/**
 * [709] To Lower Case
 *
 * @source
 *   https://leetcode.com/problems/to-lower-case/
 *
 * @time
 *   2019-02-07
 *
 * @category
 *   algorithms
 *
 * @difficulty
 *   Easy
 *
 * @description
 *  Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 *
 * @example 1:
 * Input: "Hello"
 * Output: "hello"
 *
 * @example 2:
 * Input: "here"
 * Output: "here"
 *
 * @example 3:
 * Input: "LOVELY"
 * Output: "lovely"
 *
 * @solution
 *  大写转小写。这里写了三种方法：
 *  1. 原生函数
 *  2. 反查 ASCII 码
 *  3. 字符串映射
 */

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase1 = function(str: string) {
    return str.toLowerCase();
};

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase2 = function(str: string) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32);
        }
        else {
            result += char;
        }
    }

    return result;
};

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase3 = function(str: string) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = upper.indexOf(char);

        if (index >= 0) {
            result += lower[index];
        }
        else {
            result += char;
        }
    }

    return result;
};
