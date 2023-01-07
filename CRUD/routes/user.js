/*From Others XD*/
const express = require('express');
const router = express.Router();

// const md5 = require('md5');
// const jwt = require('jsonwebtoken');

/*Personal BooksXD */
const { GetInfo, PutInfo }=require('../connection/connection')

const scriptAll='select * from tUser';
const scriptInsertar='insert into tUser(iduser,nickname,nameuser,surname,password) values(?,?,?,?,?)';
const scriptDelete='delete from tUser where iduser = ?';

/* POST users listing. */

router.post('/register', async function (req, res, next) {
  var ArrValues=[req.query.idUser, req.query.nickname, req.query.nameuser,req.query.surnameuser,req.query.password];
  PutInfo(scriptInsertar, ArrValues,function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
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
      res.send(err);
    }else{
      res.send(data);
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
