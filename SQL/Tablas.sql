use bd_autoayuda;

create table tAlumno(
	CodAlumno varchar (6) primary key not null,
    Nombre varchar (40),
    Apellido varchar (40),
    Correo varchar (50),
    password varchar (9)
);

create table tDocente(
	CodDocente varchar (3) primary key not null,
    Nombre varchar (40) not null,
    Apellidos varchar (40) not null,
    Correo varchar (50) not null, 
    NumeroCelular varchar (15),
    password varchar (9)
);

create table tAdministrador(
	CodAdministrador varchar (9) primary key not null,
    Nombre varchar (40) not null,
    Apellidos varchar (40) not null,
    password varchar (9)
);