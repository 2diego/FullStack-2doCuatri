/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/
export class Camiones {
    constructor(nuevaMarca, nuevoModelo, nuevoAño, nuevaPatente) {
        this.marca = nuevaMarca;
        this.modelo = nuevoModelo;
        this.año = nuevoAño;
        this.patente = nuevaPatente;
    }
    //GET
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getAño() {
        return this.año;
    }
    getPatente() {
        return this.patente;
    }
    //SET
    setMarca(nuevaMarca) {
        this.marca = nuevaMarca;
    }
    setModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    setAño(nuevoAño) {
        this.año = nuevoAño;
    }
    setPatente(nuevaPatente) {
        this.patente = nuevaPatente;
    }
}
