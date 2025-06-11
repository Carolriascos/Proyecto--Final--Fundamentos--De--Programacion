const arrayProductosMarvel = [
  {
    id: "marvel-001",
    titulo: "Guardians of the galaxy plus - Medium 13",
    imagen: "../assets/images/guardianes.png",
    precio: 32.9,
  },
  {
    id: "marvel-002",
    titulo: "Groot plus - Small 7",
    imagen: "../asassets/images/groot.png",
    precio: 22.99,
  },
  {
    id: "marvel-003",
    titulo: "Deadpool plus - Medium 15",
    imagen: "../assets/images/deepool.png",
    precio: 22.99,
  },
  {
    id: "marvel-004",
    titulo: "Black panther plus - Medium 15",
    imagen: "../assets/images/blackpenter.png",
    precio: 32.99,
  },
  {
    id: "marvel-005",
    titulo: "Iron Man plus - Medium 13",
    imagen: "../assets/images/ionman.png",
    precio: 32.99,
  },
  {
    id: "marvel-006",
    titulo: "Thor plus - Medium 13",
    imagen: "../assets/images/thor.png",
    precio: 32.99,
  },
  {
    id: "marvel-007",
    titulo: "assets/images/thor.png",
    imagen: "../asaassets/images/simba.png",
    precio: 32.9,
  },
  {
    id: "marvel-008",
    titulo: "Captain america plus - Medium 13",
    imagen: "../assets/images/capitan.png",
    precio: 32.99,
  },
  {
    id: "marvel-009",
    titulo: "Rocket plus - Medium 13",
    imagen: "../assets/images/rocket.png",
    precio: 23.99,
  },
  {
    id: "marvel-010",
    titulo: "Groot plus - Small 7",
    imagen: "../assets/images/goo2.png",
    precio: 22.99,
  },
  {
    id: "marvel-011",
    titulo: "Captain Marvel plus - Medium 13",
    imagen: "../assets/images/capitana.png",
    precio: 26.99,
  },
  {
    id: "marvel-012",
    titulo: "Spider-Man plus - Medium 13",
    imagen: "../assets/images/spid2.png",
    precio: 31.99,
  },
  {
    id: "marvel-013",
    titulo: "Thanos plus - Medium 13",
    imagen: "../assets/images/thanos.png",
    precio: 22.99,
  },
  {
    id: "marvel-014",
    titulo: "Hulk plus - Medium 13",
    imagen: "../assets/images/hool.png",
    precio: 22.99,
  },
  {
    id: "marvel-015",
    titulo: "Wolverine plus - Medium 13",
    imagen: "../assets/images/worrnie.png",
    precio: 22.99,
  },
];

const contenedorProductos = document.querySelector("#catalogoimg"); // se trae elcontenedor para cargar la pagina de catalogo //
let botonesAgregar = document.querySelectorAll(".ver-producto"); // Variable del boton de shop now de localstorage.

function cargarProductos() {
  arrayProductosMarvel.forEach((producto) => {
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
  actualizarBotonesAgregar();
}
cargarProductos();

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".ver-producto");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarObjetoAlLocalStorage);
  });
}
const productosEnCarrito = [];

function agregarObjetoAlLocalStorage(e) {
  const id_boton_presionado = e.currentTarget.id;
  console.log("Hola", id_boton_presionado);

  const productoActual = arrayProductosMarvel.find((producto) => producto.id === id_boton_presionado);
  console.log(productoActual);

  localStorage.setItem("peluche", JSON.stringify(productoActual));
  window.location.href = "producto.html";
}

//funcion para agregar el array al localStorage
function agregrarArrayProductoAlLocalStorage() {
  // Se busca arrayProductoPixar en el localStorage
  let array = JSON.parse(localStorage.getItem("arrayProductosMarvel"));
  if (!array) {
    //Si no existe
    localStorage.setItem("arrayProductosMarvel", JSON.stringify(arrayProductosMarvel));
  }
}
agregrarArrayProductoAlLocalStorage();
