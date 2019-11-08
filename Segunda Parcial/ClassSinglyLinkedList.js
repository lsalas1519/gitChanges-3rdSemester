class SinglyLinkelist{
    constructor(){
        this.hed=null;
        this.tail=null;
        this.length=0;
        let node1={
            data:"Nodo1",
            next:null,
            prev:null
        }

    }

    InsertNode(){

        if (this.tail.next === this.tail){
            let newNode = new Node(data)
            this.head.next= newNode;
            newNode.next=this.tail
        }

    }



}