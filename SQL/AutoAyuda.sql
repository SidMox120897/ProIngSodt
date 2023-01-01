/*
Autor: Luis David Tello Justiniani
*/

DROP DATABASE IF EXISTS dbAutoAyuda;

CREATE DATABASE IF NOT EXISTS dbAutoAyuda;

use dbAutoAyuda;

create table if not exists tUser(
	iduser varchar(8) not null primary key,
	nickname varchar(10) not null,
    nameuser varchar(20) not null,
    surname varchar(40) not null,
    password varchar(50) not null
);

create table if not exists tAlumno(
	CodAlumno varchar(6) not null primary key,
	nameAlumno varchar(20) not null,
    surname varchar(40) not null,
    correo varchar(100) not null,
    phone varchar(15)
);

create table if not exists tDocente(
	CodDocente varchar(6) not null primary key,
	nameDocente varchar(20) not null,
    surname varchar(40) not null,
    correo varchar(200),
    phone varchar(15) null,
    password varchar(50) not null
);

create table if not exists tEquipo(
	CodEquipo varchar(6) not null primary key,
	CodDocente varchar(6) not null,
    CodAlumnoGuia varchar(6) not null,
    nombreEquipo varchar(50) not null,
    temas text not null,
    descripcion varchar(200),
    password varchar(50) not null,
    FOREIGN KEY (CodDocente) 
        REFERENCES tDocente(CodDocente),
	FOREIGN KEY (CodAlumnoGuia)
        REFERENCES tAlumno(CodAlumno)
);

create table if not exists tGrupo(
	idGrupo varchar(6) not null,
	CodEquipo varchar(6) not null,
    CodAlumno varchar(6) not null,
	FOREIGN KEY (CodEquipo) 
        REFERENCES tEquipo(CodEquipo),
	FOREIGN KEY (CodAlumno)
        REFERENCES tAlumno(CodAlumno)
);

/*Insertar Datos*/
insert into tUser(iduser,nickname,nameuser,surname,password) values("72557557","SidMox","Luis David","Tello Justiniani","72557557");
insert into tUser(iduser,nickname,nameuser,surname,password) values("75937593","AdminMox","Luis David","Tello Justiniani","72557557");


insert into tAlumno(CodAlumno,nameAlumno,surname,correo,phone) values("120897","Luis David","Tello Justiniani","120897@unsaac.edu.pe","983536306");
insert into tAlumno(CodAlumno,nameAlumno,surname,correo,phone) values("120008","Luis David","Tello Justiniani","120008@unsaac.edu.pe","983536306");
insert into tAlumno(CodAlumno,nameAlumno,surname,correo,phone) values("181417","Luis David","Tello Justiniani","181417@unsaac.edu.pe","983536306");
insert into tAlumno(CodAlumno,nameAlumno,surname,correo,phone) values("131415","Luis David","Tello Justiniani","131415@unsaac.edu.pe","983536306");


insert into tDocente(CodDocente,nameDocente,surname,correo,phone,password) values("739373","Gladys","Cutipa","*******@unsaac.edu.pe","983536306","123456789");
insert into tDocente(CodDocente,nameDocente,surname,correo,phone,password) values("937393","Doc1","AppDoc1","*******@unsaac.edu.pe","983536306","123456789");
insert into tDocente(CodDocente,nameDocente,surname,correo,phone,password) values("237323","AppDoc2","AppDoc2","*******@unsaac.edu.pe","983536306","123456789");



insert into tDocente(idGrupo,CodEquipo,CodAlumno) values("1","1","120897");






select * from tUser;
-- select * from tUser where nickname="AdminMox";
