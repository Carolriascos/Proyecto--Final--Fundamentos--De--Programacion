const contenedorNumeroItem = document.querySelector("#container_numero_items"); // Se estable el contenedor donde se crearan los elementos dinamicos

const contenedorArrayFavoritos = document.querySelector("#container-carrito");
//Función creada para colocar dinamicamente los objetos del carrito

function cargarCarrito() {
  //Se obtienen los arrays de productos de localStoreage
  const arrayProductosDisney = JSON.parse(localStorage.getItem("arrayProductosDisney"));
  const arrayProductosMarvel = JSON.parse(localStorage.getItem("arrayProductosMarvel"));
  const arrayProductosPixar = JSON.parse(localStorage.getItem("arrayProductosPixar"));
  const arrayProductoStarWars = JSON.parse(localStorage.getItem("arrayProductoStarWars"));

  const todosLosPeluches = (arrayProductosDisney || []).concat(
    arrayProductosMarvel || [],
    arrayProductosPixar || [],
    arrayProductoStarWars || []
  );

  //Se obtienen el array donde se encuentran los elementos del carrito en el localStorage
  const arrayFavoritos = JSON.parse(localStorage.getItem("arrayFavorito"));

  let arreglo_favoritos_final = [];

  for (let peluche of todosLosPeluches) {
    if (peluche !== null && arrayFavoritos.includes(peluche.id.toString())) {
      arreglo_favoritos_final.push(peluche);
    }
  }

  console.log(arreglo_favoritos_final);

  arreglo_favoritos_final.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
        <img src="${producto.imagen}" class="product-image">
            <h3>${producto.nombre}</h3>
            <p class="price">${producto.precio}</p>
            <a href="carrito.html"><button class="shop-button">Shop now</button></a>
`;
    contenedorArrayFavoritos.append(div);
  });

  const div_numero_item = document.createElement("div");
  div_numero_item.innerHTML = `<h2>Favorite items count (${arreglo_favoritos_final.length})</h2>      
`;
  contenedorNumeroItem.append(div_numero_item);
}

cargarCarrito();
