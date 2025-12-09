const PRODUCTS = [
    {
        id: 1,
        title: "Bombillanavidad",
        type: "postcard",
        sector: "industria",
        price: 15.00,
        image: "sectores/industriales/bombillanavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector industria."
    },
    {
        id: 2,
        title: "Diseño 9",
        type: "postcard",
        sector: "industria",
        price: 15.00,
        image: "sectores/industriales/unnamed-9.jpg",
        description: "Felicitación navideña exclusiva para el sector industria."
    },
    {
        id: 3,
        title: "Diseño 22",
        type: "postcard",
        sector: "industria",
        price: 15.00,
        image: "sectores/industriales/unnamed-22.jpg",
        description: "Felicitación navideña exclusiva para el sector industria."
    },
    {
        id: 4,
        title: "Diseño 20",
        type: "postcard",
        sector: "industria",
        price: 15.00,
        image: "sectores/industriales/unnamed-20.jpg",
        description: "Felicitación navideña exclusiva para el sector industria."
    },
    {
        id: 5,
        title: "Diseño 16",
        type: "postcard",
        sector: "industria",
        price: 15.00,
        image: "sectores/industriales/unnamed-16.jpg",
        description: "Felicitación navideña exclusiva para el sector industria."
    },
    {
        id: 6,
        title: "Diseño 15",
        type: "postcard",
        sector: "limpieza",
        price: 15.00,
        image: "sectores/limpieza imagenes/unnamed-15.jpg",
        description: "Felicitación navideña exclusiva para el sector limpieza."
    },
    {
        id: 7,
        title: "Alimentacion",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/alimentacion.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 8,
        title: "Frutasnavidad",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/frutasnavidad.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 9,
        title: "Frutaarbo2",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/frutaarbo2.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 10,
        title: "Mandarinasantaclaus",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/mandarinasantaclaus.jpg",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 11,
        title: "Peranavidad2",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/peranavidad2.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 12,
        title: "Peranavidad1",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/peranavidad1.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 13,
        title: "Fruita 3",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/fruita-3.webp",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 14,
        title: "Santa Clausfruta",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/santa clausfruta.webp",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 15,
        title: "Estrellafruta",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/estrellafruta.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 16,
        title: "Arbolfruta",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/arbolfruta.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 17,
        title: "Manzana Navidad",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/manzana-navidad.webp",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 18,
        title: "Pavosantaclaus",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/pavosantaclaus.jpg",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 19,
        title: "Arbolfruta Png",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/arbolfruta.png.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 20,
        title: "ManzanamontañA",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/manzanamontaña.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 21,
        title: "Frutasnavidad2",
        type: "postcard",
        sector: "alimentacion",
        price: 15.00,
        image: "sectores/alimentacionimagenes/frutasnavidad2.png",
        description: "Felicitación navideña exclusiva para el sector alimentacion."
    },
    {
        id: 22,
        title: "Peluquerianubes",
        type: "postcard",
        sector: "peluqueria",
        price: 15.00,
        image: "sectores/peluqueria imagenes/peluquerianubes.jpg",
        description: "Felicitación navideña exclusiva para el sector peluqueria."
    },
    {
        id: 23,
        title: "Peluqueraarbol",
        type: "postcard",
        sector: "peluqueria",
        price: 15.00,
        image: "sectores/peluqueria imagenes/peluqueraarbol.jpg",
        description: "Felicitación navideña exclusiva para el sector peluqueria."
    },
    {
        id: 24,
        title: "Peluquerianavidad",
        type: "postcard",
        sector: "peluqueria",
        price: 15.00,
        image: "sectores/peluqueria imagenes/peluquerianavidad.png",
        description: "Felicitación navideña exclusiva para el sector peluqueria."
    },
    {
        id: 25,
        title: "Peluquerianavidad2",
        type: "postcard",
        sector: "peluqueria",
        price: 15.00,
        image: "sectores/peluqueria imagenes/peluquerianavidad2.png",
        description: "Felicitación navideña exclusiva para el sector peluqueria."
    },
    {
        id: 26,
        title: "PeluqueriamuñEca",
        type: "postcard",
        sector: "peluqueria",
        price: 15.00,
        image: "sectores/peluqueria imagenes/peluqueriamuñeca.jpg",
        description: "Felicitación navideña exclusiva para el sector peluqueria."
    },
    {
        id: 27,
        title: "Dall·E 2024 11 21 07 52 49   A Highly Realistic Portrait Of A Young Woman With Her Hair Styled Into A High Bun Shaped Like A Christmas Tree  The Bun Features Intricate Details Of",
        type: "postcard",
        sector: "peluqueria",
        price: 15.00,
        image: "sectores/peluqueria imagenes/DALL·E 2024-11-21 07.52.49 - A highly realistic portrait of a young woman with her hair styled into a high bun shaped like a Christmas tree. The bun features intricate details of .webp",
        description: "Felicitación navideña exclusiva para el sector peluqueria."
    },
    {
        id: 28,
        title: "Peinearbol",
        type: "postcard",
        sector: "peluqueria",
        price: 15.00,
        image: "sectores/peluqueria imagenes/peinearbol.png",
        description: "Felicitación navideña exclusiva para el sector peluqueria."
    },
    {
        id: 29,
        title: "Sagradafamilia",
        type: "postcard",
        sector: "servicios",
        price: 15.00,
        image: "sectores/ciudades imagenes/sagradafamilia.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios."
    },
    {
        id: 30,
        title: "Barcelonasantaclaus",
        type: "postcard",
        sector: "servicios",
        price: 15.00,
        image: "sectores/ciudades imagenes/barcelonasantaclaus.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios."
    },
    {
        id: 31,
        title: "Lleida Santa Claus",
        type: "postcard",
        sector: "servicios",
        price: 15.00,
        image: "sectores/ciudades imagenes/lleida santa claus.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios."
    },
    {
        id: 32,
        title: "Barcelona Santa Claus",
        type: "postcard",
        sector: "servicios",
        price: 15.00,
        image: "sectores/ciudades imagenes/barcelona santa claus.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios."
    },
    {
        id: 33,
        title: "Lleidapistahielo",
        type: "postcard",
        sector: "servicios",
        price: 15.00,
        image: "sectores/ciudades imagenes/lleidapistahielo.jpg",
        description: "Felicitación navideña exclusiva para el sector servicios."
    },
    {
        id: 34,
        title: "Edificioluces",
        type: "postcard",
        sector: "inmobiliaria",
        price: 15.00,
        image: "sectores/inmobiliaria imagenes/edificioluces.webp",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria."
    },
    {
        id: 35,
        title: "Inmobiliarianavidad",
        type: "postcard",
        sector: "inmobiliaria",
        price: 15.00,
        image: "sectores/inmobiliaria imagenes/inmobiliarianavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria."
    },
    {
        id: 36,
        title: "Edificioarbol",
        type: "postcard",
        sector: "inmobiliaria",
        price: 15.00,
        image: "sectores/inmobiliaria imagenes/edificioarbol.png",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria."
    },
    {
        id: 37,
        title: "Ventananavidad",
        type: "postcard",
        sector: "inmobiliaria",
        price: 15.00,
        image: "sectores/inmobiliaria imagenes/ventananavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria."
    },
    {
        id: 38,
        title: "Arbolinmobiliaria",
        type: "postcard",
        sector: "inmobiliaria",
        price: 15.00,
        image: "sectores/inmobiliaria imagenes/arbolinmobiliaria.png",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria."
    },
    {
        id: 39,
        title: "Regalocasa",
        type: "postcard",
        sector: "inmobiliaria",
        price: 15.00,
        image: "sectores/inmobiliaria imagenes/regalocasa.jpg",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria."
    },
    {
        id: 40,
        title: "Ciudadestrella",
        type: "postcard",
        sector: "inmobiliaria",
        price: 15.00,
        image: "sectores/inmobiliaria imagenes/ciudadestrella.png",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria."
    },
    {
        id: 41,
        title: "Diseño 1",
        type: "postcard",
        sector: "inmobiliaria",
        price: 15.00,
        image: "sectores/inmobiliaria imagenes/unnamed-1.jpg",
        description: "Felicitación navideña exclusiva para el sector inmobiliaria."
    },
    {
        id: 42,
        title: "Diseño 24",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-24.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 43,
        title: "Diseño 23",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-23.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 44,
        title: "Diseño 10",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-10.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 45,
        title: "Diseño 11",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-11.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 46,
        title: "Diseño 13",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-13.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 47,
        title: "Diseño 12",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-12.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 48,
        title: "Coponieve",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/coponieve.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 49,
        title: "Diseño 4",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-4.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 50,
        title: "Diseño 5",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-5.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 51,
        title: "Diseño 7",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-7.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 52,
        title: "Belennevera",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/belennevera.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 53,
        title: "Diseño 6",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-6.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 54,
        title: "Diseño 3",
        type: "postcard",
        sector: "negocios",
        price: 15.00,
        image: "sectores/negocios imagenes/unnamed-3.jpg",
        description: "Felicitación navideña exclusiva para el sector negocios."
    },
    {
        id: 55,
        title: "Chicamaquillajenav",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/chicamaquillajenav.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 56,
        title: "Paloscera",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/paloscera.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 57,
        title: "Chicamaquillajenavidad",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/chicamaquillajenavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 58,
        title: "Piernascera",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/piernascera.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 59,
        title: "Lenguaboca",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/lenguaboca.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 60,
        title: "Nieveestetica2",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/nieveestetica2.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 61,
        title: "Masaje",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/masaje.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 62,
        title: "UñAsnavidad",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/uñasnavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 63,
        title: "Esteticanav2",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/esteticanav2.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 64,
        title: "Esteticanav2 Jpg",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/esteticanav2.jpg.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 65,
        title: "Arbolcera",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/arbolcera.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 66,
        title: "Chicabellezacabello",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/chicabellezacabello.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 67,
        title: "Santaclauscita",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/santaclauscita.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 68,
        title: "Mascarillaesteticanav2 Jpg",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/mascarillaesteticanav2.jpg.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 69,
        title: "Ceranav",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/ceranav.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 70,
        title: "Nieveestetica",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/nieveestetica.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 71,
        title: "Piernasnavidad",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/piernasnavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 72,
        title: "Brazocera",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/brazocera.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 73,
        title: "Cejasnav",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/cejasnav.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 74,
        title: "Luposuccionnav",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/luposuccionnav.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 75,
        title: "UñAsadvientonavidad",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/uñasadvientonavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 76,
        title: "Esteticaarbol",
        type: "postcard",
        sector: "estetica",
        price: 15.00,
        image: "sectores/estetica imagenes/esteticaarbol.jpg",
        description: "Felicitación navideña exclusiva para el sector estetica."
    },
    {
        id: 77,
        title: "Restaurantenavidad4",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/restaurantenavidad4.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 78,
        title: "Gemini Generated Image Syzyc0Syzyc0Syzy",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/Gemini_Generated_Image_syzyc0syzyc0syzy.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 79,
        title: "Cafeteria",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/cafeteria.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 80,
        title: "Restaurantenavidad5",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/restaurantenavidad5.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 81,
        title: "Cafenavidad",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/cafenavidad.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 82,
        title: "Restaurantenavidad2",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/restaurantenavidad2.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 83,
        title: "Pizza 1",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/pizza 1.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 84,
        title: "Marisco",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/marisco.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 85,
        title: "Restaurantenavidad3",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/restaurantenavidad3.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 86,
        title: "Restaurantenavidad1",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/restaurantenavidad1.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 87,
        title: "Restauracion",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/restauracion.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 88,
        title: "Pizza1",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/pizza1.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 89,
        title: "Cage2",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/cage2.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 90,
        title: "Pizzanavidad2Png",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/Pizzanavidad2png.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 91,
        title: "Diseño 1",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/unnamed-1 copia.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 92,
        title: "Bombones1",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/bombones1.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 93,
        title: "Dulces",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/dulces.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 94,
        title: "Pavo Navidad",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/pavo navidad.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 95,
        title: "Mandarinasarbol",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/mandarinasarbol.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 96,
        title: "Platonavidad",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/platonavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 97,
        title: "Pizza3",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/pizza3.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 98,
        title: "Pizza2",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/pizza2.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 99,
        title: "Pasta 2T",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/pasta 2t.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 100,
        title: "Cafe3",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/cafe3.jpeg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 101,
        title: "Diseño Restauracion 101",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 102,
        title: "Arbolfrutasantaclaus",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/arbolfrutasantaclaus.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 103,
        title: "Santaclaus Cafe",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/santaclaus cafe.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 104,
        title: "Platopasta",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/platopasta.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 105,
        title: "Pasta",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/pasta.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 106,
        title: "Pizza 2",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/pizza-2.webp",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 107,
        title: "Santaclaus Volando",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/santaclaus volando.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 108,
        title: "Diseño 1",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/unnamed-1.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 109,
        title: "Restaurantepasta Navidad",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/restaurantepasta-navidad.png",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 110,
        title: "Pastaerizo",
        type: "postcard",
        sector: "restauracion",
        price: 15.00,
        image: "sectores/restauracionimagenes/pastaerizo.jpg",
        description: "Felicitación navideña exclusiva para el sector restauracion."
    },
    {
        id: 111,
        title: "Diseño 8",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed-8.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 112,
        title: "Diseño 9",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed-9.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 113,
        title: "Cochebola",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/cochebola.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 114,
        title: "Diseño 10",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed-10.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 115,
        title: "Diseño Automocion 115",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed copia.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 116,
        title: "Automocionnavidad1",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/automocionnavidad1.png",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 117,
        title: "Automocionnavidad3",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/automocionnavidad3.png",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 118,
        title: "Automocionnavidad2",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/automocionnavidad2.png",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 119,
        title: "Automocionnavidad6",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/automocionnavidad6.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 120,
        title: "Diseño Automocion 120",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 121,
        title: "Automocionnavidad7",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/automocionnavidad7.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 122,
        title: "Automocionnavidad5",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/automocionnavidad5.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 123,
        title: "Gemini Generated Image Gmpv6Ygmpv6Ygmpv",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/Gemini_Generated_Image_gmpv6ygmpv6ygmpv.png",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 124,
        title: "Automocionnavidad4",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/automocionnavidad4.png",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 125,
        title: "Diseño 4",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed-4.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 126,
        title: "Diseño 5",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed-5.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 127,
        title: "Diseño 7",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed-7.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 128,
        title: "Diseño 6",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed-6.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 129,
        title: "Cocheregalo",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/cocheregalo.png",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 130,
        title: "Diseño 3",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed-3.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 131,
        title: "Diseño 1",
        type: "postcard",
        sector: "automocion",
        price: 15.00,
        image: "sectores/automocion imagenes/unnamed-1.jpg",
        description: "Felicitación navideña exclusiva para el sector automocion."
    },
    {
        id: 132,
        title: "Lapiceronavidad",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/lapiceronavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 133,
        title: "Ventanaescuela",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/ventanaescuela.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 134,
        title: "Santaclausparque",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/santaclausparque.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 135,
        title: "Estrellaescuela",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/estrellaescuela.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 136,
        title: "EstrellaniñOs",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/estrellaniños.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 137,
        title: "SantaclausniñOs",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/santaclausniños.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 138,
        title: "Formacion",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/formacion.png",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 139,
        title: "Formacionaulapizarra",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/formacionaulapizarra.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 140,
        title: "Librosescuela",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/librosescuela.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 141,
        title: "Esculaexterior",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/esculaexterior.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 142,
        title: "Santa Claus Professor2",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/santa claus professor2.png",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 143,
        title: "Pizarranavidad",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/pizarranavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 144,
        title: "Formacionaula",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/formacionaula.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 145,
        title: "Santa Claus Professor",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/santa claus professor.png",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 146,
        title: "Santaclausaula",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/santaclausaula.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 147,
        title: "Formacionchico",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/formacionchico.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 148,
        title: "Pizarraescuela",
        type: "postcard",
        sector: "formacion",
        price: 15.00,
        image: "sectores/formacion imagenes/pizarraescuela.jpg",
        description: "Felicitación navideña exclusiva para el sector formacion."
    },
    {
        id: 149,
        title: "Arbolherramientas Ferreria",
        type: "postcard",
        sector: "ferreteria",
        price: 15.00,
        image: "sectores/ferreteria imagenes/arbolherramientas ferreria.jpg",
        description: "Felicitación navideña exclusiva para el sector ferreteria."
    },
    {
        id: 150,
        title: "Pastanavidad",
        type: "postcard",
        sector: "particulares",
        price: 15.00,
        image: "sectores/particular imagenes/pastanavidad.png",
        description: "Felicitación navideña exclusiva para el sector particulares."
    },
    {
        id: 151,
        title: "Diseño Particulares 151",
        type: "postcard",
        sector: "particulares",
        price: 15.00,
        image: "sectores/particular imagenes/unnamed copia.jpg",
        description: "Felicitación navideña exclusiva para el sector particulares."
    },
    {
        id: 152,
        title: "Diseño Particulares 152",
        type: "postcard",
        sector: "particulares",
        price: 15.00,
        image: "sectores/particular imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector particulares."
    },
    {
        id: 153,
        title: "Estrellafugaz",
        type: "postcard",
        sector: "particulares",
        price: 15.00,
        image: "sectores/particular imagenes/estrellafugaz.jpg",
        description: "Felicitación navideña exclusiva para el sector particulares."
    },
    {
        id: 154,
        title: "SantaclausyniñOs",
        type: "postcard",
        sector: "particulares",
        price: 15.00,
        image: "sectores/particular imagenes/santaclausyniños.jpg",
        description: "Felicitación navideña exclusiva para el sector particulares."
    },
    {
        id: 155,
        title: "Diseño  2",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/unnamed copia 2.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 156,
        title: "Diseño  3",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/unnamed copia 3.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 157,
        title: "Regalossalud",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/regalossalud.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 158,
        title: "Diseño Salud 158",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/unnamed copia.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 159,
        title: "Diseño Salud 159",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 160,
        title: "Adnsalud",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/adnsalud.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 161,
        title: "Adnhogar",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/adnhogar.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 162,
        title: "Diseño 4",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/unnamed-4.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 163,
        title: "Diseño 5",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/unnamed-5.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 164,
        title: "Diseño 2",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/unnamed-2.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 165,
        title: "Diseño 3",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/unnamed-3.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 166,
        title: "Saludmedico",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/saludmedico.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 167,
        title: "Diseño 1",
        type: "postcard",
        sector: "salud",
        price: 15.00,
        image: "sectores/salud imagenes/unnamed-1.jpg",
        description: "Felicitación navideña exclusiva para el sector salud."
    },
    {
        id: 168,
        title: "Santaclausgimnasio",
        type: "postcard",
        sector: "deporte",
        price: 15.00,
        image: "sectores/deporte imagenes/santaclausgimnasio.jpg",
        description: "Felicitación navideña exclusiva para el sector deporte."
    },
    {
        id: 169,
        title: "Diseño Deporte 169",
        type: "postcard",
        sector: "deporte",
        price: 15.00,
        image: "sectores/deporte imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector deporte."
    },
    {
        id: 170,
        title: "Gimansio Santa Claus",
        type: "postcard",
        sector: "deporte",
        price: 15.00,
        image: "sectores/deporte imagenes/gimansio Santa Claus .jpg",
        description: "Felicitación navideña exclusiva para el sector deporte."
    },
    {
        id: 171,
        title: "Moda",
        type: "postcard",
        sector: "moda",
        price: 15.00,
        image: "sectores/moda imagenes/moda.png",
        description: "Felicitación navideña exclusiva para el sector moda."
    },
    {
        id: 172,
        title: "Comercio1 Jpg",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio1.jpg.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 173,
        title: "Comercionavidad",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercionavidad.png",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 174,
        title: "Comercio9",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio9.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 175,
        title: "Comercio",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio.png",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 176,
        title: "Comercio8",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio8.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 177,
        title: "Comercioedificioregalo",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercioedificioregalo.webp",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 178,
        title: "Comercio14",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio14.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 179,
        title: "Comercio5",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio5.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 180,
        title: "Comercio4",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio4.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 181,
        title: "Comercionavidad 5",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercionavidad.5.png",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 182,
        title: "Comercionavidad Png3",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercionavidad.png3.png",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 183,
        title: "Comercio6",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio6.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 184,
        title: "Comercionavidaregalos",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercionavidaregalos.webp",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 185,
        title: "Comercio7",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio7.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 186,
        title: "Comercionavidad Png2",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercionavidad.png2.png",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 187,
        title: "Comercio12",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio12.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 188,
        title: "Comercio3",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio3.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 189,
        title: "Comercio2",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio2.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 190,
        title: "Comercio13",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio13.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 191,
        title: "Comercio11",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio11.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 192,
        title: "Comercio1",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio1.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 193,
        title: "Comercio10",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercio10.jpg",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 194,
        title: "Comercionavidad Png4",
        type: "postcard",
        sector: "comercio",
        price: 15.00,
        image: "sectores/comercio imagenes/comercionavidad.png4.png",
        description: "Felicitación navideña exclusiva para el sector comercio."
    },
    {
        id: 195,
        title: "Construccioferreteria",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/construccioferreteria.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 196,
        title: "Planoestrella",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/planoestrella.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 197,
        title: "Construccio Grua",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/construccio-grua.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 198,
        title: "Boladenavida Contruccion",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/boladenavida-contruccion.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 199,
        title: "Edificiosantaclaus",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/edificiosantaclaus.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 200,
        title: "Construccion Navidad Arbol",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/construccion navidad-arbol.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 201,
        title: "Construccion Navidad",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/construccion navidad.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 202,
        title: "Arbolgruas",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/arbolgruas.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 203,
        title: "Planonavidad",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/planonavidad.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 204,
        title: "Diseño Construccion 204",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/unnamed.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 205,
        title: "Construccion1",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/construccion1.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 206,
        title: "Diseño 17",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/unnamed-17.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 207,
        title: "Construcciopastes",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/construcciopastes.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 208,
        title: "Diseño 2",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/unnamed-2.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 209,
        title: "ConstruccionmuñEcos",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/construccionmuñecos.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
    {
        id: 210,
        title: "Construccioferreteria",
        type: "postcard",
        sector: "construccion",
        price: 15.00,
        image: "sectores/construccion imagenes/construccioferreteria copia.jpg",
        description: "Felicitación navideña exclusiva para el sector construccion."
    },
];
