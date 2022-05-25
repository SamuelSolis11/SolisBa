<?php
$ID_Jugador=5;


   $hostname = 'localhost' ;
    $database = 'L19100257' ;
    $username = 'root' ;
    $password = '' ;

  try {
      $con = new PDO("mysql:host=$hostname; dbname=$database" ,$username,$password);
  } catch(PDOException $e){
      echo "Error de conexion a la base de datos";
      echo $e->getMessage();
      exit();
  }

  $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

  try{
    $sql = "select * from Jugador where ID_Jugador=".$ID_Jugador;
    $query = $con->prepare($sql);
    $query->execute();
    $result = $query->fetch(PDO::FETCH_ASSOC);
    $query->closeCursor();
}catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

echo json_encode($result);

 ?>
