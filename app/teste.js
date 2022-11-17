for(const campo in result){
    if(campo = true){
       // errorSpan.innerHTML='Olá'
    }else{
       if(document.querySelector("#"+campo))
       document.querySelector("#"+campo).value = result[campo]
       // console.log(campo)
    }
   }