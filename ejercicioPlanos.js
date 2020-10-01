let robarPlanos= (numeroSerie, despegar) => {

    if (numeroSerie<=10) {
        let mensaje = `Tenemos el plano de la estrella de la muerte ${numeroSerie}`;
        despegar(null,mensaje);
    }
    
    else {
        let mensaje = `Planos equivocados `;
        despegar(mensaje, null);
        }
    }
    
    robarPlanos(18, (error,mensaje) => {
        if (error){
            console.log(error);
        }
        else {
        console.log(mensaje);
        console.log(`Estamos despegando la nave.`);
        }
    });