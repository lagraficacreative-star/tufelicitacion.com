// Data Models
const SECTORS = [
    { id: 'alimentacion', name: 'Alimentación', icon: 'fa-apple-whole', image: 'sectores/alimentacionimagenes/alimentacion.png' },
    { id: 'arte', name: 'Arte', icon: 'fa-palette', image: 'sectores/arte imagenes/unnamed.jpg' },
    { id: 'automocion', name: 'Automoción', icon: 'fa-car', image: 'sectores/automocion imagenes/unnamed-8.jpg' },
    { id: 'faceswap_special', name: 'Cambia tu cara', icon: 'fa-user-astronaut', image: 'canvia tu cara/Vestido Dulce.jpg' },
    { id: 'comercio', name: 'Comercio', icon: 'fa-store', image: 'sectores/comercio imagenes/comercio1.jpg.jpg' },
    { id: 'construccion', name: 'Construcción', icon: 'fa-helmet-safety', image: 'sectores/construccion imagenes/construccioferreteria.jpg' },
    { id: 'deporte', name: 'Deporte', icon: 'fa-dumbbell', image: 'sectores/deporte imagenes/santaclausgimnasio.jpg' },
    { id: 'estetica', name: 'Estética', icon: 'fa-spa', image: 'sectores/estetica imagenes/chicamaquillajenav.jpg' },
    { id: 'ferreteria', name: 'Ferretería', icon: 'fa-tools', image: 'sectores/ferreteria imagenes/arbolherramientas ferreria.jpg' },
    { id: 'formacion', name: 'Formación', icon: 'fa-graduation-cap', image: 'sectores/formacion imagenes/lapiceronavidad.jpg' },
    { id: 'humor', name: 'Humor', icon: 'fa-face-laugh-beam', image: 'sectores/humor imagenes/perronavideño.jpg' },
    { id: 'industria', name: 'Industria', icon: 'fa-industry', image: 'sectores/industriales/bombillanavidad.jpg' },
    { id: 'inmobiliaria', name: 'Inmobiliaria', icon: 'fa-house', image: 'sectores/inmobiliaria imagenes/edificioluces.webp' },
    { id: 'limpieza', name: 'Limpieza', icon: 'fa-broom', image: 'sectores/limpieza imagenes/unnamed-15.jpg' },
    { id: 'moda', name: 'Moda', icon: 'fa-shirt', image: 'sectores/moda imagenes/Vestido Dulce.jpg' },
    { id: 'negocios', name: 'Negocios', icon: 'fa-briefcase', image: 'sectores/negocios imagenes/unnamed-24.jpg' },
    { id: 'opticas', name: 'Ópticas', icon: 'fa-glasses', image: 'sectores/opticaimagenes/optica-6.jpg' },
    { id: 'particulares', name: 'Particulares', icon: 'fa-user', image: 'sectores/particular imagenes/pastanavidad.png' },
    { id: 'peluqueria', name: 'Peluquería', icon: 'fa-scissors', image: 'sectores/peluqueria imagenes/peluquerianubes.jpg' },
    { id: 'restauracion', name: 'Restauración', icon: 'fa-utensils', image: 'sectores/restauracionimagenes/restaurantenavidad4.png' },
    { id: 'salud', name: 'Salud', icon: 'fa-heart-pulse', image: 'sectores/salud imagenes/unnamed copia 2.jpg' },
    { id: 'servicios', name: 'Servicios', icon: 'fa-handshake', image: 'sectores/ciudades imagenes/sagradafamilia.jpg' },
    // New Sectors for Other Events
    { id: 'fiesta', name: 'Fiesta', icon: 'fa-cake-candles', image: 'sectores/estetica imagenes/chicamaquillajenav.jpg' },
    { id: 'boda', name: 'Bodas', icon: 'fa-ring', image: 'sectores/moda imagenes/moda.png' },
    { id: 'aniversario', name: 'Aniversarios', icon: 'fa-heart', image: 'sectores/restauracionimagenes/restaurantenavidad4.png' },
];

const PRODUCTS = [
    // Placeholder Products for New Events
    {
        id: 1001,
        title: "Felicitación Cumpleaños 1",
        type: "postcard",
        sector: "fiesta",
        price: 0.00,
        image: "sectores/estetica imagenes/chicamaquillajenav.jpg",
        description: "¡Feliz Cumpleaños! Un diseño especial para celebrar.",
        faceCount: 1,
        tags: ["birthday"]
    },
    {
        id: 1002,
        title: "Boda Elegante",
        type: "postcard",
        sector: "boda",
        price: 0.00,
        image: "sectores/moda imagenes/moda.png",
        description: "Una felicitación elegante para bodas.",
        faceCount: 0,
        tags: ["wedding"]
    },
    {
        id: 1003,
        title: "Aniversario Romántico",
        type: "postcard",
        sector: "aniversario",
        price: 0.00,
        image: "sectores/restauracionimagenes/restaurantenavidad4.png",
        description: "Celebra el amor en este aniversario.",
        faceCount: 0,
        tags: ["anniversary"]
    },
    {
        id: 1,
        title: "Bombillanavidad",
        type: "postcard",
        sector: "industria",
        price: 0.00,
        image: "sectores/industriales/bombillanavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector industria.",
        faceCount: 0
    },
    {
        id: 2,
        title: "Diseño 9",
        type: "postcard",
        sector: "industria",
        price: 0.00,
        image: "sectores/industriales/unnamed-9.jpg",
        description: "Felicitación navideña exclusiva para el sector industria.",
        faceCount: 0
    },
    {
        id: 3,
        title: "Diseño 22",
        type: "postcard",
        sector: "industria",
        price: 0.00,
        image: "sectores/industriales/unnamed-22.jpg",
        description: "Felicitación navideña exclusiva para el sector industria.",
        faceCount: 0
    },
    {
        id: 4,
        title: "Diseño 20",
        type: "postcard",
        sector: "industria",
        price: 0.00,
        image: "sectores/industriales/unnamed-20.jpg",
        description: "Felicitación navideña exclusiva para el sector industria.",
        faceCount: 0
    },
    {
        id: 5,
        title: "Diseño 16",
        type: "postcard",
        sector: "industria",
        price: 0.00,
        image: "sectores/industriales/unnamed-16.jpg",
        description: "Felicitación navideña exclusiva para el sector industria.",
        faceCount: 0
    },
    {
        id: 6,
        title: "Diseño 15",
        type: "postcard",
        sector: "limpieza",
        price: 0.00,
        image: "sectores/limpieza imagenes/unnamed-15.jpg",
        description: "Felicitación navideña exclusiva para el sector limpieza.",
        faceCount: 0
    },
    {
        id: 7,
        title: "Diseño Arte 7",
        type: "postcard",
        sector: "arte",
        price: 0.00,
        image: "sectores/arte imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector arte.",
        faceCount: 0
    },
    {
        id: 8,
        title: "Arteestrella",
        type: "postcard",
        sector: "arte",
        price: 0.00,
        image: "sectores/arte imagenes/arteestrella.jpg",
        description: "Felicitación navideña exclusiva para el sector arte.",
        faceCount: 0
    },
    {
        id: 9,
        title: "Arte Mujer",
        type: "postcard",
        sector: "arte",
        price: 0.00,
        image: "sectores/arte imagenes/arte mujer.jpg",
        description: "Felicitación navideña exclusiva para el sector arte.",
        faceCount: 0
    },
    {
        id: 10,
        title: "Diseño 14",
        type: "postcard",
        sector: "arte",
        price: 0.00,
        image: "sectores/arte imagenes/unnamed-14.jpg",
        description: "Felicitación navideña exclusiva para el sector arte.",
        faceCount: 0
    },
    {
        id: 11,
        title: "Alimentacion",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/alimentacion.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 12,
        title: "Arbolfrutasanta",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/arbolfrutasanta.jpg",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 13,
        title: "Frutasnavidad",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/frutasnavidad.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 14,
        title: "Frutaarbo2",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/frutaarbo2.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 15,
        title: "Mandarinasantaclaus",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/mandarinasantaclaus.jpg",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 16,
        title: "Peranavidad2",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/peranavidad2.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 17,
        title: "Peranavidad1",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/peranavidad1.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 18,
        title: "Fruita 3",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/fruita-3.webp",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 19,
        title: "Santa Clausfruta",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/santa clausfruta.webp",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 20,
        title: "Estrellafruta",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/estrellafruta.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 21,
        title: "Arbolfruta",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/arbolfruta.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 22,
        title: "Manzana Navidad",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/manzana-navidad.webp",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 23,
        title: "Pavosantaclaus",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/pavosantaclaus.jpg",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 24,
        title: "Arbolfruta Png",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/arbolfruta.png.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 25,
        title: "ManzanamontañA",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/manzanamontaña.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 26,
        title: "Frutasnavidad2",
        type: "postcard",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacionimagenes/frutasnavidad2.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 27,
        title: "Peluquerianubes",
        type: "postcard",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria imagenes/peluquerianubes.jpg",
        description: "Felicitación navideña exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 28,
        title: "Peluqueraarbol",
        type: "postcard",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria imagenes/peluqueraarbol.jpg",
        description: "Felicitación navideña exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 29,
        title: "Peluquerianavidad",
        type: "postcard",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria imagenes/peluquerianavidad.png",
        description: "Felicitación navideña exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 30,
        title: "Peluquerianavidad2",
        type: "postcard",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria imagenes/peluquerianavidad2.png",
        description: "Felicitación navideña exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 31,
        title: "PeluqueriamuñEca",
        type: "postcard",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria imagenes/peluqueriamuñeca.jpg",
        description: "Felicitación navideña exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 32,
        title: "Dall·E 2024 11 21 07 52 49   A Highly Realistic Portrait Of A Young Woman With Her Hair Styled Into A High Bun Shaped Like A Christmas Tree  The Bun Features Intricate Details Of",
        type: "postcard",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria imagenes/DALL·E 2024-11-21 07.52.49 - A highly realistic portrait of a young woman with her hair styled into a high bun shaped like a Christmas tree. The bun features intricate details of .webp",
        description: "Felicitación navideña exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 33,
        title: "Peinearbol",
        type: "postcard",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria imagenes/peinearbol.png",
        description: "Felicitación navideña exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 34,
        title: "Sagradafamilia",
        type: "postcard",
        sector: "servicios",
        price: 0.00,
        image: "sectores/ciudades imagenes/sagradafamilia.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios.",
        faceCount: 0
    },
    {
        id: 35,
        title: "Barcelonasantaclaus",
        type: "postcard",
        sector: "servicios",
        price: 0.00,
        image: "sectores/ciudades imagenes/barcelonasantaclaus.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios.",
        faceCount: 0
    },
    {
        id: 36,
        title: "Lleida Santa Claus",
        type: "postcard",
        sector: "servicios",
        price: 0.00,
        image: "sectores/ciudades imagenes/lleida santa claus.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios.",
        faceCount: 0
    },
    {
        id: 37,
        title: "Barcelona Santa Claus",
        type: "postcard",
        sector: "servicios",
        price: 0.00,
        image: "sectores/ciudades imagenes/barcelona santa claus.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios.",
        faceCount: 0
    },
    {
        id: 38,
        title: "Lleidapistahielo",
        type: "postcard",
        sector: "servicios",
        price: 0.00,
        image: "sectores/ciudades imagenes/lleidapistahielo.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios.",
        faceCount: 0
    },
    {
        id: 39,
        title: "Optica 6",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica-6.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 40,
        title: "Optica 7",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica-7.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 41,
        title: "PestañAnavidad",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/pestañanavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 42,
        title: "Optica18",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica18.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 43,
        title: "Optica19",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica19.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 44,
        title: "Optica21",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica21.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 45,
        title: "Optica20",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica20.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 46,
        title: "Optica9",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica9.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 47,
        title: "Optica8",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica8.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 48,
        title: "Optica12",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica12.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 49,
        title: "Optica5",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica5.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 50,
        title: "Optica4",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica4.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 51,
        title: "Optica13",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica13.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 52,
        title: "Optica11",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica11.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 53,
        title: "Optica10",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica10.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 54,
        title: "Optica14",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica14.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 55,
        title: "Optica3",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica3.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 56,
        title: "Optica2",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica2.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 57,
        title: "Optica15",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica15.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 58,
        title: "Optica17",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica17.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 59,
        title: "Optica1",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica1.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 60,
        title: "Optica16",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/optica16.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 61,
        title: "Ojosnavidad",
        type: "postcard",
        sector: "opticas",
        price: 0.00,
        image: "sectores/opticaimagenes/ojosnavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector opticas.",
        faceCount: 0
    },
    {
        id: 62,
        title: "PerronavideñO",
        type: "postcard",
        sector: "humor",
        price: 0.00,
        image: "sectores/humor imagenes/perronavideño.jpg",
        description: "Felicitación navideña exclusiva para el sector humor.",
        faceCount: 0
    },
    {
        id: 63,
        title: "Oso NavideñO",
        type: "postcard",
        sector: "humor",
        price: 0.00,
        image: "sectores/humor imagenes/oso navideño.jpg",
        description: "Felicitación navideña exclusiva para el sector humor.",
        faceCount: 0
    },
    {
        id: 64,
        title: "Perronavidad Calle",
        type: "postcard",
        sector: "humor",
        price: 0.00,
        image: "sectores/humor imagenes/perronavidad-calle.jpg",
        description: "Felicitación navideña exclusiva para el sector humor.",
        faceCount: 0
    },
    {
        id: 65,
        title: "Gato NavideñO",
        type: "postcard",
        sector: "humor",
        price: 0.00,
        image: "sectores/humor imagenes/gato navideño.jpg",
        description: "Felicitación navideña exclusiva para el sector humor.",
        faceCount: 0
    },
    {
        id: 66,
        title: "Edificioluces",
        type: "postcard",
        sector: "inmobiliaria",
        price: 0.00,
        image: "sectores/inmobiliaria imagenes/edificioluces.webp",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria.",
        faceCount: 0
    },
    {
        id: 67,
        title: "Inmobiliarianavidad",
        type: "postcard",
        sector: "inmobiliaria",
        price: 0.00,
        image: "sectores/inmobiliaria imagenes/inmobiliarianavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria.",
        faceCount: 0
    },
    {
        id: 68,
        title: "Edificioarbol",
        type: "postcard",
        sector: "inmobiliaria",
        price: 0.00,
        image: "sectores/inmobiliaria imagenes/edificioarbol.png",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria.",
        faceCount: 0
    },
    {
        id: 69,
        title: "Ventananavidad",
        type: "postcard",
        sector: "inmobiliaria",
        price: 0.00,
        image: "sectores/inmobiliaria imagenes/ventananavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria.",
        faceCount: 0
    },
    {
        id: 70,
        title: "Arbolinmobiliaria",
        type: "postcard",
        sector: "inmobiliaria",
        price: 0.00,
        image: "sectores/inmobiliaria imagenes/arbolinmobiliaria.png",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria.",
        faceCount: 0
    },
    {
        id: 71,
        title: "Regalocasa",
        type: "postcard",
        sector: "inmobiliaria",
        price: 0.00,
        image: "sectores/inmobiliaria imagenes/regalocasa.jpg",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria.",
        faceCount: 0
    },
    {
        id: 72,
        title: "Ciudadestrella",
        type: "postcard",
        sector: "inmobiliaria",
        price: 0.00,
        image: "sectores/inmobiliaria imagenes/ciudadestrella.png",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria.",
        faceCount: 0
    },
    {
        id: 73,
        title: "Diseño 1",
        type: "postcard",
        sector: "inmobiliaria",
        price: 0.00,
        image: "sectores/inmobiliaria imagenes/unnamed-1.jpg",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria.",
        faceCount: 0
    },
    {
        id: 74,
        title: "Maniquis Bailarines",
        type: "video",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda videos/PixVerse_V5_Image_Text_360P_hacer_que_estos_ma.mp4",
        description: "Vídeo navideño exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 75,
        title: "Diseño 24",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-24.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 76,
        title: "Diseño 23",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-23.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 77,
        title: "Diseño 10",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-10.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 78,
        title: "Diseño 11",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-11.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 79,
        title: "Diseño 13",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-13.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 80,
        title: "Diseño 12",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-12.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 81,
        title: "Coponieve",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/coponieve.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 82,
        title: "Diseño 4",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-4.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 83,
        title: "Diseño 5",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-5.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 84,
        title: "Diseño 7",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-7.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 85,
        title: "Belennevera",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/belennevera.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 86,
        title: "Diseño 6",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-6.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 87,
        title: "Diseño 3",
        type: "postcard",
        sector: "negocios",
        price: 0.00,
        image: "sectores/negocios imagenes/unnamed-3.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios.",
        faceCount: 0
    },
    {
        id: 88,
        title: "Chicamaquillajenav",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/chicamaquillajenav.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 89,
        title: "Paloscera",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/paloscera.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 90,
        title: "Chicamaquillajenavidad",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/chicamaquillajenavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 91,
        title: "Piernascera",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/piernascera.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 92,
        title: "Lenguaboca",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/lenguaboca.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 93,
        title: "Nieveestetica2",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/nieveestetica2.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 94,
        title: "Masaje",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/masaje.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 95,
        title: "UñAsnavidad",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/uñasnavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 96,
        title: "Esteticanav2",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/esteticanav2.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 97,
        title: "Esteticanav2 Jpg",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/esteticanav2.jpg.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 98,
        title: "Arbolcera",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/arbolcera.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 99,
        title: "Chicabellezacabello",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/chicabellezacabello.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 100,
        title: "Santaclauscita",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/santaclauscita.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 101,
        title: "Mascarillaesteticanav2 Jpg",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/mascarillaesteticanav2.jpg.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 102,
        title: "Ceranav",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/ceranav.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 103,
        title: "Nieveestetica",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/nieveestetica.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 104,
        title: "Piernasnavidad",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/piernasnavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 105,
        title: "Brazocera",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/brazocera.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 106,
        title: "Cejasnav",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/cejasnav.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 107,
        title: "Luposuccionnav",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/luposuccionnav.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 108,
        title: "UñAsadvientonavidad",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/uñasadvientonavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 109,
        title: "Esteticaarbol",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica imagenes/esteticaarbol.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 110,
        title: "Pixverse V5 5 Image Text 360P Este Medico Bail",
        type: "video",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud videos/PixVerse_V5.5_Image_Text_360P_este_medico_bail.mp4",
        description: "Vídeo navideño exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 111,
        title: "Adn Arbrol",
        type: "video",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud videos/adn-arbrol.mp4",
        description: "Vídeo navideño exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 112,
        title: "Restaurantenavidad4",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/restaurantenavidad4.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 113,
        title: "Gemini Generated Image Syzyc0Syzyc0Syzy",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/Gemini_Generated_Image_syzyc0syzyc0syzy.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 114,
        title: "Cafeteria",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/cafeteria.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 115,
        title: "Restaurantenavidad5",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/restaurantenavidad5.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 116,
        title: "Cafenavidad",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/cafenavidad.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 117,
        title: "Restaurantenavidad2",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/restaurantenavidad2.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 118,
        title: "Pizza 1",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/pizza 1.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 119,
        title: "Marisco",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/marisco.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 120,
        title: "Restaurantenavidad3",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/restaurantenavidad3.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 121,
        title: "Restaurantenavidad1",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/restaurantenavidad1.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 122,
        title: "Restauracion",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/restauracion.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 123,
        title: "Pizza1",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/pizza1.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 124,
        title: "Cage2",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/cage2.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 125,
        title: "Pizzanavidad2Png",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/Pizzanavidad2png.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 126,
        title: "Diseño 1",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/unnamed-1 copia.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 127,
        title: "Bombones1",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/bombones1.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 128,
        title: "Dulces",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/dulces.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 129,
        title: "Pavo Navidad",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/pavo navidad.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 130,
        title: "Mandarinasarbol",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/mandarinasarbol.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 131,
        title: "Platonavidad",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/platonavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 132,
        title: "Pizza3",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/pizza3.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 133,
        title: "Pizza2",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/pizza2.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 134,
        title: "Pasta 2T",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/pasta 2t.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 135,
        title: "Cafe3",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/cafe3.jpeg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 136,
        title: "Diseño Restauracion 136",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 137,
        title: "Arbolfrutasantaclaus",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/arbolfrutasantaclaus.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 138,
        title: "Santaclaus Cafe",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/santaclaus cafe.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 139,
        title: "Platopasta",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/platopasta.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 140,
        title: "Pasta",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/pasta.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 141,
        title: "Pizza 2",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/pizza-2.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 142,
        title: "Santaclaus Volando",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/santaclaus volando.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 143,
        title: "Diseño 1",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/unnamed-1.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 144,
        title: "Restaurantepasta Navidad",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/restaurantepasta-navidad.png",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 145,
        title: "Pastaerizo",
        type: "postcard",
        sector: "restauracion",
        price: 0.00,
        image: "sectores/restauracionimagenes/pastaerizo.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion.",
        faceCount: 0
    },
    {
        id: 146,
        title: "Pixverse V5 5 Image Text 360P Un Plano De Una",
        type: "video",
        sector: "construccion",
        price: 0.00,
        image: "sectores/contrucion videos/PixVerse_V5.5_Image_Text_360P_un_plano_de_una_.mp4",
        description: "Vídeo navideño exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 147,
        title: "Pixverse V5 5 Image Text 360P Este Arbol De Na",
        type: "video",
        sector: "inmobiliaria",
        price: 0.00,
        image: "sectores/inmobiliaria videos/PixVerse_V5.5_Image_Text_360P_este_arbol_de_na.mp4",
        description: "Vídeo navideño exclusiva para el sector inmobiliaria.",
        faceCount: 0
    },
    {
        id: 148,
        title: "Diseño 8",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed-8.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 149,
        title: "Diseño 9",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed-9.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 150,
        title: "Arbolcarretera",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/arbolcarretera.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 151,
        title: "Cochebola",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/cochebola.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 152,
        title: "Diseño 10",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed-10.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 153,
        title: "Diseño Automocion 153",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed copia.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 154,
        title: "Automocionnavidad1",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/automocionnavidad1.png",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 155,
        title: "Automocionnavidad3",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/automocionnavidad3.png",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 156,
        title: "Automocionnavidad2",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/automocionnavidad2.png",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 157,
        title: "Automocionnavidad6",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/automocionnavidad6.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 158,
        title: "Diseño Automocion 158",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 159,
        title: "Automocionnavidad7",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/automocionnavidad7.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 160,
        title: "Automocionnavidad5",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/automocionnavidad5.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 161,
        title: "Gemini Generated Image Gmpv6Ygmpv6Ygmpv",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/Gemini_Generated_Image_gmpv6ygmpv6ygmpv.png",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 162,
        title: "Automocionnavidad4",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/automocionnavidad4.png",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 163,
        title: "Diseño 4",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed-4.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 164,
        title: "Diseño 5",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed-5.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 165,
        title: "Diseño 7",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed-7.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 166,
        title: "Carretera Arbol",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/carretera arbol.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 167,
        title: "Diseño 6",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed-6.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 168,
        title: "Cocheregalo",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/cocheregalo.png",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 169,
        title: "Diseño 3",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed-3.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 170,
        title: "Diseño 1",
        type: "postcard",
        sector: "automocion",
        price: 0.00,
        image: "sectores/automocion imagenes/unnamed-1.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion.",
        faceCount: 0
    },
    {
        id: 171,
        title: "Lapiceronavidad",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/lapiceronavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 172,
        title: "Ventanaescuela",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/ventanaescuela.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 173,
        title: "Santaclausparque",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/santaclausparque.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 174,
        title: "Estrellaescuela",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/estrellaescuela.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 175,
        title: "EstrellaniñOs",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/estrellaniños.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 176,
        title: "SantaclausniñOs",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/santaclausniños.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 177,
        title: "Formacion",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/formacion.png",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 178,
        title: "Formacionaulapizarra",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/formacionaulapizarra.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 179,
        title: "Librosescuela",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/librosescuela.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 180,
        title: "Esculaexterior",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/esculaexterior.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 181,
        title: "Santa Claus Professor2",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/santa claus professor2.png",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 182,
        title: "Pizarranavidad",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/pizarranavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 183,
        title: "Formacionaula",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/formacionaula.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 184,
        title: "Santa Claus Professor",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/santa claus professor.png",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 185,
        title: "Santaclausaula",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/santaclausaula.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 186,
        title: "Formacionchico",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/formacionchico.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 187,
        title: "Pizarraescuela",
        type: "postcard",
        sector: "formacion",
        price: 0.00,
        image: "sectores/formacion imagenes/pizarraescuela.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion.",
        faceCount: 0
    },
    {
        id: 188,
        title: "Mandarinaarbre",
        type: "video",
        sector: "alimentacion",
        price: 0.00,
        image: "sectores/alimentacion video/mandarinaarbre.mp4",
        description: "Vídeo navideño exclusiva para el sector alimentacion.",
        faceCount: 0
    },
    {
        id: 189,
        title: "Arbolherramientas Ferreria",
        type: "postcard",
        sector: "ferreteria",
        price: 0.00,
        image: "sectores/ferreteria imagenes/arbolherramientas ferreria.jpg",
        description: "Felicitación navideña exclusiva para el sector ferreteria.",
        faceCount: 0
    },
    {
        id: 190,
        title: "Pastanavidad",
        type: "postcard",
        sector: "particulares",
        price: 0.00,
        image: "sectores/particular imagenes/pastanavidad.png",
        description: "Felicitación navideña exclusiva para el sector particulares.",
        faceCount: 0
    },
    {
        id: 191,
        title: "Diseño Particulares 191",
        type: "postcard",
        sector: "particulares",
        price: 0.00,
        image: "sectores/particular imagenes/unnamed copia.jpg",
        description: "Felicitación navideña exclusiva para el sector particulares.",
        faceCount: 0
    },
    {
        id: 192,
        title: "Diseño Particulares 192",
        type: "postcard",
        sector: "particulares",
        price: 0.00,
        image: "sectores/particular imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector particulares.",
        faceCount: 0
    },
    {
        id: 193,
        title: "Estrellafugaz",
        type: "postcard",
        sector: "particulares",
        price: 0.00,
        image: "sectores/particular imagenes/estrellafugaz.jpg",
        description: "Felicitación navideña exclusiva para el sector particulares.",
        faceCount: 0
    },
    {
        id: 194,
        title: "SantaclausyniñOs",
        type: "postcard",
        sector: "particulares",
        price: 0.00,
        image: "sectores/particular imagenes/santaclausyniños.jpg",
        description: "Felicitación navideña exclusiva para el sector particulares.",
        faceCount: 0
    },
    {
        id: 195,
        title: "Diseño  2",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/unnamed copia 2.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 196,
        title: "Diseño  3",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/unnamed copia 3.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 197,
        title: "Regalossalud",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/regalossalud.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 198,
        title: "Diseño Salud 198",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/unnamed copia.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 199,
        title: "Diseño Salud 199",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 200,
        title: "Adnsalud",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/adnsalud.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 201,
        title: "Adnhogar",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/adnhogar.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 202,
        title: "Diseño 4",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/unnamed-4.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 203,
        title: "Diseño 5",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/unnamed-5.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 204,
        title: "Diseño 2",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/unnamed-2.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 205,
        title: "Diseño 3",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/unnamed-3.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 206,
        title: "Saludmedico",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/saludmedico.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 207,
        title: "Diseño 1",
        type: "postcard",
        sector: "salud",
        price: 0.00,
        image: "sectores/salud imagenes/unnamed-1.jpg",
        description: "Felicitación navideña exclusiva para el sector salud.",
        faceCount: 0
    },
    {
        id: 208,
        title: "Santaclausgimnasio",
        type: "postcard",
        sector: "deporte",
        price: 0.00,
        image: "sectores/deporte imagenes/santaclausgimnasio.jpg",
        description: "Felicitación navideña exclusiva para el sector deporte.",
        faceCount: 0
    },
    {
        id: 209,
        title: "Diseño Deporte 209",
        type: "postcard",
        sector: "deporte",
        price: 0.00,
        image: "sectores/deporte imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector deporte.",
        faceCount: 0
    },
    {
        id: 210,
        title: "Gimansio Santa Claus",
        type: "postcard",
        sector: "deporte",
        price: 0.00,
        image: "sectores/deporte imagenes/gimansio Santa Claus .jpg",
        description: "Felicitación navideña exclusiva para el sector deporte.",
        faceCount: 0
    },
    {
        id: 211,
        title: "Vestido Dulce",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Vestido Dulce.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 212,
        title: "Arbol Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Arbol regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 213,
        title: "Vestido Golosinas",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Vestido golosinas.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 214,
        title: "Moda",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/moda.png",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 215,
        title: "Regalo Pareja",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Regalo Pareja.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 2
    },
    {
        id: 216,
        title: "Vestido Roscon",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Vestido Roscon.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 217,
        title: "4 Personas Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/4 Personas Regalo.png",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 4
    },
    {
        id: 218,
        title: "Dulce Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/dulce regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 219,
        title: "5 Personas Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/5 Personas Regalo.png",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 5
    },
    {
        id: 220,
        title: "Chicos Chicas Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Chicos Chicas Regalo.png",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 221,
        title: "Tres Amigos Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Tres amigos regalo.png",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 222,
        title: "Vestido Chocolate NiñO",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/vestido chocolate Niño.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 223,
        title: "Vestido Arbol Chico",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Vestido Arbol Chico.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 224,
        title: "Chocolate Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Chocolate regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 225,
        title: "Turron Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Turron regalo .jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 226,
        title: "Turron Chocolate Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Turron Chocolate Regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 227,
        title: "Roscon Regalo",
        type: "postcard",
        sector: "moda",
        price: 0.00,
        image: "sectores/moda imagenes/Roscon regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector moda.",
        faceCount: 1
    },
    {
        id: 228,
        title: "ChicamoñO",
        type: "video",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria videos/chicamoño.mp4",
        description: "Vídeo navideño exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 229,
        title: "ChicamoñO3",
        type: "video",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria videos/chicamoño3.mp4",
        description: "Vídeo navideño exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 230,
        title: "ChicamoñO2",
        type: "video",
        sector: "peluqueria",
        price: 0.00,
        image: "sectores/peluqueria videos/chicamoño2.mp4",
        description: "Vídeo navideño exclusiva para el sector peluqueria.",
        faceCount: 0
    },
    {
        id: 231,
        title: "Pixverse V5 5 Transition 360P Imagen En Vertic",
        type: "video",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica videos/PixVerse_V5.5_Transition_360P_imagen_en_vertic.mp4",
        description: "Vídeo navideño exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 232,
        title: "Mujerlengua",
        type: "postcard",
        sector: "estetica",
        price: 0.00,
        image: "sectores/estetica videos/mujerlengua.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica.",
        faceCount: 0
    },
    {
        id: 233,
        title: "Pixverse V5 Image Text 360P Un Paquete De Rega",
        type: "video",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio videos/PixVerse_V5_Image_Text_360P_un_paquete_de_rega.mp4",
        description: "Vídeo navideño exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 234,
        title: "Comercio1 Jpg",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio1.jpg.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 235,
        title: "Comercionavidad",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercionavidad.png",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 236,
        title: "Comercio9",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio9.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 237,
        title: "Comercio",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio.png",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 238,
        title: "Comercio8",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio8.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 239,
        title: "Comercioedificioregalo",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercioedificioregalo.webp",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 240,
        title: "Comercio14",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio14.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 241,
        title: "Comercio5",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio5.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 242,
        title: "Comercio4",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio4.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 243,
        title: "Comercionavidad 5",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercionavidad.5.png",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 244,
        title: "Comercionavidad Png3",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercionavidad.png3.png",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 245,
        title: "Comercio6",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio6.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 246,
        title: "Comercionavidaregalos",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercionavidaregalos.webp",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 247,
        title: "Comercio7",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio7.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 248,
        title: "Comercionavidad Png2",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercionavidad.png2.png",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 249,
        title: "Comercio12",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio12.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 250,
        title: "Comercio3",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio3.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 251,
        title: "Comercio2",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio2.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 252,
        title: "Comercio13",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio13.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 253,
        title: "Comercio11",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio11.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 254,
        title: "Comercio1",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio1.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 255,
        title: "Comercio10",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercio10.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 256,
        title: "Comercionavidad Png4",
        type: "postcard",
        sector: "comercio",
        price: 0.00,
        image: "sectores/comercio imagenes/comercionavidad.png4.png",
        description: "Felicitación navideña exclusiva para el sector comercio.",
        faceCount: 0
    },
    {
        id: 257,
        title: "Construccioferreteria",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/construccioferreteria.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 258,
        title: "Planoestrella",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/planoestrella.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 259,
        title: "Construccio Grua",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/construccio-grua.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 260,
        title: "Boladenavida Contruccion",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/boladenavida-contruccion.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 261,
        title: "Edificiosantaclaus",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/edificiosantaclaus.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 262,
        title: "Construccion Navidad Arbol",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/construccion navidad-arbol.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 263,
        title: "Construccion Navidad",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/construccion navidad.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 264,
        title: "Arbolgruas",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/arbolgruas.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 265,
        title: "Planonavidad",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/planonavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 266,
        title: "Diseño Construccion 266",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 267,
        title: "Construccion1",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/construccion1.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 268,
        title: "Diseño 17",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/unnamed-17.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 269,
        title: "Construcciopastes",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/construcciopastes.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 270,
        title: "Diseño 2",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/unnamed-2.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 271,
        title: "ConstruccionmuñEcos",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/construccionmuñecos.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 272,
        title: "Construccioferreteria",
        type: "postcard",
        sector: "construccion",
        price: 0.00,
        image: "sectores/construccion imagenes/construccioferreteria copia.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion.",
        faceCount: 0
    },
    {
        id: 273,
        title: "Vestido Dulce",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Vestido Dulce.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 274,
        title: "Arbol Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Arbol regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 275,
        title: "Vestido Golosinas",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Vestido golosinas.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 276,
        title: "Regalo Pareja",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Regalo Pareja.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 2
    },
    {
        id: 277,
        title: "Vestido Roscon",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Vestido Roscon.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 278,
        title: "4 Personas Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/4 Personas Regalo.png",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 4
    },
    {
        id: 279,
        title: "Dulce Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/dulce regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 280,
        title: "5 Personas Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/5 Personas Regalo.png",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 5
    },
    {
        id: 281,
        title: "Chicos Chicas Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Chicos Chicas Regalo.png",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 282,
        title: "Tres Amigos Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Tres amigos regalo.png",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 283,
        title: "Peluquerianavidad",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/peluquerianavidad.png",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 284,
        title: "Vestido Chocolate NiñO",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/vestido chocolate Niño.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 285,
        title: "Vestido Arbol Chico",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Vestido Arbol Chico.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 286,
        title: "Chocolate Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Chocolate regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 287,
        title: "Turron Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Turron regalo .jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 288,
        title: "Turron Chocolate Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Turron Chocolate Regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 289,
        title: "Dall·E 2024 11 21 07 52 49   A Highly Realistic Portrait Of A Young Woman With Her Hair Styled Into A High Bun Shaped Like A Christmas Tree  The Bun Features Intricate Details Of",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/DALL·E 2024-11-21 07.52.49 - A highly realistic portrait of a young woman with her hair styled into a high bun shaped like a Christmas tree. The bun features intricate details of .webp",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
    {
        id: 290,
        title: "Roscon Regalo",
        type: "postcard",
        sector: "faceswap_special",
        price: 0.00,
        image: "canvia tu cara/Roscon regalo.jpg",
        description: "Felicitación navideña exclusiva para el sector faceswap_special.",
        faceCount: 1
    },
];
