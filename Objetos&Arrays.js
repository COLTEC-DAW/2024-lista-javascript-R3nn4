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

function reverseArray(array){
    let arrayReverso = new Array(array.length);
    let i = 0;

    for(i = 0; i < array.length; i++){
        arrayReverso[array.length - i] = array[i];
    }

    return arrayReverso;
}

function toList(array){
    var list = {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }
    };
    let i = 0;

    for(i = 0; i < 3; i++){
        switch (i){
            case 0:
                list.value = array[i];
                break;
            
            case 1:
                list.rest.value = array[i];
                break;
            
            case 2:
                list.rest.rest.value = array[i];
                break;
        }
    }

    return list;
}

function deepEquals(obj1,obj2){
}