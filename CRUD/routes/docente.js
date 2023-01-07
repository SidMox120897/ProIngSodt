/*From Others XD*/
const express = require('express');
const router = express.Router();

// const md5 = require('md5');
// const jwt = require('jsonwebtoken');

/*Personal BooksXD */
const { GetInfo, PutInfo }=require('../connection/connection')
const scriptAll='select * from tDocente';
const scriptInsertar='insert into tDocente(CodDocente,nameDocente,surname,correo,phone,password) values(?,?,?,?,?,?)';
const scriptDelete='delete from tDocente where CodDocente = ?';


router.post('/register', async function (req, res, next) {
  var ArrValues=[req.query.CodDocente, req.query.nameDocente, req.query.surname,req.query.correo,req.query.phone,req.query.password];
  PutInfo(scriptInsertar, ArrValues,function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
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
  GetInfo(scriptAll+' where CodDocente = ?',[req.query.iduser],function(err,data){
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
