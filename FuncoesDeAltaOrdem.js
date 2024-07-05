// ------- Ordenação -------

function criterioOrdenacao(i, n){
    console.log(i , n);
    //insira aqui o criterio desejado para a ordenação
    if(i > n){
        return true;
    }
    else{
        return false;   
    }
}

function troca(vetor, a, b){
    let aux = vetor[a];
    vetor[a] = vetor[b];
    vetor[b] = aux;
}

function ordena(vetor, tamVetor, criterio){
    if(tamVetor < 1){ return; }

    let i;
    for(i = 0; i < tamVetor; i++){
        if(criterio(vetor[i], vetor[i+1]) == true){
            troca(vetor, i, i+1);
        }
    }

    ordena(vetor, tamVetor-1, criterio);
}

var vetor = [1,9,3,4,5,6,7,8,2];
ordena(vetor, vetor.length, criterioOrdenacao);
console.log(vetor);

// ------- Criptografia -------

function cifra(i, chave){
    //descriptografa o caracter baseado na cifra de cesar
    //mudar a cifra aqui
    if((i.charCodeAt(0) < 65 || i.charCodeAt(0) > 90) && (i.charCodeAt(0) < 97 || i.charCodeAt(0) > 122)){
        return i;
    }else{
        aux = i.charCodeAt(0) + chave - 65;
        if(aux > 25){
            aux -= 26;
        }
        return i = String.fromCharCode(aux + 65); 
    }
}

function encripta(string, chave, cifra){
    //Separa a string em vetor e percorre seus elementos
    //criptografando-os, para depois ser juntado novamente em uma string
    let i;
    string = string.toUpperCase();
    let aux = string.split("");

    for(i = 0; i < string.length; i++){
        aux[i] = cifra(aux[i], chave);
    }

    return aux.join("");
}

var chave = 12;
var string = "Coltec"
console.log(string);

string = encripta(string, chave, cifra);
console.log(string);

// ------- Verificando um Número -------

function criterioVerificacao(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function verifica(num, criterio){
    if(criterio(num) == true){
        return true;
    }
    else{
        return false;
    }
}

var numero = 12;
console.log(verifica(numero, criterioVerificacao));

// ------- Transformações em uma String -------

function transformacao(char){
    char = char.toLowerCase();
    
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        char = char.toUpperCase();
    }
    else{
        char = char.toLowerCase();
    }
    return char;
}

function transformaString(string, transformacao){
    let i;
    let stringAux = [];
    for(i = 0; i < string.length; i++){
        stringAux[i] = transformacao(string[i]);
    }
    return stringAux.join("");
}

var string = "Coltec";
var stringNova = transformaString(string, transformacao);
console.log(stringNova);

// ------- Funcoes Matriciais -------

function funcaoMatricial(numLinhas, numColunas){
    let i;
    let j;
    let matriz = [];

    for(i = 0; i < numLinhas; i++){
        let linha = [];

        for(j = 0; j < numColunas; j++){
            linha[j] = i + j; //inserir aqui a lei da função matricial;
            console.log("Linha " + i + ", Coluna " + j + " = " + linha[j]);
        }
        
        matriz[i] = linha;
    }
}

function criaMatriz(numMatrizes, funcaoMatricial){
    let i;
    let matrizDeMatrizes = [];
    for(i = 0; i < numMatrizes; i++){
        console.log("Matriz " + i);
        matrizDeMatrizes[i] = funcaoMatricial(i+1, i+1);
    }

    return matrizDeMatrizes;
}

var numMatrizes = 5;
criaMatriz(numMatrizes, funcaoMatricial);