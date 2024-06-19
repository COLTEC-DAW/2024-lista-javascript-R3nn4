//Desenhando um triângulo

var numeroLinhas = prompt("Insira o numero de colunas desejado:");
var i = 0;
var linha = "";

for(i=0; i < numeroLinhas; i++){
    linha += "#";
    console.log(linha);
}
i = 0;

console.log("\n \n \n");

//Tabuleiro de xadrez
var numeroLinhas2 = prompt ("Insira o numero de colunas do tabuleiro de xadrez:");
var linha2 = ["# # # #"];

for(i = 0; i < numeroLinhas2; i++){
    if(i % 2 == 0){
        console.log(linha2 + "\n");
    }else{
        console.log(" " + linha2 + "\n");
    }
}
i = 0;

console.log("\n \n \n");

//Verificando palíndromos
var palavra = prompt("Insira uma palavra");
const arvalap = Array.from(palavra).reverse().join("");

if(palavra == arvalap){
    console.log("Esta palavra é um palíndromo!");
}else{
    console.log("Esta palavra não é um palíndromo!");
}

console.log("\n \n \n");

//Um programa diferente...
var f = "Fizz";
var b = "Buzz";

for(i = 0; i < 101; i++){
    if(i % 3 == 0){
        if(i % 5 == 0){
            console.log(f + b);    
        }
        else{
            console.log(f);
        }
    }
    else if(i % 5 == 0){
        console.log(b);
    }else{
        console.log(i);
    }
}