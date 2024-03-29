/*Card
0 = clubs(trebol), 1= diamonds, 2 = hearts, and 3 = spades(pica) 
*/

class Card {


    printCard(num) {
        let carta = [];

        if (num <= 13) {
            carta[0] = 0;
        } else if (num <= 26) {
            carta[0] = 1;
        } else if (num <= 39) {
            carta[0] = 2;
        } else {
            carta[0] = 3;
        }

        switch (num % 13) {
            case 0:
                carta[1] = 13;
                break;

            case 1:
                carta[1] = 1;
                break;

            case 2:
                carta[1] = 2;
                break;

            case 3:
                carta[1] = 3;
                break;

            case 4:
                carta[1] = 4;
                break;

            case 5:
                carta[1] = 5;
                break;

            case 6:
                carta[1] = 6;
                break;

            case 7:
                carta[1] = 7;
                break;

            case 8:
                carta[1] = 8;
                break;

            case 9:
                carta[1] = 9;
                break;

            case 10:
                carta[1] = 10;
                break;

            case 11:
                carta[1] = 11;
                break;

            case 12:
                carta[1] = 12;
                break;

        }

        return carta;

    }

    printNumber(k, n) {

        let carta = 0;

        if (k == 0) {
            carta = n;
        } else if (k == 1) {
            carta = n + 13;
        } else if (k == 2) {
            carta = n + 26;
        } else if (k == 3) {
            carta = n + 39;
        } else carta = "No"
        return carta;

    }

    par(){
        //Combinación sin repetición -> C(n,r) = n!/(n-r)!*r!

        function factorial(n) {
            return n <= 1 ? 1 : n * factorial(n - 1);
        }
        // total de cartas 52
        //13 tipos 4 iguales
        // 5 cartas por mano

        // parejas
        // parejas * 3 cartas 
        //podria ser  A y A y las demás
        // (13 de 1) (4 de 2)


        //formula = n! -/ (((n-k)!)*(k!))

        //posibilidades con pares 
        //primer  n=13 k=1 
        let primer= (factorial(13) / (factorial(13-1)*(factorial(1))));
        // segundo n=4 k=2
        let seg= (factorial(4) / (factorial(4-2)*(factorial(2))))
        //n=12 k=3
        let tercer= (factorial(12) / (factorial(12-3)*(factorial(3))))
        //n=4 K=1
        let cuartoFir=(factorial(4) / (factorial(4-1)*(factorial(1))))
        let cuatro= Math.pow(cuartoFir,3);

        let num_posibles=(factorial(52) / (factorial(52-5)*(factorial(5))))
        let operacion= primer*seg*tercer*cuatro;
        let prob=operacion/num_posibles;

        //probabilidad se define por  P= casos favorables/casos posibles
       

        return ((prob));
    }


}

carta = new Card()
console.log(carta.printNumber(2,1));
console.log(carta.printCard(27));
console.log(carta.par());