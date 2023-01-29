
/*confirma si un string contiene almenos una letra */
function containsLetter(str){
    return /[A-Za-z]/.test(str);
}
/*confirma si un string contiene almenos un Numero*/
function containsNum(str){
    return /\d/.test(str);
}
/*confirma si un string contiene solo letras y numeros */
function isOnlyLetterAndNum(str){
    return /^[A-Za-z0-9]*$/.test(str);
}
/*confirma si un string contiene solo Numeros */
function isOnlyNum(str){
    return /^[0-9]*$/.test(str);
}
/*confirma si un string contiene solo letras */
function isOnlyLetter(str){
    return /^[a-zA-Z]+$/.test(str);
}

/*saber si el tipo que se le asigna*/
/*Ejemplo: */
/*
    isType("Hola","string")
*/
/* type={"number","string","boolean","symbol","undefined","object","function"} */
function isType(str,type){
    if(typeof(str)===type){
        return true;
    }else{
        return false;
    }
}


module.exports={
    containsLetter,
    containsNum,
    isOnlyLetter,
    isOnlyNum,
    isOnlyLetterAndNum,
    isType
};