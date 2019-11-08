class MasTres {
    constructor(n){
        this.n = n;
    }
    masTres(n){
        return n == 0 ? 3 : 2 * this.masTres(n-1) + 3;
    }
    impresion(n){
        for(let i = 0; i <= n; i++){
            console.log("f(" + i + ")=" + this.masTres(i));
        }
    }
}
let ej = new MasTres;
console.log(ej.masTres(0));
console.log(ej.masTres(3));
console.log(ej.impresion(10));