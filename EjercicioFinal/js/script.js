$(document).ready(function() {

//Consulta base de datos // 
$('#btnConsultarBD').click(function() {
    $('#modal1').modal();
    $('#modal1').on('hidden.bs.modal',function(e){
        let paridCte=$('#idConsulta').val();
        $.post('./php/conectar.php',{par1:paridCte},function(data){
            refrescar(data);
        },'json');
    })
});

$('#btnBorrarBD').click(function() {
    $('#modal2').modal();
    $('#modal2').on('hidden.bs.modal',function(e){
        let paridCte=$('#idBorrar').val();
        $.post('./php/Borrar.php',{par1:paridCte},function(data){
            refrescar(data);
        },'json');
    })
});

$('#btnInsertarBD').click(function() {
    let nombre = $('#nombre').val();
    let Fecha =  $('#fecha').val();
    let Nacionalidad = $('#nacionalidad').val();
    let Estatura = $('#Estatura').val();
    let Equipo = $('#Equipo').val();
    let  Genero = $('#Genero').val();
    let Lesion = $('#Lesion').val();
    let Posicion =$('#Posicion').val();
    let Sueldo =$('#Sueldo').val();
    $.post('./php/insertar.php',{nom:nombre,Fe:Fecha,Nacio:Nacionalidad,Estat:Estatura,Equi:Equipo,Gen:Genero,Les:Lesion,Pos:Posicion,Sue:Sueldo
    });
    Swal.fire(
        'Accion' , 
         'Usuario insertado' , 
         'success', 
        );
});

function refrescar(objeto){
    console.log(objeto);
    $('#id_jugador').val(objeto.ID_Jugador);
    $('#nombre').val(objeto.Nombre);
    $('#fecha').val(objeto.Fecha_Nacimiento);
    $('#nacionalidad').val(objeto.Nacionalidad);
    $('#Estatura').val(objeto.Estatura);
    $('#Equipo').val(objeto.Equipo_Juega);
    $('#Genero').val(objeto.Genero);
    $('#Lesion').val(objeto.Lesion);
    $('#Posicion').val(objeto.Posicion);
    $('#Sueldo').val(objeto.Sueldo);
}

$('#btnModificarBD').click(function() {
    let paridCte=prompt("Teclee el ID a modificar");
    let nombre = $('#nombre').val();
    let Fecha =  $('#fecha').val();
    let Nacionalidad = $('#nacionalidad').val();
    let Estatura = $('#Estatura').val();
    let Equipo = $('#Equipo').val();
    let  Genero = $('#Genero').val();
    let Lesion = $('#Lesion').val();
    let Posicion =$('#Posicion').val();
    let Sueldo =$('#Sueldo').val();
    $.post('./php/Modificar.php',{par1:paridCte,nom:nombre,Fe:Fecha,Nacio:Nacionalidad,Estat:Estatura,Equi:Equipo,Gen:Genero,Les:Lesion,Pos:Posicion,Sue:Sueldo
    });
    Swal.fire(
        'Accion' , 
         'Usuario modificado' , 
         'success', 
        );
});




});




