/**
 * [535] Encode and Decode TinyURL
 *
 * @source
 *   https://leetcode.com/problems/encode-and-decode-tinyurl/
 *
 * @time
 *   2019-02-08
 *
 * @category
 *   algorithms
 *
 * @difficulty
 *   Medium
 *
 * @description
 *  TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.
 *
 * Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
 *
 * @note
 *   This is a companion problem to the System Design problem: [Design TinyURL](https://leetcode.com/discuss/interview-question/124658/Design-a-URL-Shortener-(-TinyURL-)-System/).
 *
 * @solution
 *   短链接的编译和反编译，这里采用最简单的映射表来实现。
 */

let id = 0;
const map: AnyObject<string> = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function(longUrl: string) {
    map[++id] = longUrl;
    return `http://tinyurl.com/${id}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function(shortUrl: string) {
    const urlId = shortUrl.substring(19);
    return map[urlId];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
