let listaEmpleados = []
let listaCostoSalarios = []
class Empleado{
    constructor(nombre,salarioBase){
        this.nombre = nombre
        this.salarioBase = salarioBase
    }
    calcularSalario(){
        return this.salarioBase*0.92
    }
    costoDelEmpleado(){
        return this.salarioBase*1.16
    }
    agregarEmpleado(){
        listaEmpleados.push(this.nombre)
        listaCostoSalarios.push(this.costoDelEmpleado())
    }
    static contar(listaEmpleados){
        return listaEmpleados.length
    }
    static costoEmpleados(listaCostoSalarios){
        return listaCostoSalarios.reduce((acumulador,actual)=>acumulador+actual,0)
    }
}

class Gerente extends Empleado{
    calcularSalario(){
        return this.salarioBase*0.92 + 1000
    }
    costoDelEmpleado(){
        return this.salarioBase*1.16 + 1000
    }
}
class Desarrollador extends Empleado{
    calcularSalario(){
        return this.salarioBase*0.92 + 500
    }
    costoDelEmpleado(){
        return this.salarioBase*1.16 + 500
    }
}

let gerente1 = new Gerente("Andres Perez",2000)
gerente1.agregarEmpleado()
console.log(gerente1)

let desarrollador1 = new Desarrollador("Julian Gómez",1000)
let desarrollador2 = new Desarrollador("Yuli Gúzman",1000)
desarrollador1.agregarEmpleado()
desarrollador2.agregarEmpleado()

empleadosDesarrollador = Desarrollador.contar(listaEmpleados)

console.log(`lista de empleados: ${listaEmpleados} y ${listaCostoSalarios} - hay ${empleadosDesarrollador}`)
console.log(Desarrollador.costoEmpleados(listaCostoSalarios))