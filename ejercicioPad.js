let leccion= (nombre,planeta,edad,estatura,fuerza) => {

    if (edad<=15){
        let mensaje = `Maestro, el aprendiz ${nombre} del planeta ${planeta} con la estatura ${estatura } metros tiene ${edad} años debe aprender a manejar la fuerza primero `;
        fuerza(null,mensaje);
    }
    else {
        let mensaje = `Maestro, el aprendiz ${nombre} del planeta ${planeta} con una estatura de ${estatura } metros tiene ${edad} años ya es apto para aprender a manejar el sable de luz`;
       fuerza(mensaje, null);
       }
    }

    leccion("Ahsoka Tano","Shili",12,1.88,(error,mensaje)=>{
        if (error){
            console.log(error)
        }
        else {
            console.log(mensaje);
            }
    });
