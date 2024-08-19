const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa con jardín en barrio residencial',
        src: './assets/img/casa-blanca-venta.png',
        descripcion: 'Casa muy amplia en un barrio muy tranquilo, silencioso y seguro a las afueras de la ciudad.',
        ubicacion: 'Camino del Valle 321, Vitacura, Santiago, RM',
        habitaciones: 5,
        banos: 3,
        costo: 15000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento céntrico y cercano a Universidades',
        src: './assets/img/departamento-venta.png',
        descripcion: 'Hermoso departamento, con diseño muy moderno. Jardines verticales en edificio único en Chile con vista al mar.',
        ubicacion: 'Av. del Mar 987, La Serena, Coquimbo',
        habitaciones: 3,
        banos: 2,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de campo en la Patagonia',
        src: './assets/img/casa-campo-venta.png',
        descripcion: 'Casa de campo rústica en la Patagonia, rodeada de naturaleza y paisajes impresionantes, ideal para desconectar y disfrutar de la tranquilidad.',
        ubicacion: 'Camino Los Andes 2345, Villa OHiggins, Patagonia, Aysén, Chile.',
        habitaciones: 5,
        banos: 5,
        costo: 30500,
        smoke: true,
        pets: true
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const contenedorVenta = document.querySelector('#venta .row');

    for (let propiedad of propiedades_venta) {
        contenedorVenta.innerHTML += `
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



