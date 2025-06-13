let ArrayPelucheDisney = [];
fetch("https://raw.githubusercontent.com/Carolriascos/Api-Disney/Reto-3/db.json")
  .then((response) => {
    return response.json(); //se obtiene la información del API en formato json
  })
  .then((data) => {
    ArrayPelucheDisney = data.peluches;
    const contenedorarrayProductos = document.querySelector("#catalogoimg"); // Se estable el contenedor donde se crearan los elementos dinamicos
    let arrayBotones = []; // Variable del boton de shop now de localstorage.

    //Función creada para colocar dinamicamente los objetos

    function cargarProductos() {
      ArrayPelucheDisney.forEach((producto) => {
        // se recorre con el ciclo los ArrayPelucheDisney
        const div = document.createElement("div");
        div.classList.add("imagenparrafo");
        div.innerHTML = `
            <div class="car">
                <div class="pul">
                    <img class="imagencata" src="${producto.imagen}" alt=""> <br>
                    <br>
                    <h5>${producto.nombre}</h5>
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
      const pelucheActual = ArrayPelucheDisney.find((producto) => producto.id.toString() === id_boton_presionado);

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
        localStorage.setItem("arrayProductosDisney", JSON.stringify(ArrayPelucheDisney));
      }
    }
    agregrarArrayProductoAlLocalStorage();
  });
