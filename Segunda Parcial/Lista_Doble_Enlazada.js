let node1 ={
    data:"Nodo1",
    next:null,
    prev:null
}

let node2 ={
    data:"Nodo2",
    next:null,
    prev:null
}

let node3 ={
    data:"Nodo3",
    next:null,
    prev:null
}

node1.next=node2
node2.next=node3
node3.prev=node2
node2.prev=node1

console.log(node1.next.data);
console.log(node2.next.data);
console.log(node3.prev.data);
console.log(node2.prev.data);
console.log(node3.next); 