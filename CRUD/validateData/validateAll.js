const { containsLetter,
        containsNum,
        isOnlyLetter,
        isOnlyNum,
        isOnlyLetterAndNum,
        isType}=require('./validate');

function valName(srt, msjA='', msjB=''){
    var mensaje='';
    if(containsNum(srt)){
        mensaje+=msjA+' no debe tener Nros '+msjB+'\n';
    }
    if(!isOnlyLetter(srt)){
        mensaje+=msjA+' no debe tener Otros simbolos '+msjB+'\n';
    }
    return mensaje;
}

function valCodigo(srt, msjA='', msjB=''){
    var mensaje='';
    if(containsLetter(srt)){
        mensaje+=msjA+' no debe tener Letras '+msjB+'\n';
    }
    if(!isOnlyNum(srt)){
        mensaje+=msjA+' no debe tener Otros simbolos '+msjB+'\n';
    }
    return mensaje;
}

function valCorreo(srt, msjA='', msjB=''){
    
}

function valPhone(srt, msjA='', msjB=''){
    var mensaje='';
    if(containsLetter(srt)){
        mensaje+=msjA+' no debe tener Letras '+msjB+'\n';
    }
    if(!isOnlyNum(srt)){
        mensaje+=msjA+' no debe tener Otros simbolos '+msjB+'\n';
    }
    return mensaje;
}

function valPassword(srt, msjA='', msjB=''){
    var mensaje='';
    if(!isOnlyLetterAndNum(srt)){
        mensaje+=msjA+' no debe tener letras '+msjB+'\n';
    }
    return mensaje;
}

function valTexto(srt, msjA=''){
    var mensaje='';
    if(isType(srt,'string')){
        mensaje+=msjA+' no es un texto '+msjB+'\n';
    }
    return mensaje;
}

module.exports={
    valName,
    valCodigo,
    valCorreo,
    valPhone,
    valPassword,
    valTexto
};