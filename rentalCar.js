function rentalCar(tipoVehiculo, diasAlquiler, sillaParaBebe) {
    let costoPorDia;

    switch (tipoVehiculo.toLowerCase()) {
        case 'compacto':
            costoPorDia = 14000;
            break;
        case 'mediano':
            costoPorDia = 17000;
            break;
        case 'camioneta':
            costoPorDia = 28000;
            break;
        default:
            return "Vehículo no reconocido.";
    }

    let costoSilla = sillaParaBebe ? 1200 : 0;

    let total = (costoPorDia + costoSilla) * diasAlquiler;

    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${total}.` +
                    (sillaParaBebe ? " Incluyendo el costo por silla para bebé." : "");

    return mensaje;
}

// Pruebas:
// console.log(rentalCar("compacto", 3, true));
// console.log(rentalCar("compacto", 3, false));  
// console.log(rentalCar("mediano", 5, false)); 
// console.log(rentalCar("mediano", 8, false))  
// console.log(rentalCar("camioneta", 7, true));   
// console.log(rentalCar("camioneta", 2, true)); 