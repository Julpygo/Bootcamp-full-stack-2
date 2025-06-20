// class Rectangulo{
//     constructor(alto,ancho){
//         this.alto = alto;
//         this.ancho = ancho;
//     }
//     calArea(unidad, nombreUnidad){
//         return this.alto * this.ancho * unidad + nombreUnidad;
//     }
// }

// const Rectangulo1 = new Rectangulo(10,15)
// console.log(Rectangulo1.calArea(10," Km"))

// class Animal {
//     constructor(nombre){
//         this.nombre = nombre
//     }
//     hablar(){
//         console.log(`${this.nombre}`)
//     }
// }
// class Perro extends Animal{
//     hablar(){
//         console.log(`${this.nombre} ladra`)
//     }
// }
// let petunia = new Perro("petunia")
// petunia.hablar()


// class Punto {
//     constructor(x,y){
//         this.x = x
//         this.y = y
//     }
//     static distancia(a,b){
//         const distanciaX = a.x - b.x
//         const distanciaY = a.y - b.y
//         return Math.sqrt(distanciaX*distanciaX+distanciaY*distanciaY)
//     }
// }
// const p1 = new Punto(10,10)
// const p2 = new Punto(5,5)
// console.log(Punto.distancia(p1,p2))


//              Ejercicio del sistema de biblioteca

class Libro{
    constructor(titulo,autor,isbn,disponible,limiteLibros){
        this.titulo = titulo
        this.autor = autor
        this.isbn = isbn
        this.disponible = disponible
        this.limiteLibros = limiteLibros
    }
    PrestarLibro(){
        if(this.limiteLibros<10 && this.disponible == true){
            return true
        }
        else{
            return false
        }
    }
}

let elPrincipito = new Libro("El principito","nose","1234567",true,3)
let maestroDeLaFuga = new Libro("maestro de la fuga","nose","111111",true,3)
console.log(Libro)


class Usuario{
    constructor(nombre,email,librosPrestados,cantidadLibros){
        this.nombre = nombre
        this.email = email
        this.librosPrestados = librosPrestados
        this.cantidadLibros = cantidadLibros
    }
    buscarLibro(titulo,autor){
        if(titulo==Libro.titulo && autor==Libro.autor && Libro.disponible==true){
                    
        }
    }
}
