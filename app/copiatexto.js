
function copiarTexto() {
        let textoCopiado = document.getElementById("copy");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("O texto é: " + textoCopiado.value);
    }
