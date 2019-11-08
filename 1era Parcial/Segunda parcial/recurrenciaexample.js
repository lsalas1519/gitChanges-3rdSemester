class recurrencia{

    constructor(){

    }

    Recurrency(n){
    /**   f=new Array();
     f[0]=3;
     i=0;
     if(f[0]===3){
         for(i=0;i<10;i++){
            f[i]=(2*(f[i]-1)+3); 
        }
     }*/
     return(n===0)?3:(2*this.Recurrency (n-1)+3)
     
    }

    ciclo(n){
        let arr =[];
        for (let i=0;i<10;i++){
            arr.push(this.Recurrency(i));
        }
        return arr;
        console.log(arr)
    }

}