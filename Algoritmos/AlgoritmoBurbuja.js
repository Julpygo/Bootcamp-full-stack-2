// let A = [2,6,1,4,8]
// let N = A.length
// let i = 0

// while(A[i]>=A[i+1]){
//     let N1 = A[i]
//     let N2 = A[i+1]
//     A[i] = N2
//     A[i+1] = N1
//     i = i+1
// }
// console.log(A)

let ejemplo = [2,6,1,4,8]
let sePermuto = false

function permutacion(N){   
    for(let i=0;i<N.length;i++){
    if(N[i]<N[i+1]){
    }
    else{
        let aux = N[i]
        N[i] = N[i+1]
        N[i+1] = aux
        sePermuto = true
    }
    return {"arreglo":N,"sePermuto":sePermuto}
}
let estado = false
}
do{
    let {arreglo,sePermuto} = permutacion(ejemplo)
    console.log(arreglo)
    estado = sePermuto
    console.log(estado)
}while(estado)