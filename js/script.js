
class Usuario{
    constructor(nombre, apellido, edad, password, id){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._password = password;
        this._historial = [];
        this._id = id;
    }
    get edad(){
        return this._edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }
    set edad(nueva_edad){
        this._edad = nueva_edad;
    }
    set password(nueva_password){
        this._password = nueva_password;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(nuevo_apellido){
        this._apellido = nuevo_apellido;
    }
    get historial(){
        return this._historial;
    }
    agregarPrestamo(prestamo) {
        this._historial.push(prestamo);
    }
}


function pagoMinimo(){ 
    let pago = parseInt(prompt("Ingresar monto de prestamo"));
    while(pago <= 1000 ){
        console.log("EL PAGO NO LLEGA AL MONTO MINIMO");
        alert("El PAGO NO LLEGA AL MONTO MINIMO");
        pago = parseInt(prompt("Ingresar monto de prestamo"));
    }
    if(pago >= 10001 && pago <= 20000){
        
        console.log("El prestamo llega al monto minimo, PUEDE OBTENERLO");
        alert("El prestamo llega al monto minimo, PUEDE OBTENERLO");
        }
    else if(pago >= 20001 && pago <= 30000){

        console.log("El prestamo llega al monto medio, PUEDE OBTENERLO");
        alert("El prestamo llega al monto medio, PUEDE OBTENERLO");
        }
    else if(pago >= 30001 && pago <= 100000){
        console.log("El prestamo llega al monto maximo, PUEDE OBTENERLO");
        alert("El prestamo llega al monto maximo, PUEDE OBTENERLO");
        }
    return pago;
}

function ingreso(){
    let edad = parseInt(prompt("Ingresar edad"))
    while( edad <= 17 ){
        console.log("El usuario es menor de edad, ACCESO DENEGADO");
        alert("El Usuario es menor de edad, ACCESO DENEGADO");
        edad = parseInt(prompt("Ingresar edad"));
    }
    console.log("El usuario es mayor de edad, puede acceder al credito");
    alert("El usuario es mayor de edad, puede acceder al credito");
    
    let nombre = prompt("Ingresar nombre");
    let apellido = prompt("Ingresar apellido");
    let password = prompt("Ingresar password");
    let id = Math.round(Math.random() * (100 - 10)) + 10;
    const pago_resultado = pagoMinimo();
    const usuario = new Usuario(nombre, apellido, edad, password, id);
    const fecha = new Date(); 
    const prestamo = {
        monto: pago_resultado,
        fecha: fecha.toDateString(),
    }
    usuario.agregarPrestamo(prestamo);
    console.log(usuario);
}

ingreso();
