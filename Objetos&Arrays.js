//Trabalhando com intervalos
function range(min,max,i){

    if(min >= max){
        return new Array(0);
    }
    else{
        let array = new Array(i);
        let i = 0;

        for(i = 0; i < max; i++){
            array[i] = min + 1 + i;
        }

        return array;
    }
}

//Revertendo um Array
function reverseArray(array){
    let arrayReverso = new Array(array.length);
    let i = 0;

    for(i = 0; i < array.length; i++){
        arrayReverso[array.length - i] = array[i];
    }

    return arrayReverso;
}

//Trabalhando com listas
function toList(array){
    var list = {
        value: 0,
        rest: null
    };
    let i = 0;

    for(i = 0; i <= array.length; i++){
        let aux = {
            value: 0,
            rest: null
        }

        aux.value = array[i];
        list.rest = aux;
    }

    return list;
}

//DeepEquals
function deepEquals(obj1, obj2){
    let props1 = Object.entries(obj1);
    let props2 = Object.entries(obj2);
    let iguais = false;

    for(const aux of Object.keys(props1)){
        if(props1[aux] != props2[aux]){
            return iguais = false;
        }
        else{
            iguais = true;
        }
    }

    return iguais;
}