class Node{
    constructor (value) {
        this.value = value
        this.right = null
        this.left = null
      }
}
let node1= new Node('Root');
let node2= new Node('1');
let node3= new Node('2');
let node4= new Node('3');
let node5= new Node('4');
node1.left=node2;
node1.right=node3;
node2.right=node4;
node2.left=node5;

console.log(node1);
console.log(node2);
console.log(node3);
console.log(node4);
console.log(node5);