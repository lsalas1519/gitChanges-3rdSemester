//máximo común divisor
//complegidad O(n)

var txt1,txt2;


function fmcb(a,b){
    var m =a;
    var n=b;
    var aux;

    var bandera= true;
    while(bandera){
        if(m<n){
            aux=m;
            m=n;
            n=aux;

        }else if(m==n){
            console.log("El mcd entre "+a+" y "+b+" es: "+n+"\n");
            bandera=false;

        }else{
            c=Math.floor(m/n);
            r=m%n;
            if(r==0){
                console.log("el MCD entre "+a+" y "+b+" es: "+n+"\n");
                bandera=false;
            }else{
            m=n;
            n=r;
            }
        }
    }

}
txt1=parseInt(prompt("Ingrese el primer número "));
txt2=parseInt(prompt("Ingrese el segundo número "));
fmcb(txt1,txt2);