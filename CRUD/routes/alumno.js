/*From Others XD*/
const express = require('express');
const router = express.Router();

// const md5 = require('md5');
// const jwt = require('jsonwebtoken');

/*Personal BooksXD */
const { GetInfo, PutInfo }=require('../connection/connection');
const {valName, valCodigo, valCorreo, valPhone, valPassword, valTexto}=require('../validateData/validateAll');

const scriptAll='select * from tAlumno';
const scriptInsertar='insert into tAlumno(CodAlumno,nameAlumno,surname,correo,phone) values(?,?,?,?,?)';
const scriptDelete='delete from tAlumno where CodAlumno = ?';

router.post('/register', async function (req, res, next) {
  var ArrValues=[req.query.CodAlumno, req.query.nameAlumno, req.query.surname,req.query.correo,req.query.phone];
  var msj='';
  msj+=valCodigo(req.query.CodAlumno,'El Codigo');
  msj+=valName(req.query.nameAlumno,'El nombre','Volver a escribir');
  msj+=valName(req.query.surname,'El Apellido','Volver a escribir');
  
  if(msj===''){
    PutInfo(scriptInsertar, ArrValues,function(err,data){
      if(err){
        res.send(err);
      }else{
        res.send(data);
      }
    });
  }else{
    res.send({mensaje:msj});
  }
});


router.post('/delete', async function (req, res, next) {
  PutInfo(scriptDelete, [req.query.CodAlumno],function(err,data){
    if(err){
      res.send(err);
    }else{
      res.send(data);
    }
  });
});



router.get('/search', async function (req, res, next) {
  GetInfo(scriptAll+' where CodAlumno = ?',[req.query.CodAlumno],function(err,data){
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
