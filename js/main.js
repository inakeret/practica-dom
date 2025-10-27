/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img');

const recomendadosContainer = document.querySelector('#recomendados .flexContainer');

const selectorDestinos = document.querySelector('#destinos #selectorDestinos');
/* Acceder al elemento del DOM para crear los artículos de viajes */


/* Acceder al elemento del DOM para crear añadir los options */

const arrayBanners = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Banner uno'
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Banner uno'
    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'Banner uno'
    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'Banner uno'
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Banner uno'
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Banner uno'
    },
    {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Banner uno'
    },
    {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'Banner uno'
    },
]
const arrayViajes = [
    {
        id: "viajes1",
        src: 'assets/viajes/viajes-1.jpg',
        alt: 'Viaje uno',
        title: 'Título del viaje uno',
        description: 'Descripción del viaje uno'
    },
    {
        id: "viajes2",
        src: 'assets/viajes/viajes-2.jpg',
        alt: 'Viaje dos',
        title: 'Título del viaje dos',
        description: 'Descripción del viaje dos'
    },
    {
        id: "viajes3",
        src: 'assets/viajes/viajes-3.jpg',
        alt: 'Viaje tres',
        title: 'Título del viaje tres',
        description: 'Descripción del viaje tres'
    },
    {
        id: "viajes4",
        src: 'assets/viajes/viajes-4.jpg',
        alt: 'Viaje cuatro',
        title: 'Título del viaje cuatro',
        description: 'Descripción del viaje cuatro'
    },
    {
        id: "viajes5",
        src: 'assets/viajes/viajes-5.jpg',
        alt: 'Viaje cinco', 
        title: 'Título del viaje cinco',
        description: 'Descripción del viaje cinco'
    },
    {
        id: "viajes6",
        src: 'assets/viajes/viajes-6.jpg',
        alt: 'Viaje seis',
        title: 'Título del viaje seis',
        description: 'Descripción del viaje seis'
    },
    {
        id: "viajes7",
        src: 'assets/viajes/viajes-7.jpg',
        alt: 'Viaje siete',
        title: 'Título del viaje siete',
        description: 'Descripción del viaje siete'
    }
]


const arrayDestinos = [
    {
        valor: 'Burgos',
        nombre: 'Burgos'
    },
    {
        valor: 'Paris',
        nombre: 'Paris'
    },
    {
        valor: 'Santander',
        nombre: 'Santander'
    },
    {
        valor: 'Roma',
        nombre: 'Roma'
    },
    {
        valor: 'Milan',
        nombre: 'Milan'
    },
    {
        valor: 'Cadiz',
        nombre: 'Cadiz'
    },

]


/* EVENTOS */

/* FUNCIONES */
const aleatorio = () => {
    const indice = Math.floor(Math.random()*arrayBanners.length);
    return indice
}

const pintarBanner = () => {

    const indice = aleatorio();
    const elemento = arrayBanners[indice]

    // console.log(elemento.alt)
    // console.log(elemento.src)

    imagenBanner.setAttribute('src', elemento.src)
    imagenBanner.alt = elemento.alt
    // console.log(imagenBanner)

}

const pintarCards = () => {
    /* crear un fragmento */
    const fragmento = document.createDocumentFragment();
    /* recorrer los elementos del array*/
    arrayViajes.forEach( (viaje) => {
        /* por cada elemento crear:*/

        /* un article   */
        const cajaViaje = document.createElement('article');

        /* un div   */
        const cajaImagen = document.createElement('div');

        /* una imgen asignando sus atributos   */
        const imagen = document.createElement('img');
        imagen.src = viaje['src'];
        imagen.alt = viaje['alt'];
        imagen.id = viaje['id'];

        /* un h3 asignar su valor   */
        const titulo = document.createElement('h3');

        /* un p asignar su valor   */
        const descripcion = document.createElement('p');


        titulo.textContent = viaje['title'];
        descripcion.textContent = viaje['description'];

        /* meter la imagen en el div */
        cajaImagen.append(imagen);

        /* meter el div en el article */
        cajaViaje.append(cajaImagen);

        /* meter el h3 y el p en el article */
        cajaViaje.append(titulo, descripcion);

        fragmento.append(cajaViaje);

    });    

    /* añadir el fragmento al div flexContainer */
    recomendadosContainer.append(fragmento);
}

const pintarDestinos = () =>{
    const fragmento = document.createDocumentFragment();

    arrayDestinos.forEach( (destino) => {
        const opcion = document.createElement('option');
        opcion.value = destino['valor'];
        opcion.textContent = destino['nombre'];
        fragmento.append(opcion);
    })
    selectorDestinos.append(fragmento);

}



/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner()
pintarCards()
pintarDestinos()