let t = require('./tree');
let tree = t.tree;

let client = new tree();
client.insert(50)
client.insert(60)
client.insert(10)
client.insert(15)
client.insert(11)
client.insert(5)
client.insert(70)
client.insert(80)
client.insert(90)
// client.findpos(10)
// client.findMax()
// client.isPresent(5)
// console.log(JSON.stringify(client));
// console.log(client.checklength(client.root,0))
// console.log(client.FindClosestvalue(client.root, 76));
// console.log(client.sum(client.root));
// console.log(client.depthFirstSearch(client.root));
// console.log(client.ValidateifBST(client.root));
// console.log(client.inOrderTraverse(client.root));
// console.log(client.preOrderTraverse(client.root));
// console.log(client.postOrderTraverse(client.root));
// console.log(JSON.stringify(client.root));
// console.log(JSON.stringify(client.invertBSt(client.root)));
// console.log(client.ClosestInBST(client.root,88));
// console.log(client.closestValueInBST(client.root));
console.log(JSON.stringify(client.invertABinaryTree(client.root)));








