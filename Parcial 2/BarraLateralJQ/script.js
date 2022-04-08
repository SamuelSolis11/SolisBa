//document.getElementById("btn").addEventListener("click",alternarMenu);
//function alternarMenu(){
    //alert("Samuel")
  //  document.getElementById("sb").classList.toggle("MenuEscondido");
    //document.getElementById("ct").classList.toggle("ContenidoMargenCero");
//} 
$(document).ready( function() {
$("#btn").click(AlternarMenu);
function AlternarMenu() {
$("#sb").toggleClass("MenuEscondido");
$("#ct").toggleClass("ContenidoMargenCero");
}
});
