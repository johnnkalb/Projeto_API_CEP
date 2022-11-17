// Cria Máscara somente para números
const input = document.getElementById("cep");

input.addEventListener("keypress", somenteNumeros);

function somenteNumeros(e) {

var charCode = (e.which) ? e.which : e.keyCode

if (charCode > 31 && (charCode < 48 || charCode > 57))

e.preventDefault();

 }

 ///////

 // Cria Máscara para CPF
input.addEventListener("keyup", formatarCep);

    function formatarCep(e){

    var v= e.target.value.replace(/\D/g,"")                

    v=v.replace(/^(\d{5})(\d)/,"$1-$2") 

        e.target.value = v;

}

 