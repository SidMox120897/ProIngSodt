/*From Others XD*/
const express = require('express');
const router = express.Router();

// const md5 = require('md5');
// const jwt = require('jsonwebtoken');

/*Personal BooksXD */
const { GetInfo, PutInfo }=require('../connection/connection')
const scriptAll='select * from tEquipo';
const scriptInsertar='insert into tEquipo(CodEquipo, CodDocente, CodAlumnoGuia, nombreEquipo, temas, descripcion) values(?,?,?,?,?,?)';
const scriptDelete='delete from tEquipo where CodEquipo = ?';

router.post('/register', async function (req, res, next) {
  var ArrValues=[req.query.CodEquipo, req.query.CodDocente, req.query.CodAlumnoGuia, req.query.nombreEquipo,req.query.temas,req.query.descripcion];
  PutInfo(scriptInsertar, ArrValues,function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
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
