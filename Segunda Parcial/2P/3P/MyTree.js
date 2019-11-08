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
var arr = ['Nodo Raiz','Nodo Hijo primer nivel','NodoHijo segundo nivel','Nodo Hijo priemer nivel2','Nodo hijo segundo nivel']
for (var i = 0; i < arr.length; i++) {
    t.addRecursive(arr[i])
  }
  t.preOrder()
  //changes 
console.log()
