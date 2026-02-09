class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable() {
        return this.nombre;
    }

    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }

    getCuentaIndividual() {
        return this.contador;
    }

    incrementarCuenta() {
        this.contador++;
        Contador.contadorGlobal++;
    }
}

const alexis = new Contador("Alexis");
const brian = new Contador("Brian");

alexis.incrementarCuenta();
alexis.incrementarCuenta();
brian.incrementarCuenta();

console.log(alexis.getCuentaIndividual()); // Devuelve 2
console.log(brian.getCuentaIndividual()); // Devuelve 1
console.log(alexis.getCuentaGlobal()); // Devuelve 3
console.log(Contador.contadorGlobal); // Devuelve 3