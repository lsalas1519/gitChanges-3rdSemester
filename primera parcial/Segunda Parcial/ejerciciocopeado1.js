//class
class Math{
    constructor(x){
        this.x=x
    }
}

//iife use class
(function useMath(){
    let t=new Math(0,3);
    console.log(t.x)
    t.x=-1;
    console.log(t.x);
})()