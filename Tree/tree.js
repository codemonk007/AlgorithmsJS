let n = require('./node');
let node = n.node;
module.exports.tree = class tree {

    constructor() {
        this.root = null;
        this.count = 0;
        this.Tr = [];
    }
    insert(value) {
        if (!this.root) {
            this.root = new node(value)
        }
        else this.inserNode(this.root, value)
        return this.root;
    };
    inserNode(Rnode, value) {

        if (Rnode.value < value) {
            if (!Rnode.right) {
                Rnode.right = new node(value)
            }
            return this.inserNode(Rnode.right, value);
        }
        else if (Rnode.value > value) {
            if (!Rnode.left) {
                Rnode.left = new node(value)
            }
            return this.inserNode(Rnode.left, value);
        }
    }
    remove() {

    };
    findMin() {
        if (!this.root.left) {
            return this.root.value;
        }
        let temp = this.root;
        while (temp.left) {
            temp = temp.left;
        }
        return temp.value;
    };
    findMax() {
        if (!this.root.right) {
            return this.root.value;
        }
        let temp = this.root;
        while (temp.right) {
            temp = temp.right;
        }
        return temp.value;
    };

    findHelper(Rnode, value, count) {
        if (Rnode.value && Rnode.value > value) {
            count++;
            return this.findHelper(Rnode.right, value, count);
        }
        else if (Rnode.value && Rnode.value < value) {
            count++;
            return this.findHelper(Rnode.left, value, count);
        }
        else if (Rnode.value == value) {
            return count;
        }
        else {
            return null;
        }

    }
    isPresent(value) {
        let temp = this.root;
        while (temp) {
            if (temp.value == value) {
                return true;
            }
            else if (temp.value > value) {
                temp = temp.left;
            }
            else {
                temp = temp.right;
            }
        }
        return false;
    }

    findMaxHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        else {
            let left = this.findMaxHeight(node.left)
            let right = this.findMaxHeight(node.right)
            if (left > right) {
                return left + 1;
            }
            else {
                return right + 1
            }
        }
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // node has no children 
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child 
                if (node.left == null) {
                    return node.right;
                }
                // node has no right child 
                if (node.right == null) {
                    return node.left;
                }
                // node has two children 
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
    IsBinarySearchTree(node = this.root) {
        let min = this.findMin(node);
        console.log(min);
        let max = this.findMax(node);
        console.log(max);
        this.findifBST(node, min, max);
    }
    findifBST(node, min, max) {
        if (node == null) {
            return true;
        }
        if (node.data > min && node.data < max && this.findifBST(node.left, min, node.data) && this.findifBST(node.right, node.data, max)) {
            console.log(node.data)
            return true;
        }
        else {
            return false;
        }
    };

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        console.log(left)
        console.log(right)
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left); ''
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }


    noOfNodes() { };
    sumOfNodes() { };
    inOrder() { };
    preorder() { };
    levelOrder() { };

    checklength(root, count) {

        if (root == null) {
            return 0;
        }
        return count + this.checklength(root.left, count + 1) + this.checklength(root.right, count + 1)
    }
    DFS(node) {
        if (node == null) return;
        console.log(node.value)
        node.left && this.DFS(node.left);
        node.right && this.DFS(node.right);
    }

    FindClosestvalue(node, target) {
        let finalValue = this.root.value;
        function nodeHelper(node) {
            if (node == null) return value;
            if (Math.abs(node.value - target) < Math.abs(finalValue - target)) {
                finalValue = node.value
            }
            if (node.right) nodeHelper(node.right);
            if (node.left) nodeHelper(node.left);
        }
        nodeHelper(node);
        console.log(finalValue);
    }

    sum(node) {
        let finalArray = [];
        let sum = 0;
        function nodeSum(node, sum) {

            if (!node.left && !node.right) {
                finalArray.push(sum + node.value);
                return finalArray;
            }
            if (node.left) nodeSum(node.left, sum + node.value);
            if (node.right) nodeSum(node.right, sum + node.value);
        }
        nodeSum(node, 0);
        return finalArray
    }

    depthFirstSearch(node) {
        // Write your code here.

    }


    insertNode(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        function inserthelper(node) {
            if (node == null) {
                return new node(value);
            }
            else {
                if (!node.left && !node.right) {
                    return new node(value);
                }
                if (value < node.value) {
                    if (node.left) inserNode(node.left);
                }
                if (value > node.value) {
                    if (node.right) inserNode(node.right);
                }
            }
        }
    }

    ValidateifBST(node) {
        function isBST(node, minValue, maxValue) {
            if (node == null) return true;
            if (node.value < minValue && node.value >= maxValue) return false;
            const leftIsValid = isBST(node.left, minValue, node.value)
            return leftIsValid && isBST(node.right, node.value, maxValue);
        }
        return isBST(node, -Infinity, Infinity);
    }
    inOrderTraverse(node) {
        let array = [];
        // Write your code here.
        function traverse(node) {
            if (node == null) return array;
            array.push(node.value)
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            return array;
        }
        return traverse(node);
    }

    preOrderTraverse(node) {
        // Write your code here.
        let array = [];
        // Write your code here.
        function traverse(node) {
            if (node == null) return array;
            node.left && traverse(node.left);
            array.push(node.value)
            node.right && traverse(node.right);
            return array;
        }
        return traverse(node);
    }

    postOrderTraverse(node) {
        // Write your code here.
        let array = [];
        // Write your code here.
        function traverse(node) {
            if (node == null) return array;
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            array.push(node.value)
            return array;
        }
        return traverse(node);
    }

    createMinBST(array, bst, start, end) {
        if (start > end) return;
        const midvalue = Math.floor((start + end) / 2);
        let ValueToAdd = array[midvalue];
        if (bst == null) {
            bst = new tree(ValueToAdd);
        }
        else {
            bst.insertnext(ValueToAdd);
        }
        createMinBST(array, bst, start, midvalue - 1);
        createMinBST(array, bst, midvalue + 1, end);
        return bst;
    }

    insertnext(value, node) {
        if (node == null) return;
        if (value < node.value) {
            if(!node.left){
                node.left = new node(value);
            }
            else {
                this.insertnext(value, node.left)
            }
        }
        else if (value > node.value) {
            if(!node.right){
                node.right = new node(value);
            }
            else {
                this.insertnext(value, node.right)
            }
        }
    }

    invertBSt(node){
    if(node == null) return;
    if(node.left && node.right){
        let temp = node.right;
        node.right = node.left
        node.left = temp;
    }
    if(node.left != null && node.right == null){
        let temp = node.left;
        node.left = null;
        node.right = temp;
        return node;
    }
    if(node.left == null && node.right != null){
        let temp = node.right;
        node.right = null;
        node.left = temp;
        return node;
    }
    node.left && this.invertBSt(node.left);
    node.right && this.invertBSt(node.right)
    return node;   ``     
    }


    ClosestInBST(node,value){
        let TValue = -1;
        let nodevalue =node.value;
        function closestHelper(node){
            if(node == null)return;
            let temp = Math.abs(node.value-value);
            if(temp >=0 && temp < TValue){
                TValue = temp;
                nodevalue = node.value;
            }
            if(node.left) closestHelper(node.left);
            if(node.right) closestHelper(node.right);
        }
        closestHelper(node);
        return nodevalue;
    }
     minHeightBst(array) {
        // Write your code here.
      }
      nodeDepth(node){
        let mainArray =[];
        function depthHelper(node,depth){
            if(!node.left && !node.right) {
                mainArray.push(depth)
                return mainArray;
            }
            if(node.left){
                 depthHelper(node.left,depth+1);
            }
            if(node.right){
                 depthHelper(node.right,depth+1);
            }
        }
        depthHelper(node,0);
        return mainArray;

      }
      closestValueInBST(node1){
        let tArray = [];
         function brnachSumHelper(node,tempValue){
             if(!node) return;
             if(node.left == null && node.right == null) {
                tArray.push(tempValue+node.value); 
                return tArray;
             }
             tempValue = tempValue + node.value;
             if(node.left){
                 brnachSumHelper(node.left,tempValue)
             }
             if(node.right){
                brnachSumHelper(node.right,tempValue)
            }
            return tArray;
         }
        return brnachSumHelper(node1,0);
      }
      DFSBst(node1){
          let dfsArray = [];
          function dfsHelper(node){
            if(!node) return;
            dfsArray.push(node.value)
            if(node.left){
                dfsHelper(node.left);
            }
            if(node.right){
                dfsHelper(node.right);
            }
            return dfsArray;
          }
         return dfsHelper(node1);
      }
       minHeightBst(array1) {
        // Write your code here.
        function minheight(array1,start,end,node){
            if(end<start)return;
            let mid = Math.floor((start+end)/2);
            if(!node){
                node = new BST(array1[mid])
            }
            else{
                insert(array1[mid])
            }
            minheight(array1,start,mid-1,node)
            minheight(array1,mid+1,endnode)
            return node
        }
        minheight(array1,0,array1.length-1,node)
      }   

      invertABinaryTree(node){
       function BT(node){
        if(!node)return;
        if(node.left && node.right)
        {
            let temp = node.right;
            node.right = node.left;
            node.left = temp
        }
        else if(!node.left && node.right){
            node.left = node.right;
            node.right =null;
        } 
        else if(node.left && !node.right){
            node.right =node.left;
            node.left= null;
        }
        
        if(node.left){
            BT(node.left)
        }
        if(node.right){
            BT(node.right)
        }
        return node;
       }
       return BT(node)
      }
}