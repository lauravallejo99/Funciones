//Función.

// nombrePiloto ("")

// function nombrePiloto (nombre) {
//     let codigoBD = nombre.split(":");
//     console.log("El nombre del piloto es: " + codigoBD[1]);
// }

//Función flecha.

let nombrePiloto = (nombre) => console.log(`El piloto es: ${nombre.split(":")[1]}`);
nombrePiloto("ARQ2556: Nodin Chavdri");