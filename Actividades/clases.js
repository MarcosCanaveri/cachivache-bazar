class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    static variableEstatica = "Esta es una variable estática";

    getNombre = () => {
        return this.nombre;
    }
}

const persona = new Persona("Juan");
const persona2 = new Persona("María");
console.log(persona.getNombre()); // Output: Juan
console.log(persona2.getNombre()); // Output: María
console.log(Persona.variableEstatica); // Output: Esta es una variable estática