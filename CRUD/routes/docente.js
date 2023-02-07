/*From Others XD*/
const express = require('express');
const router = express.Router();

// const md5 = require('md5');
// const jwt = require('jsonwebtoken');

/*Personal BooksXD */
const { GetInfo, PutInfo }=require('../connection/connection')
const {valName, valCodigo, valCorreo, valPhone, valPassword}=require('../validateData/validateAll');

const scriptAll='select * from tDocente';
const scriptInsertar='insert into tDocente(CodDocente,nameDocente,surname,correo,phone,password) values(?,?,?,?,?,?)';
const scriptDelete='delete from tDocente where CodDocente = ?';

//Registra un docente
router.post('/register', async function (req, res, next) {
  var ArrValues=[
    req.query.CodDocente,
    req.query.nameDocente,
    req.query.surname,
    req.query.correo,
    req.query.phone,
    req.query.password
  ];
  //Se Crea un mensaje validando los datos que se RECIBEN
  var msj='';
  msj+=valCodigo(req.query.CodDocente,'El Codigo Docente');
  msj+=valName(req.query.nameDocente,'El nombre del Docente','Volver a escribir');
  msj+=valName(req.query.surname,'El Apellido del Docente','Volver a escribir');
  //msj+=valCorreo();
  msj+=valPhone(req.query.phone,'El numero de celular');
  msj+=valPassword(req.query.password,'La contraseña ','como (*/-+)');

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
  PutInfo(scriptDelete, [req.query.CodDocente],function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
});


router.get('/search', async function (req, res, next) {
  GetInfo(scriptAll+' where CodDocente = ?',[req.query.CodDocente],function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
});

router.post('/login', async function (req, res, next) {
  GetInfo(scriptAll+' where (CodDocente = ? AND password = ?)',[req.query.CodDocente, req.query.password],
  function(err,data){
    if(err){
      res.send({status:0,respuesta:err});
    }else{
      if(data.length!=0){
        res.send({status:1,respuesta:data});
      }else{
        res.send({status:0,respuesta:'Este Usuario no se encuetra en la BD'});
      }
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
