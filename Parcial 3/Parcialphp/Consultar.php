<?php
 include "conectar.php";


 try {
     $query=$con->prepare("select * from Jugador");
     $query->execute();

     while($row = $query->fetch()){
         echo $row['ID_Jugador'].'-'.
         $row['Nombre'].'-'.
         $row['Fecha_Nacimiento'].'-'.
         $row['Nacionalidad'].'-'.
         $row['Estatura'].'-'.
         $row['Equipo_Juega'].'-'.
         $row['Genero'].'-'.
         $row['Lesion'].'-'.
         $row['Posicion'].'-'.
         $row['Sueldo'].'<br>';
    }
     $query->closeCursor();


 } catch(PDOException $e){
     echo "Error de consulta a la base de datos";
     echo $e->getMessage();
 }
 ?>