
document.getElementById('btn').addEventListener('click',()=>{
    const n = document.getElementById('N').value
    let resultado=0
    let serie = []
    for(let i = 0;i<=n;i++){
    if(i==0){
        resultado = 0
        serie.push(resultado)
    }
    else if(i==1){
        resultado=1
        serie.push(resultado)
    }
    else{
        resultado=serie[i-2]+serie[i-1]
        serie.push(resultado)
    }
}
console.log(serie)
})
