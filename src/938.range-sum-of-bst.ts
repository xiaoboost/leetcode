/**
 * [938] Range Sum of BST
 *
 * @source
 *   https://leetcode.com/problems/range-sum-of-bst/
 *
 * @time
 *   2019-02-06
 *
 * @category
 *   algorithms
 *
 * @difficulty
 *   Medium
 *
 * @description
 *  Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
 *
 *  The binary search tree is guaranteed to have unique values.
 *
 * @example 1
 *  Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
 *  Output: 32
 *
 * @example 2
 *  Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 *  Output: 23
 *
 * @note
 *  The number of nodes in the tree is at most 10000.
 *  The final answer is guaranteed to be less than 2^31.
 *
 * @solution
 *   本题实际上就是要求遍历二叉搜索树，直接深搜遍历，将满足要求的节点值相加即可。
 */

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function(root: TreeNode | null, L: number, R: number) {
    if (!root) {
        return 0;
    }

    let sum = 0;

    if (root.val < L) {
        sum = rangeSumBST(root.right, L, R);
    }
    else if (root.val > R) {
        sum = rangeSumBST(root.left, L, R);
    }
    else {
        sum += root.val;
        sum += rangeSumBST(root.left, L, R);
        sum += rangeSumBST(root.right, L, R);
    }

    return sum;
};
