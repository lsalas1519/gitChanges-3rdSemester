//Ejercicio de clase del 3 de octubre
let ex1=2000;
let ex2=2019;
let ex3=2020;
let ex4=2076;
let ex5=3000;


function weekProve(day){
    return ((day + Math.floor((day-1)/4)- Math.floor(((day-1)/100))+Math.floor(((day-1)/400)) )%7 );
}

console.log('--------------------------------------------------')
console.log('--------------------------------------------------');
console.log('El año '+ex1+' '+weekProve(ex1));
console.log('El año '+ex2+' '+weekProve(ex2));
console.log('El año '+ex3+' '+weekProve(ex3));
console.log('El año '+ex4+' '+weekProve(ex4));
console.log('El año '+ex5+' '+weekProve(ex5));
