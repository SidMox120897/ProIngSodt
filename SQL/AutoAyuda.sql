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
    FOREIGN KEY (CodDocente) 
        REFERENCES tDocente(CodDocente),
	FOREIGN KEY (CodAlumnoGuia)
        REFERENCES tAlumno(CodAlumno)
);

create table if not exists tGrupo(
	CodEquipo varchar(6) not null,
    CodAlumno varchar(6) not null,
    primary key(CodEquipo,CodAlumno),
	FOREIGN KEY (CodEquipo) 
        REFERENCES tEquipo(CodEquipo),
	FOREIGN KEY (CodAlumno)
        REFERENCES tAlumno(CodAlumno)
);

/*Insertar Datos*/
insert into tUser(iduser,nickname,nameuser,surname,password) values("72557557","SidMox","Luis David","Tello Justiniani","72557557");
insert into tUser(iduser,nickname,nameuser,surname,password) values("75937593","AdminMox","Luis David","Tello Justiniani","72557557");


insert into tAlumno
(CodAlumno, nameAlumno, surname, correo, phone)
values
("164240","ROBERTO CARLOS","ESCOBEDO-DURAN","164240@unsaac.edu.pe","834358711"),
("171571","JHON NILSON","ROA LIMACHI","171571@unsaac.edu.pe","764829584"),
("182901","ALBERTO","COLLANTE CARRASCO","182901@unsaac.edu.pe","560503085"),
("184655","JERY","SANCA ZEVALLOS","184655@unsaac.edu.pe","624785469"),
("194525","ARELI SHALON","PAREDES CURASCO","194525@unsaac.edu.pe","199868858"),
("201228","MILTON AMED","ACHAHUI CRUZ","201228@unsaac.edu.pe","661717113"),
("215270","DANIEL","ALEGRIA SALLO","215270@unsaac.edu.pe","282025450"),
("215271","VICTOR ANIBAL","ALVARO MENDOZA","215271@unsaac.edu.pe","825229847"),
("151780","LUCERO","QUISPE PUMA","151780@unsaac.edu.pe","661506721"),
("160923","NELSON","GONZALES HUISA","160923@unsaac.edu.pe","638028052"),
("170430","GEREMY ANDRE","COVARRUBIAS AGUILAR","170430@unsaac.edu.pe","253148959"),
("171918","MANUEL HUMBERTO","VELARDE FLORES","171918@unsaac.edu.pe","382702570"),
("182923","LUZ LUCERO","MORA CCARHUARUPAY","182923@unsaac.edu.pe","269157033"),
("192424","KAROL GIANELLA","MACCARCCO QUISPE","192424@unsaac.edu.pe","568697102"),
("194921","CRISTHIAN","SAMATA PUMAHUALCCA","194921@unsaac.edu.pe","507919172"),
("204322","NILSON LEONEL","ZULOAGA CCOPA","204322@unsaac.edu.pe","484859040"),
("170433","JULIO JOSUE","HOLGUIN CONDORI","170433@unsaac.edu.pe","300539325"),
("171943","ERICK ANDREW","BUSTAMANTE FLORES","171943@unsaac.edu.pe","544070037"),
("183067","ROSSBEL","HUAYLLA HUILLCA","183067@unsaac.edu.pe","124513284"),
("182927","RAISA MELINA","PEÑA LUQUE","182927@unsaac.edu.pe","341065989"),
("192428","ARTUR MARTI","RADO HUAYOTUMA","192428@unsaac.edu.pe","442598624"),
("195050","MEDALY","LOZANO LLACCTAHUAMAN","195050@unsaac.edu.pe","826603128"),
("204793","NIK ANTONI","AGUILAR SANCHEZ","204793@unsaac.edu.pe","578874127"),
("215277","JHON KEVIN","HALANOCCA SURCO","215277@unsaac.edu.pe","167011065"),
("160853","CARLOS EDUARDO","PUMA MENDOZA","160853@unsaac.edu.pe","325909319"),
("164238","EVANDIR SAUL","CASILLA TTITO","164238@unsaac.edu.pe","586802036"),
("171570","EDGAR DANIEL","RAMOS ALVAREZ","171570@unsaac.edu.pe","572023479"),
("182900","GARY BRIGHAM","CHUNGA CASTILLO","182900@unsaac.edu.pe","724784912"),
("192062","EMIR GONZALO","HUAMANI OROS","192062@unsaac.edu.pe","593463760"),
("184654","MIGUEL ENRIQUE","SACA ACCOSTUPA","184654@unsaac.edu.pe","574967777"),
("194524","CRISTINA","MELENDRES PEREZ","194524@unsaac.edu.pe","583130003"),
("200827","KEVIN ARON","SUMIRE CCAHUANA","200827@unsaac.edu.pe","398831337"),
("215422","JHON JESUS","QUISPE MACHACA","215422@unsaac.edu.pe","257874110"),
("170436","MARIELA","LUYCHO ANCAIFURO","170436@unsaac.edu.pe","814223443"),
("174442","ANGIE","ESCOBEDO MESCCO","174442@unsaac.edu.pe","735563159"),
("170300","RUTH","QUISPE BEJARANO","170300@unsaac.edu.pe","179567302"),
("182940","AMARU","VILLASANTE LEON","182940@unsaac.edu.pe","798672084"),
("192975","GEORGE ALEXANDER","ZAPANA FLORES","192975@unsaac.edu.pe","654201400"),
("200332","GERALD ANTONIO","CUSACANI GONZALES","200332@unsaac.edu.pe","223320677"),
("204796","JANNIRA ALISON","FARFAN LUNA","204796@unsaac.edu.pe","642880796");

insert into tDocente
(CodDocente, nameDocente, surname, correo, phone, password)
values
("101","LAURO", "ENCISO RODAS","101@unsaac.edu.pe","930172889","974846230"),
("102","JULIO CESAR", "CARBAJAL LUNA","102@unsaac.edu.pe","924851325","920831558"),
("103","NILA ZONIA", "ACURIO USCA","103@unsaac.edu.pe","925112256","982934093"),
("104","JAVIER ARTURO", "ROZAS HUACHO","104@unsaac.edu.pe","925044274","917871902"),
("105","LINO PRISCILIANO","FLORES PACHECO","105@unsaac.edu.pe","926157605","943228878"),
("106","EDWIN","CARRASCO POBLETE","106@unsaac.edu.pe","929180275","966296178"),
("107","EMILIO", "PALOMINO OLIVERA","107@unsaac.edu.pe","930146144","956608230"),
("108","ENRIQUE", "GAMARRA SALDIVAR","108@unsaac.edu.pe","925035912","936401069"),
("109","DENNIS IVAN" ,"CANDIA OVIEDO","109@unsaac.edu.pe","930113027","984973249"),
("110","RONY", "VILLAFUERTE SERNA","110@unsaac.edu.pe","929256047","945197906");

insert into tEquipo
(CodEquipo,CodDocente,CodAlumnoGuia,nombreEquipo,temas,descripcion)
values
("1","101","184655","Equipo IA","Inteligencia Artificial/Aprendizaje Automatico","Este grupo quiere mejorar en Inteligencia Artificial te ayudaremos a mejorar en el Area");

insert into tGrupo(CodEquipo,CodAlumno) values("1","204796");






select * from tUser;
select * from tAlumno;
-- select * from tUser where nickname="AdminMox";
