const contenedorTarjetas = document.querySelector('#contenedorTarjeta');

let tarjetasGeneradas = generarTarjetas(data.events, data.currentDate);

contenedorTarjetas.innerHTML = tarjetasGeneradas;

function generarTarjetas (arrayEvents){
    let tarjetas = '';
    for (const event of arrayEvents){
        tarjetas += crearTarjetas(event)
    }
    return tarjetas
}

function crearTarjetas(event){
    return `
    <div class="card text-bg-warning" style="width: 15rem;">
        <img src="${event.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.date}</p>
            <p class="card-text">${event.description}</p>
            <p class="card-text">${event.category}</p>
            <a href="details.html" class="btn btn-primary">Go</a>
        </div>
    </div>`
}






