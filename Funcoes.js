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