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
class Biblioteca{
    constructor(nombre,libros,usuarios){
        this.nombre = nombre
        this.libros = libros
        this.usuarios = usuarios
    }
    agregarLibro(libro){
        this.libros.push(libro)
    }
    agregarUsuario(usuario){
        this.usuarios.push(usuario)
    }
    buscarLibro(titulo,autor){
        for(let libro of this.libros){
            if(libro.titulo == titulo && libro.autor == autor){
                return {"Disponible":true}
            }
        }
        return null
    }
}

class Libro{
    constructor(titulo,autor,isbn){
        this.titulo = titulo
        this.autor = autor
        this.isbn = isbn
    }
}

class Usuario{
    constructor(nombre,email,librosPrestados,cantidadLibros){
        this.nombre = nombre
        this.email = email
        this.librosPrestados = librosPrestados
        this.cantidadLibros = cantidadLibros
    }
}
let biblioteca = new Biblioteca("Biblioteca Central",[],[])
let libro1 = new Libro("El señor de los anillos","J.R.R. Tolkien","978-3-16-148410-0")
let libro2 = new Libro("1984","George Orwell","978-0-452-28423-4")
let libro3 = new Libro("Cien años de soledad","Gabriel García Márquez","978-0-06-088328-7")
biblioteca.agregarLibro(libro1)
biblioteca.agregarLibro(libro2)
biblioteca.agregarLibro(libro3)

console.log(biblioteca.buscarLibro("1984","George Orwell"))
//console.log(biblioteca)
