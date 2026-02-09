const mostrarLista = (array) => {
    if(!Array.isArray(array)) throw new Error("El parámetro debe ser un arreglo");
    if(!array.length) return "La lista está vacía";
    const arrayResult = [];
    for(const item of array) {
        arrayResult.push(item);
    }
    return {
        items: arrayResult,
        length: arrayResult.length
    }
};

console.log(mostrarLista([1, 2, 3])); // Devuelve 1