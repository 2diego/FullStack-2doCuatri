import { RegAutomotor } from "./regAutomotor.js";
import { Autos } from "./autos.js";
import { Motos } from "./motos.js";
import { Camiones } from "./camiones.js";
const regOlavarria = new RegAutomotor("Olavarria");
const regTandil = new RegAutomotor("Tandil");
const registros = [regOlavarria, regTandil];
const sedeSelect = document.getElementById('sede-select');
const automotorSelect = document.getElementById('automotor-select');
const marcaInput = document.getElementById('marca');
const modeloInput = document.getElementById('modelo');
const añoInput = document.getElementById('año');
const patenteInput = document.getElementById('patente');
const addBtn = document.getElementById('add-btn');
const autosLista = document.getElementById('autos-lista');
const motosLista = document.getElementById('motos-lista');
const camionesLista = document.getElementById('camiones-lista');
let registroSeleccionado = regOlavarria;
function cargarSedes() {
    registros.forEach((registro, index) => {
        const option = document.createElement('option');
        option.value = index.toString();
        option.textContent = registro.getLocalidad();
        sedeSelect.appendChild(option);
    });
}
function actualizarListas() {
    autosLista.innerHTML = '';
    motosLista.innerHTML = '';
    camionesLista.innerHTML = '';
    registroSeleccionado.getAutos().forEach((auto) => {
        const li = document.createElement('li');
        li.textContent = `${auto.getMarca()} ${auto.getModelo()} (${auto.getAño()}) - Patente: ${auto.getPatente()}`;
        autosLista.appendChild(li);
    });
    registroSeleccionado.getMotos().forEach((moto) => {
        const li = document.createElement('li');
        li.textContent = `${moto.getMarca()} ${moto.getModelo()} (${moto.getAño()}) - Patente: ${moto.getPatente()}`;
        motosLista.appendChild(li);
    });
    registroSeleccionado.getCamiones().forEach((camion) => {
        const li = document.createElement('li');
        li.textContent = `${camion.getMarca()} ${camion.getModelo()} (${camion.getAño()}) - Patente: ${camion.getPatente()}`;
        camionesLista.appendChild(li);
    });
}
sedeSelect.addEventListener('change', () => {
    const index = parseInt(sedeSelect.value);
    registroSeleccionado = registros[index];
    actualizarListas();
});
// Agregar un vehiculo
addBtn.addEventListener('click', () => {
    const marca = marcaInput.value;
    const modelo = modeloInput.value;
    const año = parseInt(añoInput.value);
    const patente = patenteInput.value;
    const tipoVehiculo = automotorSelect.value;
    if (marca && modelo && año && patente) {
        if (tipoVehiculo === 'auto') {
            const nuevoAuto = new Autos(marca, modelo, año, patente);
            registroSeleccionado.addAuto(nuevoAuto);
        }
        else if (tipoVehiculo === 'moto') {
            const nuevaMoto = new Motos(marca, modelo, año, patente);
            registroSeleccionado.addMoto(nuevaMoto);
        }
        else if (tipoVehiculo === 'camion') {
            const nuevoCamion = new Camiones(marca, modelo, año, patente);
            registroSeleccionado.addCamion(nuevoCamion);
        }
        marcaInput.value = '';
        modeloInput.value = '';
        añoInput.value = '';
        patenteInput.value = '';
        actualizarListas();
    }
    else {
        alert('Por favor, completa todos los campos.');
    }
});
cargarSedes();
actualizarListas();
