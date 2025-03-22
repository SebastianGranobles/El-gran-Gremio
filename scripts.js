//card de mascotas

const pets = [
    { id: 1, nombre: "Max", especie: "Perro", raza: "Labrador Retriever", edad: "2 años", peso: "25 kg", imagen: "fotos/perro1.jpg", whatsapp: "573104379226" },
    { id: 2, nombre: "Luna", especie: "Gato", raza: "Siames", edad: "3 años", peso: "4 kg", imagen: "fotos/gato1.jpg", whatsapp: "573104379226" },
    { id: 3, nombre: "Rocky", especie: "Perro", raza: "Bulldog Francés", edad: "1 año", peso: "12 kg", imagen: "fotos/perro1.jpg", whatsapp: "573104379226" }
];

function renderPets(filteredPets = pets) {
    const container = document.getElementById("pets-container");
    container.innerHTML = ""; // Limpiar antes de renderizar

    filteredPets.forEach(pet => {
        container.innerHTML += `
            <div class="pets__card">
                <img src="${pet.imagen}" alt="${pet.nombre}">
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
    const modal = document.getElementById("aboutModal");
    const btn = document.getElementById("aboutBtn");
    const closeBtn = document.querySelector(".close");

    btn.addEventListener("click", function () {
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
