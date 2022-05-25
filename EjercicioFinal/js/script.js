$(document).ready(function() {

//Consulta base de datos // 
$('#btnConsultarBD').click(function() {
    let paridCte = prompt("Teclee el ID a consultar");

    $.post('./php/conectar.php',{par1:paridCte},function(data){
        refrescar(data);
    },'json');
});

function refrescar(objeto){
    console.log(objeto);
    $('#id_jugador').val(objeto.ID_Jugador);
    $('#nombre').val(objeto.Nombre);
    $('#Fecha').val(objeto.Fecha_Nacimiento);
    $('#nacionalidad').val(objeto.Nacionalidad);
    $('#Estatura').val(objeto.Estatura);
    $('#Equipo').val(objeto.Equipo_Juega);
    $('#Genero').val(objeto.Genero);
    $('#Lesion').val(objeto.Lesion);
    $('#Posicion').val(objeto.Posicion);
    $('#Sueldo').val(objeto.Sueldo);
}
});






