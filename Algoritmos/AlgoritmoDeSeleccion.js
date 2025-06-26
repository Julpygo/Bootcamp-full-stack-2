let ejemplo = [1,5,5,16,7,1]
for(let j = 0;j<ejemplo.length;j++){
    let datoMin = ejemplo[j]
    let posMin = j
    for(let i=j;i<ejemplo.length;i++){
        if(datoMin>ejemplo[i+1]){
            datoMin = ejemplo[i+1]
            posMin = i+1
            console.log("dato:",datoMin,"pos:",posMin)
        }
    }
    console.log("dato fin:",datoMin,"pos fin:",posMin)
    ejemplo[posMin] = ejemplo[j]
    ejemplo[j] = datoMin
    console.log(ejemplo)
}
