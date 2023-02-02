/*From Others XD*/
const express = require('express');
const router = express.Router();

// const md5 = require('md5');
// const jwt = require('jsonwebtoken');

/*Personal BooksXD */
const { GetInfo, PutInfo }=require('../connection/connection')
const scriptAll='select * from tGrupo';
const scriptInsertar='insert into tGrupo(CodEquipo,CodAlumno) values(?,?)';
const scriptDelete='delete from tGrupo where (CodEquipo = ? AND CodAlumno = ?)';


router.post('/register', async function (req, res, next) {
  var ArrValues=[
    req.query.CodEquipo,
    req.query.CodAlumno
  ];
  //Se Crea un mensaje validando los datos que se RECIBEN
  var msj='';
  msj+=valCodigo(req.query.CodEquipo,'El Codigo');
  msj+=valCodigo(req.query.CodAlumno,'El apodo nickname');
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
  PutInfo(scriptDelete, [req.query.CodEquipo, req.query.CodAlumno],function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
});

/*GETs */

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
