function intRandom(r,c){
    let array = new Array(r);
    for(let i = 0; i < r; i++){
        array[i] = new Array(c);
        for(let j = 0; j<c; j++){
            array[i][j] = Math.random();
        }
    }
    return array;
}
console.log(intRandom(5,5));
