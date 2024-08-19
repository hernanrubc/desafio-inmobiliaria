const propiedades_arriendo = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de campo en Osorno',
        src: './assets/img/campo-arriendo.png',
        descripcion: 'Acogedora casa de campo en Osorno, rodeada de verdes praderas, perfecta para disfrutar de la tranquilidad y el aire puro.',
        ubicacion: 'Ruta U-55 Km 10, Camino a Puyehue, Osorno, Los Lagos, Chile.',
        habitaciones: 5,
        banos: 3,
        costo: 460000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento en el centro de Santiago',
        src: './assets/img/departamento-arriendo.png',
        descripcion: 'Moderno departamento en el corazón de Santiago, con excelente conectividad y todos los servicios a solo pasos. Cercano a metro.',
        ubicacion: 'Av. Libertador Bernardo OHiggins 1250, Santiago Centro, RM, Chile',
        habitaciones: 1,
        banos: 1,
        costo: 1000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa muy grande con piscina en Lo Barnechea',
        src: './assets/img/casa-arriendo.png',
        descripcion: 'Espectacular casa en Lo Barnechea, amplia y luminosa, con gran jardín y piscina, perfecta para disfrutar en familia.',
        ubicacion: ' Calle Los Trapenses 3456, Lo Barnechea, Santiago, RM, Chile.',
        habitaciones: 4,
        banos: 4,
        costo: 3500000,
        smoke: true,
        pets: true
    }
];



document.addEventListener('DOMContentLoaded', () => {
    const contenedorArriendo = document.querySelector('#arriendo .row');

    for (let propiedad of propiedades_arriendo) {
        contenedorArriendo.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                            <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                            <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
});
