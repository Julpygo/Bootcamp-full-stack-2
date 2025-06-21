const entrada = document.getElementById("entrada")
const calcular = document.getElementById("btn")
const salida = document.getElementById("salida")
let numero = 0

entrada.addEventListener("input",(e)=>{
    numero = e.target.value
    console.log(numero)
})

calcular.addEventListener("click",()=>{
    let hijo = document.createElement("p")
    if (numero % 5 == 0){
        hijo.innerHTML = `<b>${numero}</b> es multiplo de 5`
    //console.log(`${numero} es multiplo de 5}`)
    }
    else{
        hijo.innerHTML = `${numero} <b>no es multiplo de 5</b>`
        //console.log(`${numero} no es multiplo de 5`)
    }
salida.appendChild(hijo)
})