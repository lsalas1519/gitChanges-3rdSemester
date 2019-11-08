let fibonacci = function(n){
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
};

fibonacci(5);

//imperative N recursive 
const factorial = n => n<2 ? 1 : n*factorial(n-1);