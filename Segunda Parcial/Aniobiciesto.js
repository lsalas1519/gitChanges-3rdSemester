let yearA=1896;
let yearB = 1900;
let yearC = 2000;
let yearD=2100;
let concatenacion="";
//Ejercicio de clase del 3 de octubre
let ex1=1996;
let ex2=2020;
let ex3=2076;
let ex4=3000;


function bisiesto(year){
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
}

console.log('El año '+yearA+' '+bisiesto(yearA));
console.log('El año '+yearB+' '+bisiesto(yearB));
console.log('El año '+yearC+' '+bisiesto(yearC));
console.log('El año '+yearD+' '+bisiesto(yearD));
console.log('--------------------------------------------------')
console.log('--------------------------------------------------');
console.log('El año '+ex1+' '+bisiesto(ex1));
console.log('El año '+ex2+' '+bisiesto(ex2));
console.log('El año '+ex3+' '+bisiesto(ex3));
console.log('El año '+ex4+' '+bisiesto(ex4));

