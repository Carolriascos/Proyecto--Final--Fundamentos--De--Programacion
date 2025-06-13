// ----------- INICIO DE SESIÓN ------------
if (form && document.title.includes('Sign in')) {
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const correoIngresado = form.querySelector('input[type="email"]').value.trim()

    // Traemos todos los usuarios registrados
    const usuariosGuardados = JSON.parse(localStorage.getItem('users')) || []

    // Buscamos si el correo ingresado ya está registrado
    const usuarioEncontrado = usuariosGuardados.find((u) => u.email === correoIngresado)

    if (usuarioEncontrado) {
      // Guardamos el usuario actual
      localStorage.setItem('currentUser', JSON.stringify(usuarioEncontrado))

      // Mostramos mensaje de éxito
      alert(`Has iniciado sesión correctamente, ${usuarioEncontrado.firstName}!`)
      
      // Redirigimos al perfil u otra página
      window.location.href = 'perfil.html'
    } else {
      alert('Ese correo no está registrado. Por favor regístrate primero.')
    }
  })
}