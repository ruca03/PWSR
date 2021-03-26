$(function(){
  $(".navbar-placeholder").load("./../common/navbar.html");
});

function hide_all(){
  document.getElementById("btn1_drop").style.display = "none";
  document.getElementById("btn2_drop").style.display = "none";
  document.getElementById("btn3_drop").style.display = "none";
  document.getElementById("btn4_drop").style.display = "none";
  document.getElementById("btn5_drop").style.display = "none";

}
function show_class(str){
  if (str != "btn1_drop") {
    document.getElementById("btn1_drop").style.display = "none";
  }
  if (str != "btn2_drop") {
    document.getElementById("btn2_drop").style.display = "none";
  }
  if (str != "btn3_drop") {
    document.getElementById("btn3_drop").style.display = "none";
  }
  if (str != "btn4_drop") {
    document.getElementById("btn4_drop").style.display = "none";
  }
  if (str != "btn5_drop") {
    document.getElementById("btn5_drop").style.display = "none";
  }
  document.getElementById(str).style.display = "flex";
}
