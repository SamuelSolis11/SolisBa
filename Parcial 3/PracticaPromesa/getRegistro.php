<?php

$registro['id_jugador']='1';
$registro['nombre']='Samuel';
$registro['Fecha']='11/11/2000';
$registro['nacionalidad']='Mexicano';
$registro['Estatura']='1.80';
$registro['Equipo']='America';
$registro['Genero']='Masculino';
$registro['Lesion']='Si , Desgarre';
$registro['Posicion']='Portero';
$registro['Sueldo']='2500';

$registroJson= json_encode($registro);
echo $registroJson;
?>

