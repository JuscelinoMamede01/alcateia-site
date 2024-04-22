// Verifique se a URL atual é a página inicial ou a página sobre
const currentPath = window.location.pathname;
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");
console.log("====================================");
console.log(currentPath);
console.log("====================================");

if (currentPath === "/src/index.html") {
  homeLink.classList.remove("text-white");
  homeLink.classList.add("text-red-500");
} else if (currentPath === "/src/pages/about.html") {
  aboutLink.classList.remove("text-white");
  aboutLink.classList.add("text-red-500");
} else if (currentPath === "/src/pages/contact.html") {
  contactLink.classList.remove("text-white");
  contactLink.classList.add("text-red-500");
}

function limparFormulario(event) {
  document.getElementById("contactForm").reset();
  event.preventDefault();
}
