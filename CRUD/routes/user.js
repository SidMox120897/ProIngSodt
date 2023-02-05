/*From Others XD*/
const express = require('express');
const router = express.Router();

// const md5 = require('md5');
// const jwt = require('jsonwebtoken');

/*Personal BooksXD */
const { GetInfo, PutInfo }=require('../connection/connection');
const { valPassword } = require('../validateData/validateAll');

const scriptAll='select * from tUser';
const scriptInsertar='insert into tUser(iduser,nickname,nameuser,surname,password) values(?,?,?,?,?)';
const scriptDelete='delete from tUser where iduser = ?';

/* POST users listing. */

router.post('/register', async function (req, res, next) {
  //Valores que se recibe
  var ArrValues=[
    req.query.idUser,
    req.query.nickname,
    req.query.nameuser,
    req.query.surnameuser,
    req.query.password
  ];
  //Se Crea un mensaje validando los datos que se RECIBEN
  var msj='';
  msj+=valCodigo(req.query.idUser,'El Codigo');
  msj+=valName(req.query.nickname,'El apodo nickname');
  msj+=valName(req.query.nameAlumno,'El nombre','Volver a escribir');
  msj+=valName(req.query.surname,'El Apellido','Volver a escribir');
  msj+=valPassword(req.query.password,'El numero de celular');
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
  PutInfo(scriptDelete, [req.query.idUser],function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
});

router.post('/login', async function (req, res, next) {
  GetInfo(scriptAll+' where (nickname = ? AND password = ?)',[req.query.nickname, req.query.password],function(err,data){
    if(err){
      res.send({status:0,respuesta:err});
    }else{
      if(data.length==1){
        res.send({status:1,respuesta:data});
      }else{
        res.send({status:0,respuesta:'Este Usuario no se encuetra en la BD'});
      }
    }
  });
});

/*Los GETs */

router.get('/search', async function (req, res, next) {
  GetInfo(scriptAll+' where iduser = ?',[req.query.iduser],function(err,data){
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
