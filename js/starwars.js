const arrayProductoStarWars = [
  {
    id: "starwars-001",
    titulo: "Young Jedi plus - Medium 13",
    imagen: "../assets/images/sar.png",
    precio: 22.99,
  },
  {
    id: "starwars-002",
    titulo: "Star Wars Baby Yoda plus - Medium 13",
    imagen: "../assets/images/start2.png",
    precio: 24.99,
  },
  {
    id: "starwars-003",
    titulo: "Chewbacca plus - Medium 13",
    imagen: "../assets/images/star3.png",
    precio: 32.99,
  },
  {
    id: "starwars-004",
    titulo: "Baby Yoda plus - Medium 13",
    imagen: "../assets/images/star1.png",
    precio: 24.99,
  },
  {
    id: "starwars-005",
    titulo: "Star Wars plus - Medium 13",
    imagen: "../assets/images/star4.png",
    precio: 29.99,
  },
  {
    id: "starwars-006",
    titulo: "Jawa Star Wars plus - Medium 13",
    imagen: "../assets/images/star6.png",
    precio: 27.99,
  },
  {
    id: "starwars-007",
    titulo: "Darth Vader plus - Medium 13",
    imagen: "../assets/images/star7.png",
    precio: 26.99,
  },
  {
    id: "starwars-008",
    titulo: "BB-8 Star Wars plus - Medium 13",
    imagen: "../assets/images/star8.png",
    precio: 32.99,
  },
  {
    id: "starwars-009",
    titulo: "Baby Yoda - Small 7",
    imagen: "../assets/images/star9.png",
    precio: 12.99,
  },
];

const contenedorarrayProductos = document.querySelector("#catalogoimg"); // se trae elcontenedor para cargar la pagina de catalogo //
let arrayBotones = document.querySelectorAll(".ver-producto"); // Variable del boton de shop now de localstorage.

//Función creada para colocar dinamicamente los objetos

function cargarProductos() {
  arrayProductoStarWars.forEach((producto) => {
    // se recorre con el ciclo los arrayProductoStarWars
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

    contenedorarrayProductos.append(div);
  });
  presionarBoton();
}
cargarProductos();

function presionarBoton() {
  arrayBotones = document.querySelectorAll(".ver-producto"); //Lista de botones
  arrayBotones.forEach((boton) => {
    //agregar a cada boton un evento al hacer click
    boton.addEventListener("click", agregarObjetoAlLocalStorage);
  });
}

function agregarObjetoAlLocalStorage(e) {
  const id_boton_presionado = e.currentTarget.id; //se obtiene el id comentado
  console.log("Hola", id_boton_presionado);

  const productoActual = arrayProductoStarWars.find((producto) => producto.id === id_boton_presionado);
  console.log(productoActual);

  localStorage.setItem("peluche", JSON.stringify(productoActual));
  window.location.href = "producto.html";
}

//funcion para agregar el array al localStorage
function agregrarArrayProductoAlLocalStorage() {
  // Se busca arrayProductoPixar en el localStorage
  let array = JSON.parse(localStorage.getItem("arrayProductoStarWars"));
  if (!array) {
    //Si no existe
    localStorage.setItem("arrayProductoStarWars", JSON.stringify(arrayProductoStarWars));
  }
}
agregrarArrayProductoAlLocalStorage();
