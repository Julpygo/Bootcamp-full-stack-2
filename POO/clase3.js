class Rectangulo{
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    calArea(unidad, nombreUnidad){
        return this.alto * this.ancho * unidad + nombreUnidad;
    }
}

const Rectangulo1 = new Rectangulo(10,15)
console.log(Rectangulo1.calArea(10," Km"))

class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    hablar(){
        console.log(`${this.nombre}`)
    }
}
class Perro extends Animal{
    hablar(){
        console.log(`${this.nombre} ladra`)
    }
}
let petunia = new Perro("petunia")
petunia.hablar()