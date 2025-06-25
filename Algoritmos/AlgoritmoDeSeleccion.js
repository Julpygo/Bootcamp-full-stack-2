let a = [2,6,1,4]

let Pini = 0

function permutaInicial(a){
    let permuta = false
    for (i = 0;i<a.length;i++){
        if(a[i]>a[i+1]){
            let Pmin = i
            let permuta = true
        }
    }
    return {"Pmin: ":Pmin,"Permuta: ":permuta}
}

do{
    let aux = a[Pini]
    a[Pini] = a[Pmin]
    a[Pmin] = aux
    for (j=Pini;j<a.length-Pini;j++){
        if(a[j]>a[j+1]){
            var Pmin = j
            var permuta = true
            if(Pini=a.length-1){
                permuta=false
            }
        }
    }
    Pini = Pini + 1
}while(permuta = true)

console.log(a)

