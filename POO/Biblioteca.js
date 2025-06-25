class Libro{
    constructor(titulo,autor,isbn,disponible = true){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = disponible;
    }
}

class Usuario{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email =email;
        this.librosPrestados = [];
    }
    solicitarLibro(Libro){
        if(Libro.disponible){
            this.librosPrestados.push(Libro)
            Libro.disponible = false;
            console.log(`${Libro.titulo} fue prestado a ${this.nombre}`)
            return true
        }else{
            console.log(`${this.nombre} el libro ${Libro.titulo} no esta disponible`)
        }
    }
}

let libro1 = new Libro("El señor de los anillos","J.R.R. Tolkien","978-3-16-148410-0")
let libro2 = new Libro("1984","George Orwell","978-0-452-28423-4")
let libro3 = new Libro("Cien años de soledad","Gabriel García Márquez","978-0-06-088328-7")

let usuario1 = new Usuario("Juan Perez","juan.perez@hotmail.com")
let usuario2 = new Usuario("Victor Gomez","victor.gomez@hotmail.com")

usuario1.solicitarLibro(libro1)
usuario2.solicitarLibro(libro1)
usuario2.solicitarLibro(libro2)
usuario1.solicitarLibro(libro2)
console.log(usuario1.librosPrestados)