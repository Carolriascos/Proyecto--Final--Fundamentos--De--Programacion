const arrayProductosDisney = [
  {
    id: "disney-001",
    titulo: "Mickey Mouse plus - Medium 13",
    imagen: "../assets/images/mcikey.png",
    precio: 32.9,
  },
  {
    id: "disney-002",
    titulo: "Minnie Mouse plus - Medium 13",
    imagen: "../assets/images/minie.png",
    precio: 27.9,
  },
  {
    id: "disney-003",
    titulo: "Pluto plus - Medium 13",
    imagen: "../assets/images/pluto.png",
    precio: 22.99,
  },
  {
    id: "disney-004",
    titulo: "Donald plus - Medium 13",
    imagen: "../assets/images/donald.png",
    precio: 32.9,
  },
  {
    id: "disney-005",
    titulo: "Daisy plus - Medium 13",
    imagen: "../assets/images/deisy.png",
    precio: 22.99,
  },
  {
    id: "disney-006",
    titulo: "Goofy plus - Medium 13",
    imagen: "../asassets/images/goofy.png",
    precio: 22.99,
  },
  {
    id: "disney-007",
    titulo: "Simba- Small 7",
    imagen: "../asaassets/images/simba.png",
    precio: 32.9,
  },
  {
    id: "disney-008",
    titulo: "Nala plus - Small 7",
    imagen: "../assets/images/nala.png",
    precio: 22.99,
  },
  {
    id: "disney-009",
    titulo: "Rapunzel plus - Medium 15",
    imagen: "../assets/images/rapunzel.png",
    precio: 22.99,
  },
  {
    id: "disney-010",
    titulo: "Dumbo plus - Medium 10",
    imagen: "../assets/images/dumbo.png",
    precio: 22.99,
  },
  {
    id: "disney-011",
    titulo: "Tod plus - Medium 15",
    imagen: "../assets/images/tod.png",
    precio: 32.99,
  },
  {
    id: "disney-012",
    titulo: "Peter Pan - Medium 15",
    imagen: "../assets/images/peter.png",
    precio: 32.99,
  },
  {
    id: "disney-013",
    titulo: "Pua Moana plus - Small 7",
    imagen: "../assets/images/pua.png",
    precio: 22.99,
  },
  {
    id: "disney-014",
    titulo: "Moana Plus  plus - Medium 13",
    imagen: "../assets/images/moana.png",
    precio: 19.99,
  },
  {
    id: "disney-015",
    titulo: "Olaf plus - Small 7",
    imagen: "../assassets/images/olaf.png",
    precio: 19.99,
  },
];

const contenedorarrayProductos = document.querySelector("#catalogoimg"); // Se estable el contenedor donde se crearan los elementos dinamicos
let arrayBotones = document.querySelectorAll(".ver-producto"); // Variable del boton de shop now de localstorage.

//Función creada para colocar dinamicamente los objetos

function cargarProductos() {
  arrayProductosDisney.forEach((producto) => {
    // se recorre con el ciclo los arrayProductosDisney
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
  presionarBotonverproducto();
}
cargarProductos();

function presionarBotonverproducto() {
  arrayBotones = document.querySelectorAll(".ver-producto"); //Lista de botones
  arrayBotones.forEach((boton) => {
    //agregar a cada boton un evento al hacer click
    boton.addEventListener("click", agregarObjetoAlLocalStorage);
  });
}

function agregarObjetoAlLocalStorage(e) {
  const id_boton_presionado = e.currentTarget.id; //se obtiene el id del boton presionado - que es el id del producto//
  /*   console.log("Hola", id_boton_presionado);
   */
  const pelucheActual = arrayProductosDisney.find((producto) => producto.id === id_boton_presionado);

  console.log(pelucheActual);

  localStorage.setItem("peluche", JSON.stringify(pelucheActual));

  window.location.href = "producto.html";
}

//funcion para agregar el array al localStorage
function agregrarArrayProductoAlLocalStorage() {
  // Se busca arrayProductoPixar en el localStorage
  let array = JSON.parse(localStorage.getItem("arrayProductosDisney"));
  if (!array) {
    //Si no existe
    localStorage.setItem("arrayProductosDisney", JSON.stringify(arrayProductosDisney));
  }
}
agregrarArrayProductoAlLocalStorage();
