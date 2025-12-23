/* =========================
   PRODUCTOS MANUALES (1–20)
========================= */

const productos = [
    {
        nombre: "Producto 1",
        descripcion: "Descripción del producto",
        precio: 50,
        imagen: "../../assets/shine.jpeg"
    },
    {
        nombre: "Producto 2",
        descripcion: "Descripción del producto",
        precio: 75,
        imagen: "../../assets/shampoo.jpeg"
    },
    {
        nombre: "Producto 3",
        descripcion: "Descripción del producto",
        precio: 100,
        imagen: "../../assets/innove.jpeg"
    },
    {
        nombre: "Producto 4",
        descripcion: "Descripción del producto",
        precio: 120,
        imagen: "../../assets/shampoo2.jpeg"
    },
    {
        nombre: "Producto 5",
        descripcion: "Descripción del producto",
        precio: 235,
        imagen: "../../assets/acondicionador.jpeg"
    },
    {
        nombre: "Producto 6",
        descripcion: "Descripción del producto",
        precio: 150,
        imagen: "../../assets/Skala.jpeg"
    },
    {
        nombre: "Producto 7",
        descripcion: "Descripción del producto",
        precio: 180,
        imagen: "../../assets/rizos.jpeg"
    },
    {
        nombre: "Producto 8",
        descripcion: "Descripción del producto",
        precio: 200,
        imagen: "../../assets/protector.jpeg"
    },
    {
        nombre: "Producto 9",
        descripcion: "Descripción del producto",
        precio: 110,
        imagen: "../../assets/keratina.jpeg"
    },
    {
        nombre: "Producto 10",
        descripcion: "Descripción del producto",
        precio: 90,
        imagen: "../../assets/care.jpeg"
    },
    {
        nombre: "Producto 11",
        descripcion: "Descripción del producto",
        precio: 130,
        imagen: "../../assets/daimond.jpeg"
    },
    {
        nombre: "Producto 12",
        descripcion: "Descripción del producto",
        precio: 140,
        imagen: "../../assets/gel.jpeg"
    },
    {
        nombre: "Producto 13",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/cremapeinar.jpeg"
    },
    {
        nombre: "Producto 14",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/cremapeinar.jpeg"
    },
    {
        nombre: "Producto 15",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/cremapeinar.jpeg"
    },
    {
        nombre: "Producto 16",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/cremapeinar.jpeg"
    },
    {
        nombre: "Producto 17",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/cremapeinar.jpeg"
    },
    {
        nombre: "Producto 18",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/cremapeinar.jpeg"
    },
    {
        nombre: "Producto 19",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/cremapeinar.jpeg"
    },
    {
        nombre: "Producto 20",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/cremapeinar.jpeg"
    }
];

/* =========================
   DATOS AUTOMÁTICOS (21–193)
========================= */

const preciosExtra = [
    170, 185, 160, 200, 175, 190, 165, 210, 180, 155
];

const imagenesExtra = [
    "../../assets/p21.jpeg",
    "../../assets/p22.jpeg",
    "../../assets/p23.jpeg",
    "../../assets/p24.jpeg",
    "../../assets/p25.jpeg",
    "../../assets/p26.jpeg",
    "../../assets/p27.jpeg",
    "../../assets/p28.jpeg",
    "../../assets/p29.jpeg",
    "../../assets/p30.jpeg"
];

for (let i = 21; i <= 193; i++) {
    const index = (i - 21) % preciosExtra.length;

    productos.push({
        nombre: `Producto ${i}`,
        descripcion: "Descripción del producto",
        precio: preciosExtra[index],
        imagen: imagenesExtra[index] || "../../assets/default.jpeg"
    });
}


  // MOSTRAR + BUSCADOR


const contenedor = document.getElementById("productos");
const buscador = document.getElementById("buscador");

function mostrarProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        contenedor.innerHTML += `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <span class="precio">Q${producto.precio}</span>
            </div>
        `;
    });
}

// Mostrar todos al cargar
mostrarProductos(productos);

// Buscador por nombre
buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    const filtrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});
