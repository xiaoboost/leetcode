/**
 * [929] Unique Email Addresses
 *
 * @source
 *   https://leetcode.com/problems/unique-email-addresses/
 *
 * @time
 *   2019-02-06
 *
 * @category
 *   algorithms
 *
 * @difficulty
 *   Easy
 *
 * @description
 *  Every email consists of a local name and a domain name, separated by the @ sign.
 *
 *  For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.
 *
 *  Besides lowercase letters, these emails may contain '.'s or '+'s.
 *
 *  If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)
 *
 *  If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)
 *
 *  It is possible to use both of these rules at the same time.
 *
 *  Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails?
 *
 * @example
 *   Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
 *   Output: 2
 *   Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 *
 * @note
 *   1 <= emails[i].length <= 100
 *   1 <= emails.length <= 100
 *   Each emails[i] contains exactly one '@' character.
 *
 * @solution
 *   将邮箱地址用'@'符号拆分开，然后 domain 不动，用正则替换掉 local name 中的`.`符号以及`+`之后的所有字符（包括`+`）就行了，然后做去重就行了。
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function(emails: string[]) {
    const hash: AnyObject<boolean> = {};

    for (const email of emails) {
        const [local, domain] = email.split('@');
        const localReal = local.replace(/\.|\+[^@]+/g, '');

        hash[`${localReal}@${domain}`] = true;
    }

    return Object.keys(hash).length;
};
