import { RegAutomotor } from './RegAutomotor';
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';
import * as readlineSync from 'readline-sync';

const regAutomotor = new RegAutomotor("Buenos Aires");

function crearAuto() {
    const marca = readlineSync.question("Marca del Auto: ");
    const modelo = readlineSync.question("Modelo del Auto: ");
    const year = parseInt(readlineSync.question("Anio del Auto: "));
    const patente = readlineSync.question("Patente del Auto (6 digitos): ");

    const auto = new Auto(marca, modelo, year, patente);
    regAutomotor.addAuto(auto);
    console.log(`Auto ${marca} ${modelo} ${year} patente ${patente} agregado con exito.`);
}

function crearMoto() {
    const marca = readlineSync.question("Marca de la Moto: ");
    const modelo = readlineSync.question("Modelo de la Moto: ");
    const year = parseInt(readlineSync.question("Anio de la Moto: "));
    const patente = readlineSync.question("Patente de la Moto (4 digitos): ");

    const moto = new Moto(marca, modelo, year, patente);
    regAutomotor.addMoto(moto);
    console.log(`Moto ${marca} ${modelo} ${year} patente ${patente} agregada con exito.`);
}

function crearCamion() {
    const marca = readlineSync.question("Marca del Camion: ");
    const modelo = readlineSync.question("Modelo del Camion: ");
    const year = parseInt(readlineSync.question("Anio del Camion: "));
    const patente = readlineSync.question("Patente del Camion (8 digitos): ");

    const camion = new Camion(marca, modelo, year, patente);
    regAutomotor.addCamion(camion);
    console.log(`Camion ${marca} ${modelo} ${year} patente ${patente} agregado con exito.`);
}

function verVehiculos() {
    console.log("\nAutos registrados:");
    regAutomotor.getAutos().forEach(auto => {
        console.log(`- ${auto.getMarca()} ${auto.getModelo()} (${auto.getYear()}) - Patente: ${auto.getPatente()}`);
    });

    console.log("\nMotos registradas:");
    regAutomotor.getMotos().forEach(moto => {
        console.log(`- ${moto.getMarca()} ${moto.getModelo()} (${moto.getYear()}) - Patente: ${moto.getPatente()}`);
    });

    console.log("\nCamiones registrados:");
    regAutomotor.getCamiones().forEach(camion => {
        console.log(`- ${camion.getMarca()} ${camion.getModelo()} (${camion.getYear()}) - Patente: ${camion.getPatente()}`);
    });
}

function borrarVehiculo() {
    const tipo = readlineSync.question("¿Que tipo de vehiculo desea borrar? (auto/moto/camion): ").toLowerCase();
    const patente = readlineSync.question("Ingrese la patente del vehiculo a borrar: ");

    let eliminado = false;
    switch (tipo) {
        case 'auto':
            eliminado = regAutomotor.deleteAuto(patente);
            break;
        case 'moto':
            eliminado = regAutomotor.deleteMoto(patente);
            break;
        case 'camion':
            eliminado = regAutomotor.deleteCamion(patente);
            break;
        default:
            console.log("Tipo de vehiculo no reconocido.");
    }

    if (eliminado) {
        console.log(`Vehiculo con patente ${patente} eliminado con exito.`);
    } else {
        console.log(`No se encontro un vehiculo con la patente ${patente}.`);
    }
}

function menu() {
    while (true) {
        console.log("\n=== Registro Automotor ===");
        console.log("1. Crear Auto");
        console.log("2. Crear Moto");
        console.log("3. Crear Camion");
        console.log("4. Ver Vehiculos");
        console.log("5. Borrar Vehiculo");
        console.log("6. Salir");
        const opcion = readlineSync.question("Seleccione una opcion: ");

        switch (opcion) {
            case '1':
                crearAuto();
                break;
            case '2':
                crearMoto();
                break;
            case '3':
                crearCamion();
                break;
            case '4':
                verVehiculos();
                break;
            case '5':
                borrarVehiculo();
                break;
            case '6':
                console.log("Saliendo del programa...");
                return;
            default:
                console.log("Opcion no valida, intente de nuevo.");
        }
    }
}

menu();
