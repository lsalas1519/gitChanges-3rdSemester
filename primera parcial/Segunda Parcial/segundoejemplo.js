function countDownToCero(n){
     if (n<1){
         return
     } else{
         console.log(n)
         countDownToCero(n-1);
     }
}

countDownToCero(5);