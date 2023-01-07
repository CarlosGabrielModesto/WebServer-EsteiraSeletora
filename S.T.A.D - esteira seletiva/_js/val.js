function inicio1() {
  $("#tela").hide();
}
var usuario = "vendas@stad.com.br";
var senha = "Vend123#";

var usuario1 = "producao@stad.com.br";
var senha1 = "Prod123#";

const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  var name = document.querySelector("#name");
  var passwo = document.querySelector("#senha");
  var value1 = passwo.value;
  var value = name.value;



  console.log("senha:", value1)
  console.log("user:", value);






  if (value1 == senha && value == usuario) {




    //coloca a outra pagina aqui//
    window.location.href = "venda.html"

  }



  if (value1 == senha1 && value == usuario1) {




    //coloca a outra pagina aqui//
    window.location.href = "producaokpi.html"

  }







});


function logout() {
  $("#tela").show();

}

function sair() {
  window.location.href = "login.html"
}
function normal() {

  $("#tela").hide();
}


