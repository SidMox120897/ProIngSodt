/*From Others XD*/
const express = require('express');
const router = express.Router();

// const md5 = require('md5');
// const jwt = require('jsonwebtoken');

/*Personal BooksXD */
const { GetInfo, PutInfo }=require('../connection/connection')
const scriptAll='select * from tGrupo';
const scriptInsertar='insert into tGrupo(idGrupo,CodEquipo,CodAlumno) values(?,?,?)';
const scriptDelete='delete from tGrupo where idGrupo = ?';


router.post('/register', async function (req, res, next) {
  var ArrValues=[req.query.idGrupo, req.query.CodEquipo, req.query.CodAlumno];
  PutInfo(scriptInsertar, ArrValues,function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
});

router.post('/delete', async function (req, res, next) {
  PutInfo(scriptDelete, [req.query.idGrupo],function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
});

/*GETs */

router.get('/search', async function (req, res, next) {
  GetInfo(scriptAll+' where idGrupo = ?',[req.query.iduser],function(err,data){
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
