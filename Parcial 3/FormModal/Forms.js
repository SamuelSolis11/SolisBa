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
});
