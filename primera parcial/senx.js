console.log('senX');
var txt1,txt2,s,fac=1;
txt1=parseInt(prompt("Ingresa la cantidad de terminos a generar: "));
txt2=parseInt(prompt("Ingrese el valor de X: "));

s=txt2;
for (var i=2;i<=txt1;i++){

    fac=fac*((i*2)-2)*((i*2)-1);
    if (i%2==0){
        s=s-Math.pow(txt2,i*2-1)/fac;

    }else{
        s=s+Math.pow(txt2,i*2-1)/fac;
    }
}
console.log("El seno de X se aproxima a: ",s.toFixed(2));