var array =[6,3,4,7];
var guardar; 
console.log("Los elementos desordenados son: "+ array);
menor=array[0];
for(i=0;i<array.length;i++){
    for(j=0;j<array.length;j++){
        if (array[i]< menor){
            menor=array[i];
        }
        
    }
    guardar= menor+",";
 
}



console.log("x: "+menor);
console.log(guardar);