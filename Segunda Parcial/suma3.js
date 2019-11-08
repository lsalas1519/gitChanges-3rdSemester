let masTres = function(n){
    return n == 0 ? 3 : 2 * masTres(n-1) + 3 ;
};
//masTres(0);

let suma = 0;
for(let i = 0; i < 10; i++){
    console.log(suma = "f(" + i + ")=" + masTres(i));
}
//return suma;