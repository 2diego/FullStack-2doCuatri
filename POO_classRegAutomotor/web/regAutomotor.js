/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/
export class RegAutomotor {
    constructor(nuevaLocalidad, registrarAuto, registrarCamion, registrarMotos) {
        this.regAutos = [];
        this.regCamiones = [];
        this.regMotos = [];
        this.localidad = nuevaLocalidad;
        if (registrarAuto !== undefined) {
            this.regAutos.push(registrarAuto);
        }
        else {
            return;
        }
        if (registrarCamion !== undefined) {
            this.regCamiones.push(registrarCamion);
        }
        else {
            return;
        }
        if (registrarMotos !== undefined) {
            this.regMotos.push(registrarMotos);
        }
        else {
            return;
        }
    }
    //GET
    getLocalidad() {
        return this.localidad;
    }
    getAutos() {
        return this.regAutos;
    }
    getCamiones() {
        return this.regCamiones;
    }
    getMotos() {
        return this.regMotos;
    }
    //ADD
    addAuto(nuevoAuto) {
        this.regAutos.push(nuevoAuto);
    }
    addCamion(nuevoCamion) {
        this.regCamiones.push(nuevoCamion);
    }
    addMoto(nuevaMoto) {
        this.regMotos.push(nuevaMoto);
    }
    //DELETE
    deleteAuto(patente) {
        let index = this.regAutos.findIndex(auto => auto.getPatente() === patente);
        if (index !== -1) {
            this.regAutos.splice(index, 1);
            return true;
        }
        return false;
    }
    deleteCamion(patente) {
        let index = this.regCamiones.findIndex(camion => camion.getPatente() === patente);
        if (index !== -1) {
            this.regCamiones.splice(index, 1);
            return true;
        }
        return false;
    }
    deleteMoto(patente) {
        let index = this.regMotos.findIndex(moto => moto.getPatente() === patente);
        if (index !== -1) {
            this.regMotos.splice(index, 1);
            return true;
        }
        return false;
    }
}
