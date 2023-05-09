

function pagoMinimo(){ 
    let pago = parseInt(prompt("Ingresar monto de prestamo"));
    while(pago <= 1000 ){
        console.log("EL PAGO NO LLEGA AL MONTO MINIMO");
        alert("El PAGO NO LLEGA AL MONTO MINIMO");
        let pago = parseInt(prompt("Ingresar monto de prestamo"));
    if(pago >= 10001 && pago <= 20000){
        console.log("El prestamo llega al monto minimo, PUEDE OBTENERLO");
        alert("El prestamo llega al monto minimo, PUEDE OBTENERLO");
        break
        }
    else if(pago >= 20001 && pago <= 30000){
        console.log("El prestamo llega al monto medio, PUEDE OBTENERLO");
        alert("El prestamo llega al monto medio, PUEDE OBTENERLO");
        break
        }
    else if(pago >= 30001 && pago <= 100000){
        console.log("El prestamo llega al monto maximo, PUEDE OBTENERLO");
        alert("El prestamo llega al monto maximo, PUEDE OBTENERLO");
        break
        }
    }
}

let edad = parseInt(prompt("Ingresar edad"))

while( edad <= 17 ){
    console.log("El usuario es menor de edad");
    alert("El usuario es menor de edad");

    let edad = parseInt(prompt("Ingrese nuevamente su edad"));

    if( edad <= 17 ){
        console.log("El usuario es menor de edad, ACCESO DENEGADO");
        alert("El Usuario es menor de edad, ACCESO DENEGADO")
        continue
    }
    else if( edad >= 18 ){
        console.log("El usuario es mayor de edad, puede acceder al credito");
        alert("El usuario es mayor de edad, puede acceder al credito");
        break
    }
}



pagoMinimo();



