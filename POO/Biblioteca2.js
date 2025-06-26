var Libros = /** @class */ (function () {
    function Libros(titulo, autor, isbn, disponible) {
        if (disponible === void 0) { disponible = true; }
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = disponible;
    }
    return Libros;
}());
var Usuarios = /** @class */ (function () {
    function Usuarios(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.librosPrestados = [];
    }
    Usuarios.prototype.solicitarLibro = function (libro) {
        if (libro.disponible) {
            this.librosPrestados.push(libro);
            libro.disponible = false;
            console.log("".concat(libro.titulo, " fue prestado a ").concat(this.nombre));
            return true;
        }
        else {
            console.log("".concat(this.nombre, " el libro ").concat(libro.titulo, " no esta disponible"));
        }
    };
    return Usuarios;
}());
libro1 = new Libros("El señor de los anillos", "J.R.R. Tolkien", "978-3-16-148410-0");
libro2 = new Libros("1984", "George Orwell", "978-0-452-28423-4");
libro3 = new Libros("Cien años de soledad", "Gabriel García Márquez", "978-0-06-088328-7");
usuario1 = new Usuarios("Juan Perez", "juan.perez@hotmail.com");
usuario2 = new Usuarios("Victor Gomez", "victor.gomez@hotmail.com");
usuario1.solicitarLibro(libro1);
usuario2.solicitarLibro(libro1);
usuario2.solicitarLibro(libro2);
usuario1.solicitarLibro(libro2);
console.log(usuario1.librosPrestados);
