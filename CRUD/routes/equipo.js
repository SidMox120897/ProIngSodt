/*From Others XD*/
const express = require('express');
const router = express.Router();

// const md5 = require('md5');
// const jwt = require('jsonwebtoken');

/*Personal BooksXD */
const { GetInfo, PutInfo }=require('../connection/connection');
const { valTexto, valName } = require('../validateData/validateAll');
const scriptAll='select * from tEquipo';
const scriptInsertar='insert into tEquipo(CodEquipo, CodDocente, CodAlumnoGuia, nombreEquipo, temas, descripcion) values(?,?,?,?,?,?)';
const scriptDelete='delete from tEquipo where CodEquipo = ?';

router.post('/register', async function (req, res, next) {
  var ArrValues=[
    req.query.CodEquipo,
    req.query.CodDocente,
    req.query.CodAlumnoGuia,
    req.query.nombreEquipo,
    req.query.temas,
    req.query.descripcion
  ];
  //Se Crea un mensaje validando los datos que se RECIBEN
  var msj='';
  msj+=valCodigo(req.query.CodEquipo,'El Codigo');
  msj+=valCodigo(req.query.CodDocente,'El apodo nickname');
  msj+=valCodigo(req.query.CodAlumnoGuia,'El nombre','Volver a escribir');
  msj+=valName(req.query.nombreEquipo,'El Nombre del grupo','Volver a escribir');
  msj+=valTexto(req.query.temas,'El tema');
  msj+=valTexto(req.query.descripcion,'La Descripcion');
  //Si el msj (mensaje) esta vacio
  //significa que no se encontro ningun error
  //despues se busca un error relacionado a la conexion con la BD
  //puesto esto se envia un mensaje confirmando las respuestas con el status
  if(msj===''){
    PutInfo(scriptInsertar, ArrValues,function(err,data){
      if(err){
        res.send({status:0 , respuesta:err});
      }else{
        res.send({status:1, respuesta:data});
      }
    });
  }else{
    res.send({status:0 , respuesta:msj});
  }
});


router.post('/delete', async function (req, res, next) {
  PutInfo(scriptDelete, [req.query.CodEquipo],function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
});


router.get('/search', async function (req, res, next) {
  GetInfo(scriptAll+' where CodEquipo = ?',[req.query.CodEquipo],function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
});


router.get('/allin', async function (req, res, next) {
    GetInfo(scriptAll,[],function(err,data){
      if(err){
        res.send(err);
      }else{
        res.send(data);
      }
    });
  });
module.exports = router;
