const contenedorArrayCarrito = document.querySelector("#container-carrito"); // Se estable el contenedor donde se crearan los elementos dinamicos

//Función creada para colocar dinamicamente los objetos del carrito

function cargarCarrito() {
  console.log("Entre al carrito");
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
  const arrayCarrito = JSON.parse(localStorage.getItem("arrayCarrito"));

  let carritoFinal = [];

  for (let peluche of todosLosPeluches) {
    if (peluche !== null && arrayCarrito.includes(peluche.id.toString())) {
      carritoFinal.push(peluche);
    }
  }

  let totalCarrito = 0.0;
  //console.log(carritoFinal);

  carritoFinal.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <div class="imagenes">
        <img src="${producto.imagen}" alt="" />
      </div>
      <div class="producto-info">
        <h2>${producto.nombre}</h2>
        <p class="cantidad">
          Quantity: 1 at <span class="precio">${producto.precio}</span>
        </p>
        <div class="acciones">
          <a href="#" class="remove">Remove</a>
        </div>
        <p class="id">${producto.id}</p>
      </div>
`;
    contenedorArrayCarrito.append(div);
    totalCarrito += producto.precio;
  });

  const divResumen = document.createElement("div");
  divResumen.innerHTML = `
  <h3>Order Summary</h3>
    <div class="detalle">
      <p>Subtotal</p>
      <p class="monto">${totalCarrito.toFixed(2)}</p> <!-- toFixed: Reduce el número de decimales.--!>
    </div>
    <hr />
    <div class="detalle total">
      <p>Total</p>
      <p class="monto">${totalCarrito.toFixed(2)}</p>
    </div>
    <button class="boton azul">Checkout</button>`;
  contenedorArrayCarrito.append(divResumen);
}

cargarCarrito();
