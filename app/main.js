const cep = document.querySelector('#cep')
const pesquisa = document.querySelector('#pesquisa')

const inserirDado = document.querySelector('.container__resultado')
const errorSpan = document.querySelector('.error')
const inputs = document.querySelector('.form-control')
const formulario = document.querySelector('.container__form')

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo))
        document.querySelector("#"+campo).value = result[campo]
        // console.log(campo)
    }
}

cep.addEventListener('blur', (e)=>{ //blur serve para quando perder o foco Já enviar os dados
    // event.preventDefault()
    let search = cep.value.replace('-','')
    const options={
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response)=>{response.json()
        .then(data=>showData(data), errorSpan.innerHTML='')
        .catch((e=> console.log('error')))
    })
    .catch((e=> errorSpan.innerHTML = "(Insira Um CEP Válido)"), formulario.reset())
    // console.log(cep.value)
})