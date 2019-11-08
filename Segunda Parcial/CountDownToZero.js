function counDownToZero(n){
    if(n < 1){
        return
    } else {
        console.log(n)
        counDownToZero(n-1)
    }
}

counDownToZero(5)