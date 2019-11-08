//complegidad O(n)
function fibonacci(numero)
{
    var var1 = 0;
    var var2 = 1;
    var var3;

    console.log(var1+"");
    console.log(var2+"");

    for(var i=1; i <= numero;i++)
    {
        console.log(var3);
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
       
    }
}