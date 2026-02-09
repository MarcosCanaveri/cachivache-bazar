class TicketManager {
    #precioBaseDeGanancia = 0.15;
    constructor() {
        this.eventos = [];
    }

    #generarId() {
        return Math.floor(Math.random() * 1000);
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) {
        const evento = {
            id: this.#generarId(),
            nombre: nombre,
            lugar: lugar,
            precio: precio + this.#precioBaseDeGanancia,
            capacidad: capacidad,
            fecha: fecha,
            participantes: [],
        };
        this.eventos.push(evento);
        return evento;
    }

    obtenerEventos() {
        return this.eventos;
    }

    obtenerEventoPorId(id) {
        return this.eventos.find((e) => e.id === id);
    }

    agregarUsuario(idEvento, idUsuario) {
        const evento = this.obtenerEventoPorId(idEvento);
        if (!evento) throw new Error("Evento no encontrado");
        if (evento,participantes.includes(idUsuario)) throw new Error('El usuario estáregistrado');
        return evento.participantes.push(idUsuario);
    }


ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const evento = this.obtenerEventoPorId(idEvento);
    if (!evento) throw new Error("Evento no encontrado");
    const nuevoEvento = {
        id: this.#generarId(),
        ...evento,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: [],
    };
    this.eventos.push(nuevoEvento);
    return nuevoEvento;
}
}


const TicketManager = new TicketManager();

const evento1 = TicketManager.agregarEvento("Soda Stereo", "Estadio Nacional", 100);
const evento2 = TicketManager.agregarEvento("Patricio Rey", "Teatro Municipal", 50, 100);
TicketManager.agregarUsuario(evento1.id, 1);
TicketManager.agregarUsuario(evento2.id, 130);
TicketManager.ponerEventoEnGira(evento1.id, "Buenos Aires", "2024-12-15");

console.log(TicketManager.obtenerEventos());