const productos = [
    {
        nombre: "Producto 1",
        descripcion: "Descripción del producto",
        precio: 50,
        imagen: "../../assets/shine.jpeg"
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
