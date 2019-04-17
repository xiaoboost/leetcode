/**
 * [509] Fibonacci Number
 *
 * @source
 *   https://leetcode.com/problems/fibonacci-number/
 *
 * @time
 *   2019-04-18
 *
 * @category
 *   algorithms
 *
 * @difficulty
 *   Easy
 *
 * @description
 *  The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 *
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), for N > 1.
 *
 * Given N, calculate F(N).
 *
 * @example 1:
 * Input: 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 * @example 2:
 * Input: 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 * @example 3:
 * Input: 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 * @note
 *   0 ≤ N ≤ 30.
 *
 * @solution
 *   从 0 开始往后递推即可。
 */

/**
 * @param {number} N
 * @return {number}
 */
const fib = function(N: number) {
    // 头两项分别为 0 和 1
    if (N === 0 || N === 1) {
        return N;
    }

    let now = 1, last = 0;

    for (let i = 2; i <= N; i++) {
        const newVal = now + last;

        last = now;
        now = newVal;
    }

    return now;
};
