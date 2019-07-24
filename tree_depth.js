/**************************************************
 * This file includes 
 *  1. creating tree structure from a given array
 *  2. finding tree depth/height/level
 **************************************************/


 
/**
 * template for a Tree of nodes
 */
class NodeTree {
    constructor(value) {
        this.value = value;
        this.right = this.left = null;
    }
}


/**
 * 
 * @param {*} root 
 * @param {*} value 
 * 
 * This function traverses through the tree
 * to add the passed value as leaf/child node on its
 * appropriate parent
 */
let addNewNode = (root, value) => {
    if(!value) {
        return root;
    }
    
    if(!root) {
        return new NodeTree(value);
    }
    if(value > root.value) {
        root.right = addNewNode(root.right, value)
        return root;
    }

    if(value < root.value) {
        root.left = addNewNode(root.left, value)
        return root;
    }
}

/**
 * 
 * @param {*} arr 
 * creates a tree structure 
 * from a given array of elements
 */
let createTreeFromArray = (arr) => {
    if (arr.length < 1) {
        return null;
    } 

    let root = null;
    for(let i=0; i < arr.length; i++) {
        root = addNewNode(root, arr[i])
    }
    return root;
}

let treeMaxDepth1 = (tree) => {
    if(!tree) {
        return 0;
    }

    return Math.max(treeMaxDepth1(tree.left), treeMaxDepth1(tree.right))+1;
}

let treeMaxDepth = (root) => {
    if(!root) {
        return 0;
    }

    const right = treeMaxDepth(root.right);
    const left = treeMaxDepth(root.left);
   
    if(left > right) {
        return left + 1;
    } 
    else {
        return right + 1
    }
}

//                  100
//                 /   \
//                /     \
//               50      200
//             /   \
//            30   51
//          /   \
//         20   31
//       /
//      10



// test case
const tree = createTreeFromArray(
    // [3]
    // [3,9,20,null,null,15,7]
    // [3,1,20,15,27]
    // [8, 10, 12, 9, 5, 3, 6]
    [100, 200, 50, 51,30, 20, 31, 10]
    );


const treeDepth = treeMaxDepth(tree, 0);
console.log(treeDepth);




