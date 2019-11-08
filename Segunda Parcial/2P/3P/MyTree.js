class Node{
    constructor (value) {
        this.value = value
        this.right = null
        this.left = null
      }
}

class Tree {
    constructor () {
      this.root = null
    }
    addRecursive (value, node = this.root) {
        if (!node) {
          this.root = new Node(value)
          return
        }
    
        if (value < node.value) {
          if (node.left) {
            return this.addRecursive(value, node.left)
          }
          node.left = new Node(value)
          return
        } else { // vamos hacia la derecha
          if (node.right) {
            return this.addRecursive(value, node.right)
          }
          node.right = new Node(value)
          return
        }
      }
    
    preOrder (node = this.root) {
        if (!node) {
          return
        }
        console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
      }

      
}
var t = new Tree()
var arr = ['Sol','Mercurio','venus','tierra','marte','Jupiter','Saturno','Urano','Neptuno','Pluton']
for (var i = 0; i < arr.length; i++) {
    t.addRecursive(arr[i])
  }
  t.preOrder()
  //changes 
console.log()
