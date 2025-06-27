class Vehiculo {
    constructor(marca,modelo) {
        this.marca = marca
        this.modelo = modelo
    }
    describir(){
        let descripcion = `El vehiculo es un ${this.marca} ${this.modelo}`
        return console.log(descripcion)
    }
    static esMotorizado(){
        console.log("es motorizado")
        return true
    }
}

class Auto extends Vehiculo{
    describir(){
        console.log(`El automovil es un ${this.marca} ${this.modelo}`)
    }
}

class Bicicleta extends Vehiculo{
    constructor(marca,modelo,piñon,plato){
        super(marca,modelo)
        this.piñon = piñon
        this.plato = plato
    }
    describir(){
        console.log(`La bicicleta es una ${this.marca} ${this.modelo}`)
    }
    static esMotorizado(){
        console.log("es motorizado")
        return false
    }
}

barco1 = new Vehiculo("Beneteau","Oceanis 46.1")
carro1 = new Auto("Toyota","Corolla 2025")
bicicleta1 = new Bicicleta("Trek","Domane SL 6")

barco1.describir()
console.log(Vehiculo.esMotorizado())
carro1.describir()
console.log(Auto.esMotorizado())
bicicleta1.describir()
console.log(Bicicleta.esMotorizado())