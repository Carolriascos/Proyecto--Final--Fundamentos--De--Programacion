const arrayProductosPixar = [
  {
    id: "pixar-001",
    titulo: "Ratatouille plus - Medium 15",
    imagen: "../assets/images/ratatuiille.png",
    precio: 32.99,
  },
  {
    id: "pixar-002",
    titulo: "Boo Big Feet Monster S.A plus - Small 7",
    imagen: "../assets/images/moster.png",
    precio: 12.99,
  },
  {
    id: "pixar-003",
    titulo: "Anger Intensamente plus - Small 8",
    imagen: "../assets/images/furia.png",
    precio: 12.99,
  },
  {
    id: "pixar-004",
    titulo: "Happiness Intensamente plus - Small 8",
    imagen: "../assets/images/allegria.png",
    precio: 22.99,
  },
  {
    id: "pixar-005",
    titulo: "Sadness Intensamente plus - Small 8",
    imagen: "../assets/images/tristeza.png",
    precio: 22.99,
  },
  {
    id: "pixar-006",
    titulo: "Jessie Toy Story - Medium 13",
    imagen: "../assets/images/jessie.png",
    precio: 32.99,
  },
  {
    id: "pixar-007",
    titulo: "Lotso Toy Story plus - Medium 13",
    imagen: "../assets/images/oso.png",
    precio: 32.99,
  },
  {
    id: "pixar-008",
    titulo: "Turtle Finding Nemo plus - Medium 13",
    imagen: "../assets/images/tortuga.png",
    precio: 32.99,
  },
  {
    id: "pixar-009",
    titulo: "Embarrassment plus - Medium 13",
    imagen: "../assets/images/verguenza.png",
    precio: 32.99,
  },
  {
    id: "pixar-010",
    titulo: "Bullseye Toy Story plus - Medium 13",
    imagen: "../assets/images/caballo.png",
    precio: 42.99,
  },
  {
    id: "pixar-011",
    titulo: "Anxiety plus - Medium 13",
    imagen: "../assets/images/ansiedad.png",
    precio: 32.99,
  },
  {
    id: "pixar-012",
    titulo: "Buzz Lightyear plus - Medium 15",
    imagen: "../assets/images/boss.png",
    precio: 34.99,
  },
  {
    id: "pixar-013",
    titulo: "Nemo plus - Medium 13",
    imagen: "../assets/images/nemo.png",
    precio: 22.99,
  },
  {
    id: "pixar-014",
    titulo: "Red panda plus - Medium 13",
    imagen: "../assets/images/red.png",
    precio: 22.99,
  },
  {
    id: "pixar-015",
    titulo: "WALL·E plus - Medium 13",
    imagen: "../assets/images/walle.png",
    precio: 32.99,
  },
];

const contenedorProductos = document.querySelector("#catalogoimg"); // se trae elcontenedor para cargar la pagina de catalogo //
let botonesAgregar = document.querySelectorAll(".ver-producto"); // Variable del boton de shop now de localstorage.

//Función creada para colocar dinamicamente los objetos

function cargarProductos() {
  arrayProductosPixar.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("imagenparrafo");
    div.innerHTML = `
            <div class="car">
                <div class="pul">

                    <img class="imagencata" src="${producto.imagen}" alt=""> <br>
                    <br>
                    <h5>${producto.titulo}</h5>
                    <br>
                    <p>${producto.precio}</p>
                    <br><button class="ver-producto" id="${producto.id}">Shop Now</button></a>

                </div>

            </div>
        </div> `;

    contenedorProductos.append(div);
  });
  presionarBoton();
}
cargarProductos();

function presionarBoton() {
  botonesAgregar = document.querySelectorAll(".ver-producto");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarObjetoAlLocalStorage);
  });
}

function agregarObjetoAlLocalStorage(e) {
  const id_boton_presionado = e.currentTarget.id;
  console.log("Hola", id_boton_presionado);

  const productoActual = arrayProductosPixar.find((producto) => producto.id === id_boton_presionado);
  console.log(productoActual);

  localStorage.setItem("peluche", JSON.stringify(productoActual));
  window.location.href = "producto.html";
}

//funcion para agregar el array al localStorage
function agregrarArrayProductoAlLocalStorage() {
  // Se busca arrayProductoPixar en el localStorage
  let array = JSON.parse(localStorage.getItem("arrayProductosPixar"));
  if (!array) {
    //Si no existe
    localStorage.setItem("arrayProductosPixar", JSON.stringify(arrayProductosPixar));
  }
}
agregrarArrayProductoAlLocalStorage();
