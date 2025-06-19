ArrayDiv = []
const entrada = document.getElementById("entrada")
const calcular = document.getElementById("btn")
const salida = document.getElementById("salida")

entrada.addEventListener("input",(e)=>{
    n = e.target.value
})

calcular.addEventListener("click",()=>{
    let hijo = document.createElement("p")

    for(i=1;i<=n;i++){
        if(n%i==0){
            ArrayDiv.push(i)
        }
    }
    if(ArrayDiv.length == 2){
        console.log(`${n} ES UN NÚMERO PRIMO`)
        hijo.innerHTML = `${n} ES UN NÚMERO PRIMO`
    }else{
        console.log(`${n} NO ES UN NÚMERO PRIMO`)
        hijo.innerHTML = `${n} NO ES UN NÚMERO PRIMO`
    }
    salida.appendChild(hijo)
    ArrayDiv = []
})
