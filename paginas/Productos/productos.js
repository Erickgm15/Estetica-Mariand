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
    }
];

const contenedor = document.getElementById("productos");

productos.forEach(producto => {
    contenedor.innerHTML += `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span class="precio">Q${producto.precio}</span>
        </div>
    `;
});
