// 894. All Possible Full Binary Trees



// Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

// Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.

// A full binary tree is a binary tree where each node has exactly 0 or 2 children.





/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    

    // map to keep track of duplicates

    let map = {}

        function dfs(nodeNum){


            if(map[nodeNum]){
                return map[nodeNum]
            }

            let tree = []

            if(nodeNum == 1){

                tree.push(new TreeNode(0))
                map[nodeNum] = tree
                return tree
            }

            for(let leftNode = 1; leftNode < nodeNum; leftNode +=2){
                let rightNode = nodeNum - 1 - leftNode

                let leftSubTree = dfs(leftNode)
                let rightSubTree = dfs(rightNode)

                for(let left of leftSubTree){
                    for(let right of rightSubTree){
                        tree.push(new TreeNode(0, left, right))
                    }
                }
            }

            map[nodeNum] = tree
            return tree
        }

        if(n % 2 == 0){
            return []
        }

        return dfs(n)
    
};