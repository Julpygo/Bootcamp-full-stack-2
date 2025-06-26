class Libros{
    titulo: string
    autor: string
    isbn: string
    disponible: boolean
    constructor(titulo: string,autor: string,isbn: string,disponible = true){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = disponible;
    }
}

class Usuarios{
    nombre: string
    email: string
    librosPrestados: Libros[]
    constructor(nombre: string,email: string){
        this.nombre = nombre;
        this.email =email;
        this.librosPrestados = [];
    }
    solicitarLibro(libro:Libros){
        if(libro.disponible){
            this.librosPrestados.push(libro)
            libro.disponible = false;
            console.log(`${libro.titulo} fue prestado a ${this.nombre}`)
            return true
        }else{
            console.log(`${this.nombre} el libro ${libro.titulo} no esta disponible`)
        }
    }
}

libro1 = new Libros("El señor de los anillos","J.R.R. Tolkien","978-3-16-148410-0")
libro2 = new Libros("1984","George Orwell","978-0-452-28423-4")
libro3 = new Libros("Cien años de soledad","Gabriel García Márquez","978-0-06-088328-7")

usuario1 = new Usuarios("Juan Perez","juan.perez@hotmail.com")
usuario2 = new Usuarios("Victor Gomez","victor.gomez@hotmail.com")

usuario1.solicitarLibro(libro1)
usuario2.solicitarLibro(libro1)
usuario2.solicitarLibro(libro2)
usuario1.solicitarLibro(libro2)
console.log(usuario1.librosPrestados)