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
        precio: 320,
        imagen: "../../assets/hydra.jpeg"
    },
    {
        nombre: "Producto 13",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/fluid.jpeg"
    },
    {
        nombre: "Producto 14",
        descripcion: "Descripción del producto",
        precio: 110,
        imagen: "../../assets/tratamiento.jpeg"
    },
    {
        nombre: "Producto 15",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/splite.jpeg"
    },
    {
        nombre: "Producto 16",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/defy.jpeg"
    },
    {
        nombre: "Producto 17",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/leave.jpeg"
    },
    {
        nombre: "Producto 18",
        descripcion: "Descripción del producto",
        precio: 75,
        imagen: "../../assets/peinarcrema.jpeg"
    },
    {
        nombre: "Producto 19",
        descripcion: "Descripción del producto",
        precio: 150,
        imagen: "../../assets/capilar.jpeg"
    },
    {
        nombre: "Producto 20",
        descripcion: "Descripción del producto",
        precio: 160,
        imagen: "../../assets/ins.jpeg"
    }
];

/* =========================
   DATOS AUTOMÁTICOS (21–193)
========================= */

const preciosExtra = [
    17, 20, 160, 200, 175, 190, 165, 210, 180, 110,
    150,150,400,40,89,35,75,200,110,110,400,23,188,35,
    24,56,23,56,78,65,78,34,150,150,23,75,65,45,20,
    67,23,67,4,89,170,23,45,678,150,300,220,194,78,120,
    200,220,175,226,282,175,175,196,220,210,175,
];

const imagenesExtra = [
    "../../assets/crono.jpeg",
    "../../assets/restru.jpeg",
    "../../assets/repair.jpeg",
    "../../assets/minuti.jpeg",
    "../../assets/argan.jpeg",
    "../../assets/acido.jpeg",
    "../../assets/insi2.jpeg",
    "../../assets/splash.jpeg",
    "../../assets/color.jpeg",
    "../../assets/cabellorizo.jpeg",
    "../../assets/definicion.jpeg",
    "../../assets/coat.jpeg",
    "../../assets/argan2.jpeg",
    "../../assets/oil.jpeg",
    "../../assets/blonde.jpeg",
    "../../assets/repair2.jpeg",
    "../../assets/locion.jpeg",
    "../../assets/abrillantador.jpeg",
    "../../assets/tomateke.jpeg",
    "../../assets/shine2.jpeg",
    "../../assets/marula.jpeg",
    "../../assets/crono2.jpeg",
    "../../assets/thermal.jpeg",
    "../../assets/forme308.jpeg",
    "../../assets/shampomoi.jpeg",
    "../../assets/move.jpeg",
    "../../assets/mascarilla150.jpeg",
    "../../assets/line.jpeg",
    "../../assets/abril.jpeg",
    "../../assets/yellow.jpeg",
    "../../assets/cellinove.jpeg",
    "../../assets/hair.jpeg",
    "../../assets/skalaninas.jpeg",
    "../../assets/skalamandarina.jpeg",
    "../../assets/hair2.jpeg",
    "../../assets/restruc.jpeg",
    "../../assets/suero.jpeg",
    "../../assets/densi.jpeg",
    "../../assets/hydrasplash.jpeg",
    "../../assets/makeme.jpeg",
    "../../assets/brazilian.jpeg",
    "../../assets/mascarillafortal.jpeg",
    "../../assets/shampoocare.jpeg",
    "../../assets/molecular.jpeg",
    "../../assets/jengibre.jpeg",
    "../../assets/chapumenergi.jpeg",
    "../../assets/skalababosa.jpeg",
    "../../assets/reparative.jpeg",
    "../../assets/119.jpeg",
    "../../assets/silver.jpeg",
    "../../assets/yellowcurls.jpeg",
    "../../assets/yellowoil.jpeg",
    "../../assets/hair3.jpeg",
    "../../assets/mask.jpeg",
    "../../assets/mouisture.jpeg",
    "../../assets/yellowlis.jpeg",
    "../../assets/semidelino.jpeg",
    "../../assets/yellow2.jpeg",
    "../../assets/spray.jpeg",
    "../../assets/keratin.jpeg",
    "../../assets/silverh.jpeg",
    "../../assets/keratin2.jpeg",
    "../../assets/yellow3.jpeg",
    "../../assets/yellowmask.jpeg",
    "../../assets/firenze.jpeg",


];

for (let i = 21; i <= 100; i++) {
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
