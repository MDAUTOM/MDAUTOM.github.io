async function loadCars() {
  try {
    const response = await fetch("cars.json");
    const cars = await response.json();

    const carList = document.getElementById("car-list");

    cars.forEach(car => {
      const card = document.createElement("div");
      card.classList.add("car-card");

      card.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p>${car.year} | ${car.fuel} | ${car.km} km</p>
        <span class="price">${car.price}</span>
        <button onclick="showCarDetail('${car.id}')">Detay</button>
      `;

      carList.appendChild(card);
    });
  } catch (error) {
    console.error("Araçlar yüklenemedi:", error);
  }
}

function showCarDetail(carId) {
  fetch("cars.json")
    .then(res => res.json())
    .then(cars => {
      const car = cars.find(c => c.id === carId);
      if (!car) return;

      alert(
        `${car.name}\n\nModel: ${car.year}\nYakıt: ${car.fuel}\nKilometre: ${car.km}\nFiyat: ${car.price}\n\n${car.description}`
      );
    });
}

loadCars();
