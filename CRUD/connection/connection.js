const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbAutoAyuda"
});

function PutInfo(sqlScript,ArrValues, callback){
  con.query(sqlScript,ArrValues, function(err,result){
    if(err) return callback(err,null);
    return callback( null, {mensaje:"ok",info:result});
  });
};

function GetInfo(sqlScript,ArrValues, callback){
  con.query(sqlScript,ArrValues, function(err,result){
    if(err) return callback(err,null);
    return callback( null, result);
  });
};

module.exports ={
  GetInfo,
  PutInfo
}