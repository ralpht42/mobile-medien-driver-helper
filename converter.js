window.onload = () => {
  // Zugriff auf die Elemente im Formular
  let startKm = document.getElementById("input-start");
  let stopKm = document.getElementById("input-stop");
  let fuel = document.getElementById("input-fuel");
  let costs = document.getElementById("input-costs");
  let checkbox = document.getElementById("costs-for-100km");
  let button = document.getElementById("button-calculate");
  let outputConsumption = document.getElementById("output-consumption");
  let outputCosts = document.getElementById("output-costs");

  // Event-Listener für den Klick auf den Button
  button.addEventListener("click", () => {
    let distance = stopKm.value - startKm.value;
    let consumption = (fuel.value / distance) * 100;
    outputConsumption.textContent = `${consumption.toFixed(2)}`;

    if (checkbox.checked) {
      let costPer100Km = (costs.value / distance) * 100;
      outputCosts.textContent = `${costPer100Km.toFixed(2)}`;
    } else {
      outputCosts.textContent = "";
    }
  });
};
