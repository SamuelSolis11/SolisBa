CREATE DATABASE L19100257;
use L19100257;


CREATE TABLE `Jugador` (
  `ID_Jugador`   smallint  primary KEY  NULL AUTO_INCREMENT,
  `Nombre` varchar(50) DEFAULT NULL,
  `Fecha_Nacimiento` varchar(40) DEFAULT NULL,
  `Nacionalidad` varchar(20) DEFAULT NULL,
  `Estatura` float DEFAULT NULL,
  `Equipo_Juega` varchar(50) DEFAULT NULL,
   `Genero` varchar(30) DEFAULT NULL,
   `Lesion` varchar(30) DEFAULT NULL,
   `Posicion` varchar(30) DEFAULT NULL,
   `Sueldo` float DEFAULT NULL
);
  
  
  SELECT * FROM jugador;
  INSERT INTO Jugador VALUES(1 , 'Samuel solis' , '11/11/2000' , 'Mexicano' ,  1.75 , 'Club America' , 'Masculino' , 'No , ninguna' , 'Portero' , 2500.00);
  INSERT INTO Jugador VALUES(2 , 'Adrian Torres' , '12/11/2001' , 'Mexicano' ,  1.75 , 'Chivas' , 'Masculino' , 'No , ninguna' , 'Portero' , 2000.00);
  INSERT INTO Jugador VALUES(3 , 'Jaime Barrera' , '11/09/2000' , 'Mexicano' ,  1.75 , 'Cruz Azul' , 'Masculino' , 'No , ninguna' , 'Portero' , 2600.00);
  INSERT INTO Jugador VALUES(4 , 'Emiliano Solis' , '11/05/2000' , 'Mexicano' ,  1.75 , 'Mexico' , 'Masculino' , 'No , ninguna' , 'Portero' , 2700.00);
  INSERT INTO Jugador VALUES(5 , 'Perla perez' , '11/01/2000' , 'Mexicano' ,  1.75 , 'Leon FC' , 'Femenino' , 'No , ninguna' , 'Portero' , 2800.00);
  INSERT INTO Jugador VALUES(6 , 'Daniel perez' , '11/04/2000' , 'Mexicano' ,  1.75 , 'Club Pachuca' , 'Masculino' , 'No , ninguna' , 'Portero' , 4500.00);
  
  