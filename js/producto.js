const contenedorDetalle = document.querySelector("#contenedor"); // se trae el contenedor para cargar la pagina producto //

let arrayBotonesFavoritos = document.querySelectorAll(".agregar-a-favorito"); // Arreglo de botones.
let arrayBotonesCarrito = document.querySelectorAll(".agregar-a-carrito"); // Arreglo de botones.

// Función actualizar pagina detalle.
function Cargar_Pagina_Detalle() {
  console.log("se carga la pagina");
  let datospeluche = JSON.parse(localStorage.getItem("peluche"));
  console.log("peluche obtenido es", datospeluche);

  const div = document.createElement("div");
  div.classList.add("contenedor");
  div.innerHTML = `    
<div class="columna">
    <img id="imagenpeluchemickey" src="${datospeluche.imagen}" alt="">
</div>

<div class="columnados">
    <h1 class="tex">${datospeluche.titulo}</h1>
    <h3>${datospeluche.precio}</h3>

    <div class="border">
        <br><br>
        <h2>Quantity</h2>
        <br>
    </div>

    <div class="contadorr">
        <button onclick="disminuir()">−</button>
        <p><span id="cantidad">3</span></p>
        <button id="bton" onclick="incremento()">+</button>
    </div>

    <div class="borde"></div>

    <p id="paf">
        Our leader of the club is sure to be a swell addition to any clubhouse.
        Soft plush ${datospeluche.titulo} will keep you smiling through the
        day, rain or shine. See ya real soon!
    </p>

    <button class="agregar-a-carrito" id="${datospeluche.id}">
        Add to Cart
    </button>

    <button class="agregar-a-favorito" id="${datospeluche.id}">
        <i class="fa fa-heart" style="font-size:36px; color:rgb(235, 216, 216);"></i>
    </button>
</div>

     `;
  contenedorDetalle.append(div);
  presionarBotonCarrito();
  presionBotonFavorito();
}
Cargar_Pagina_Detalle();

// Funciones carrito y favorito

function presionarBotonCarrito() {
  arrayBotonesCarrito = document.querySelectorAll(".agregar-a-carrito");
  arrayBotonesCarrito.forEach((boton) => {
    boton.addEventListener("click", agregarCarritoAlLocalStorage);
  });
}

function presionBotonFavorito() {
  arrayBotonesFavoritos = document.querySelectorAll(".agregar-a-favorito");
  arrayBotonesFavoritos.forEach((boton) => {
    boton.addEventListener("click", agregarFavoritoLocalStorage);
  });
}

function agregarCarritoAlLocalStorage(e) {
  const id_boton_presionado = e.currentTarget.id; //se obtiene el id del prodducto
  // Se busca arrayCarrito en el localStorage
  let arrayDeCarrito = JSON.parse(localStorage.getItem("arrayCarrito"));

  if (!arrayDeCarrito) {
    // Se crea
    arrayDeCarrito = [];
    localStorage.setItem("arrayCarrito", JSON.stringify(arrayDeCarrito));
  }
  //Si existe, se agrega
  console.log("Elemento al carrito: ");
  arrayDeCarrito.push(id_boton_presionado);
  // Se carga el array nuevamente al localStorage
  localStorage.setItem("arrayCarrito", JSON.stringify(arrayDeCarrito));
  window.locati+
  on.href = "carrito.html";
}

function agregarFavoritoLocalStorage(e) {
  const id_boton_presionado = e.currentTarget.id; //se obtiene el id del prodducto
  // Se busca arrayCarrito en el localStorage
  let arrayDeFavoritos = JSON.parse(localStorage.getItem("arrayFavorito"));

  if (!arrayDeFavoritos) {
    // Se crea
    arrayDeFavoritos = [];
    localStorage.setItem("arrayFavorito", JSON.stringify(arrayDeFavoritos));
  }
  console.log("Elemento a favorito:", id_boton_presionado);
  arrayDeFavoritos.push(id_boton_presionado);
  localStorage.setItem("arrayFavorito", JSON.stringify(arrayDeFavoritos));
  window.location.href = "favorito.html";
}
