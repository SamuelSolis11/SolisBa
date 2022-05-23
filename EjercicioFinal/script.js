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
$('#btnPromesa').click(function(){
    
    let promesa = new Promise(function(resolve,reject){
        var solicitud= new XMLHttpRequest();
    solicitud.onreadystatechange = function()
       {
        if(solicitud.readyState==4 && solicitud.status==200){
            resolve(solicitud.responseText);
        }};
    solicitud.open("GET","Promesa.txt",true);
    solicitud.send();
});
promesa.then(function(value){document.getElementById("divHeader").innerHTML=value;});
    });

    $('#btnFetch').click(function()
    {
        let promesa = fetch('getregistro.php');
        promesa.then(respuesta => respuesta.json())
                .then(datos => {
                    console.log(datos);
                    $('#id_jugador').val(datos.id_jugador);
                    $('#nombre').val(datos.nombre);
                    $('#Fecha').val(datos.Fecha);
                    $('#nacionalidad').val(datos.nacionalidad);
                    $('#Estatura').val(datos.Estatura);
                    $('#Equipo').val(datos.Equipo);
                    $('#Genero').val(datos.Genero);
                    $('#Lesion').val(datos.Lesion);
                    $('#Posicion').val(datos.Posicion);
                    $('#Sueldo').val(datos.Sueldo);}
                    );
    });


});
