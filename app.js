function seleccionarOpcion() {
    let opcion = prompt("Seleccione un Equipo: \n 1. River \n 2. Racing \n 3. Independiente");

    if (opcion === "1" || opcion === "2" || opcion === "3") {
        procesarOpcion(opcion);
    } else {
        alert("Opción no válida");
        seleccionarOpcion();
    }
}

function procesarOpcion(opcion) {
    let seguirSeleccionando = true;
    while (seguirSeleccionando) {
        switch (opcion) {
            case "1":
                console.log("Elegiste River");
                let opcionA = prompt("Ha seleccionado River, seleccione una prenda: \n 1. Short \n 2. Camiseta \n 3. Buzo");
                procesarOpcionAdicional(opcionA);
                break;
            case "2":
                console.log("Elegiste Racing");
                let opcionB = prompt("Ha seleccionado Racing, seleccione una prenda: \n 1. Short) \n 2. Camiseta \n 3. Buzo");
                procesarOpcionAdicional(opcionB);
                break;
            case "3":
                console.log("Elegiste Independiente");
                let opcionC = prompt("Ha seleccionado la Opción C, seleccione una prenda: \n 1. Short) \n 2. Camiseta \n 3. Buzo");
                procesarOpcionAdicional(opcionC);
                break;
        }

        let respuesta = prompt("¿Desea seleccionar otra prenda? (s/n)").toLowerCase();
        seguirSeleccionando = (respuesta === "s");
    }
}

function procesarOpcionAdicional(opcion) {
    switch (opcion) {
        case "1":
            console.log("Elegiste Short");
            alert("El precio seleccionado es $11000.");
            break;
        case "2":
            console.log("Elegiste Camiseta");
            alert("El precio seleccionado es $24000.");
            break;
        case "3":
            console.log("Elegiste Buzo");
            alert("El precio seleccionado es $37000.");
            break;
        default:
            alert("Opción no válida");
            procesarOpcion(prompt("Seleccione una opción válida"));
    }
}
seleccionarOpcion();