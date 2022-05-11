$(document).ready(function(){

    $('#btnSubmit').click(function(){
        $('#alert').show();
});

$('#alertclose').click(function(){
    $('#alert').hide();
});

$('#btnReset').click(function(){
    $('#exampleModal').modal('show');
});

$('#btnSweet').click(function(){
    Swal.fire(
   'Good job!' , 
    'You clicked the button!' , 
    'success', 
   );
  
});

$("#btnAjax").click(function(){
    
    var solicitud= new XMLHttpRequest();
    solicitud.onreadystatechange = function()
       {
        if(solicitud.readyState==4 && solicitud.status==200){
            document.getElementById("divHeader").innerHTML= solicitud.responseText;
        }};
    solicitud.open("GET","archivo.txt",true);
    solicitud.send();
});


$('#btnjson').click(function(){
    console.log("Click en boton json");
    $.post('getregistro.php',{},function(data){

        
        console.log(data);
        $('#id_jugador').val(data.id_jugador);
        $('#nombre').val(data.nombre);
        $('#Fecha').val(data.Fecha);
        $('#nacionalidad').val(data.nacionalidad);
        $('#Estatura').val(data.Estatura);
        $('#Equipo').val(data.Equipo);
        $('#Genero').val(data.Genero);
        $('#Lesion').val(data.Lesion);
        $('#Posicion').val(data.Posicion);
        $('#Sueldo').val(data.Sueldo);
    },'json');
});

});
