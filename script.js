//card de mascotas

const pets = [
    // Perros
    { id: 1, nombre: "Max", especie: "Perro", raza: "Labrador Retriever", edad: "2 años", peso: "25 kg", imagen: "fotos/labrados-retriver.jpg", whatsapp: "573104379226" },
    { id: 2, nombre: "Rocky", especie: "Perro", raza: "Bulldog Francés", edad: "1 año", peso: "12 kg", imagen: "fotos/bulldog-frances.jpg", whatsapp: "573104379226" },
    { id: 3, nombre: "Toby", especie: "Perro", raza: "Golden Retriever", edad: "3 años", peso: "30 kg", imagen: "fotos/golde.jpeg", whatsapp: "573104379226" },
    { id: 4, nombre: "Bruno", especie: "Perro", raza: "Pastor Alemán", edad: "4 años", peso: "35 kg", imagen: "fotos/pastor-aleman.jpeg", whatsapp: "573104379226" },
    { id: 5, nombre: "Simón", especie: "Perro", raza: "Beagle", edad: "2 años", peso: "10 kg", imagen: "fotos/Beagle.jpg", whatsapp: "573104379226" },
    { id: 6, nombre: "Thor", especie: "Perro", raza: "Husky Siberiano", edad: "3 años", peso: "27 kg", imagen: "fotos/Husky Siberiano.jpg", whatsapp: "573104379226" },
    { id: 7, nombre: "Choco", especie: "Perro", raza: "Pug", edad: "1.5 años", peso: "9 kg", imagen: "fotos/pug.webp", whatsapp: "573104379226" },

    // Gatos
    { id: 8, nombre: "Luna", especie: "Gato", raza: "Siamés", edad: "3 años", peso: "4 kg", imagen: "fotos/gato1.jpg", whatsapp: "573104379226" },
    { id: 9, nombre: "Nala", especie: "Gato", raza: "Persa", edad: "2 años", peso: "3.5 kg", imagen: "fotos/persa.jpeg", whatsapp: "573104379226" },
    { id: 10, nombre: "Milo", especie: "Gato", raza: "British Shorthair", edad: "1 año", peso: "5 kg", imagen: "fotos/British.webp", whatsapp: "573104379226" },
    { id: 11, nombre: "Kiara", especie: "Gato", raza: "Maine Coon", edad: "4 años", peso: "6.5 kg", imagen: "fotos/maine-coon.jpg", whatsapp: "573104379226" },
    { id: 12, nombre: "Simba", especie: "Gato", raza: "Bengalí", edad: "2.5 años", peso: "4.8 kg", imagen: "fotos/Bengalí.webp", whatsapp: "573104379226" },
    { id: 13, nombre: "Misha", especie: "Gato", raza: "Ragdoll", edad: "2 años", peso: "5.2 kg", imagen: "fotos/Ragdoll.jpg", whatsapp: "573104379226" },
    { id: 14, nombre: "Cleo", especie: "Gato", raza: "Esfinge", edad: "3 años", peso: "3.2 kg", imagen: "fotos/Esfinge.jpg", whatsapp: "573104379226" }
];


function renderPets(filteredPets = pets) {
    const container = document.getElementById("pets-container");
    container.innerHTML = ""; // Limpiar antes de renderizar

    filteredPets.forEach(pet => {
        container.innerHTML += `
            <div class="pets__card">
                <div class="image-container">
                    <img src="${pet.imagen}" alt="${pet.nombre}" class="pet-img">
                    <button class="view-button" onclick="openModal('${pet.imagen}')">🔍 Ver</button>
                </div>
                <h4>${pet.nombre}</h4>
                <p><strong>Especie:</strong> ${pet.especie}</p>
                <p><strong>Raza:</strong> ${pet.raza}</p>
                <p><strong>Edad:</strong> ${pet.edad}</p>
                <p><strong>Peso:</strong> ${pet.peso}</p>
                <a href="https://wa.me/${pet.whatsapp}" target="_blank">
                    <button class="adopt-button">Adoptar</button>
                </a>
            </div>
        `;
    });
}

function openModal(imgSrc) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("image-modal").style.display = "none";
}

//filtro

function filterPets() {
    const searchText = document.getElementById("search").value.toLowerCase();
    const speciesFilter = document.getElementById("filter-species").value;

    const filteredPets = pets.filter(pet => {
        const matchesSearch = pet.nombre.toLowerCase().includes(searchText) ||
                              pet.raza.toLowerCase().includes(searchText) ||
                              pet.edad.toLowerCase().includes(searchText);
        const matchesSpecies = speciesFilter === "all" || pet.especie === speciesFilter;
        
        return matchesSearch && matchesSpecies;
    });

    renderPets(filteredPets);
}

// Escuchar eventos de entrada
document.getElementById("search").addEventListener("input", filterPets);
document.getElementById("filter-species").addEventListener("change", filterPets);

// Renderizar mascotas al cargar la página
document.addEventListener("DOMContentLoaded", () => renderPets());

//modal

document.addEventListener("DOMContentLoaded", function () {
  const botonesLeerMas = document.querySelectorAll(".aboutBtn");
  const modales = document.querySelectorAll(".modal");

  // Abrir el modal correspondiente
  botonesLeerMas.forEach((boton) => {
    boton.addEventListener("click", function () {
      const infoId = boton.getAttribute("data-info");
      document.getElementById(`modal-${infoId}`).style.display = "flex";
    });
  });

  // Cerrar modal al hacer clic en la "X"
  document.querySelectorAll(".close").forEach((cerrar) => {
    cerrar.addEventListener("click", function () {
      const infoId = cerrar.getAttribute("data-close");
      document.getElementById(`modal-${infoId}`).style.display = "none";
    });
  });

  // Cerrar modal si se hace clic fuera del contenido
  window.addEventListener("click", function (event) {
    modales.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".intro__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(
  ".about__row:nth-child(3) .about__image img, .about__row:nth-child(5) .about__image img",
  {
    ...scrollRevealOption,
    origin: "left",
  }
);
ScrollReveal().reveal(".about__row:nth-child(4) .about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".instagram__grid img", {
  duration: 1000,
  interval: 500,
});
