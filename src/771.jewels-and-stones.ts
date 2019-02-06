/**
 * [771] Jewels and Stones
 *
 * @source
 *   https://leetcode.com/problems/jewels-and-stones/
 *
 * @time
 *   2019-02-05
 *
 * @category
 *   algorithms
 *
 * @difficulty
 *   Easy
 *
 * @description
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
 *
 * The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
 *
 * @example 1:
 * Input: J = "aA", S = "aAAbbbb"
 * Output: 3
 *
 * @example 2:
 * Input: J = "z", S = "ZZ"
 * Output: 0
 *
 * @note
 * S and J will consist of letters and have length at most 50.
 * The characters in J are distinct.
 *
 * @solution
 *   本题实质上就是求 J 字符串每个字符在 S 字符串中的出现次数之和（区分大小写）。
 */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J: string, S: string) {
    return S.split('').reduce((ans, char) => ans + Number(J.includes(char)), 0);
};
