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
});

