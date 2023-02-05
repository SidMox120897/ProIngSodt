const { containsLetter,
        containsNum,
        isOnlyLetter,
        isOnlyNum,
        isOnlyLetterAndNum,
        isType}=require('./validate');

//Valida los nombres y los apellidos de forma general (Docente, Alumno, Admin, Equipo)
//Los nombres y apellidos no deben tener NRos o simbolos

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

//Valida los Codigos de forma general (Docente, Alumno, Admin, Equipo,grupo)
//Los Codigos no deben tener letras o simbolos

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

//Valida los Correos de forma general (Docente, Alumno, Admin)
//Los Correos deben unsaac.edu.pe
//Si es alumno los digitos antes del '@' no deben tener letras
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
//Valida los Telfonos de forma general (Docente, Alumno)
//Los Telfonos no deben tener letras o simbolos
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
//Valida la contraseña de forma general (Docente, Admin)
//Los contraseñas no deben tener simbolos
function valPassword(srt, msjA='', msjB=''){
    var mensaje='';
    if(!isOnlyLetterAndNum(srt)){
        mensaje+=msjA+' no debe tener simbolos '+msjB+'\n';
    }
    return mensaje;
}
//Valida los textos (temas, descripcion) de Equipo
//Los textos deben ser string
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