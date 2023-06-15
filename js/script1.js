const tbody = document.querySelector('#tabla tbody');

function eventListeners(){
    document.addEventListener('DOMContentLoaded', ()=>{
        cuotas = JSON.parse(localStorage.getItem('prestamosStorage')) || [];
        imprimirHTML();
    })
}
function ocultarContenido(){
    let contenido = document.querySelector("#historial");
    contenido.classList.toggle("oculto");
}
let cuotas = [];
eventListeners();
const interes = {
    3: 0.05,
    6: 0.10,
    12: 0.20
}
function solicitar(){
    // e.preventDefault();
    const plazos = document.querySelector('input[name="cuotas"]:checked').value;
    const monto_prestamo = document.querySelector('#cantidad_solicitada').value;
    // console.log(monto_prestamo);
    let plazos_int = parseInt(plazos);
    let cantidad_interes = monto_prestamo * interes[plazos_int];
    let total = monto_prestamo * (1 + interes[plazos_int]);
    total = total.toFixed(2);
    const prestamo = {
        plazos,
        monto_prestamo,
        cantidad_interes,
        total
    }
    cuotas = [...cuotas, prestamo];
    localStorage.setItem('prestamosStorage', JSON.stringify(cuotas));
    imprimirHTML();
    // cuotas.push(prestamo);
    // console.log(total);
}
function imprimirHTML(){
    limpiarHTML();
    for(let cuota of cuotas){
        const {plazos, monto_prestamo, cantidad_interes, total} = cuota;
        const filas = document.createElement('tr');
        filas.innerHTML = `
            <td> ${plazos} </td>
            <td> $ ${monto_prestamo} </td>
            <td> $ ${cantidad_interes} </td>
            <td> $ ${total} </td>
        `;
        tbody.appendChild(filas);
    }
}
function limpiarHTML(){
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}

