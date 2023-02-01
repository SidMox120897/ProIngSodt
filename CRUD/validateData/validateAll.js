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
    var mensaje="";
    let corte_srt=srt.split("@");
    if(length(corte_srt)==2){
        if(corte_srt[1]!="unsaac.edu.pe"){
            mensaje+=msjA+" Correo no valido "+msjB;
        }
        else{
            if((corte_srt[0].length>=5) && (corte_srt[0].length<7 ) && containsLetter(corte_srt[0])){
                mensaje+=msjA+"El correo del alumno no es valido"+msjB;
            }
        }
    }
    return mensaje;
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