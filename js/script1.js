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
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu solicitud se agrego al historial',
        showConfirmButton: false,
        timer: 3000
    })
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


function mostrar_posicion(posicion){
    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "89ae282607ef8ed1a6e446ae5d4e67e2";
    
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then( Response => Response.json())
        .then( data =>{
            const elemento_clima = document.getElementById('clima');
            elemento_clima.innerHTML = `<div class="box_clima">
                                            <p class="p_lugar">${data.name}</p>
                                            <p class="p_temp">Temperatura:${data.main.temp}</p>
                                        </div>
            `
            console.log(data);})
            
}


async function mostrar_divisa(){

    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd399b3523dmsh820c89b5acf7081p1268a8jsn5689f604ffd4',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if (result && result.data && result.data.coins && result.data.coins.length > 0) {
            const coin = result.data.coins[0];
            const price = parseInt(coin.price);
            crearParrafohtml(coin.name, price);
        } else {
            alert("No se encontraron datos de la moneda")
            console.log('No se encontraron datos de monedas');
        }
    } catch (error) {
        console.error(error);
    }
}
function crearParrafohtml(data, price){
    const elemento_moneda = document.getElementById('moneda');
            const p = document.createElement('p');
            p.classList.add('bitcoin');
            p.textContent = `Moneda: ${data}`;
            elemento_moneda.appendChild(p);
            const pi = document.createElement('p');
            pi.classList.add('precio_bitcoin');
            pi.textContent = `Precio: USD ${price}`;
    elemento_moneda.appendChild(pi);

    console.log(data); 
}
mostrar_divisa()

navigator.geolocation.getCurrentPosition(mostrar_posicion);