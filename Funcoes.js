//Mínimo e Máximo
function min(a,b){
    if(a == b)
    {
        return 0;
    }
    else if(a < b)
    {
        return a;
    }
    else if(b < a){
        return b;
    }
    else{
        console.log("Erro ao inserir numeros");
    }
}

function max(a,b){
    if(a == b)
    {
        return 0;
    }
    else if(a > b)
    {
        return a;
    }
    else if(b > a){
        return b;
    }
    else{
        console.log("Erro ao inserir numeros");
    }
}

//Recursividade
function mod2(number){
    let ehDivisivel = false;

    if((number / 2) % 1 == 0)
    {
        return ehDivisivel = true;
    }
    else
    {
        return ehDivisivel = false;
    }
}

function mod(num, mod){
    let ehDivisivel = false;

    if((num / mod) % 1 == 0)
    {
        return ehDivisivel = true;
    }
    else
    {
        return ehDivisivel = false;
    }
}

//Contando caracteres
function countChars(frase, c){
    var i = 0;
    var conta = 0;

    for(i = 0; frase.length; i++){
        if(frase[i] == c){
            conta++;
        }
    }

    return conta;
}

var a = prompt("Insira um numero: ");
var b = prompt("Insira outro numero: ");
var valorMin = min(a,b);
var valorMax = max(a,b);
var Amod2 = mod2(a);
var BmodA = mod(b,a);

console.log(a + "\n" + b  + "\n" + valorMin + "/" + valorMax + "O primeiro numero eh divisivel por 2?: " + Amod2 + "\n" +
"O segundo numero eh divisivel pelo primeiro?: "  + "\n");

var string = prompt("Insira uma frase: ");
var char = prompt("Insira um caractere presente nessa frase: ");

var quantidade = countChars(string, char);
console.log("\n Este caracter aparece " + quantidade + " vezes na sua frase!");