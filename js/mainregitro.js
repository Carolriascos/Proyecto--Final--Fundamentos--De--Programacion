class User {
  constructor(firstName, lastName, email, password, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.birthdate = birthdate;
  }
}

let users = JSON.parse(localStorage.getItem("users")) || [];

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}
const registerForm = document.querySelector("form");
if (registerForm && document.title.includes("Registration")) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = registerForm.querySelectorAll("input");
    const firstName = inputs[0].value.trim();
    const lastName = inputs[1].value.trim();
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;
    const birthdate = inputs[4].value;
    const email = document.querySelector("p strong")?.innerText || "";

    if (!firstName || !lastName || !password || !confirmPassword || !birthdate || !email) {
      alert("Please complete all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      alert("User already exists.");
      return;
    }

    const newUser = new User(firstName, lastName, email, password, birthdate);
    users.push(newUser);
    saveUsers();

    alert("Registered successfully!");
    window.location.href = "iniciosecion.html";
  });
}

if (registerForm && document.title.includes("Sign in")) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = registerForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    const user = users.find((u) => u.email === email);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert(`Welcome ${user.firstName}!`);
      window.location.href = "perfil.html";
    } else {
      alert("User not found. Please register.");
    }
  });
}

if (document.title.includes("Profile")) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const profileDiv = document.getElementById("profile-data");

  if (user && profileDiv) {
    profileDiv.innerHTML = `
            <p><strong>Full Name:</strong> ${user.firstName} ${user.lastName}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Birthdate:</strong> ${user.birthdate}</p>
        `;
  } else {
    profileDiv.innerHTML = `<p>User not found. Please <a href="iniciosecion.html">log in</a>.</p>`;
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "iniciosecion.html";
}
