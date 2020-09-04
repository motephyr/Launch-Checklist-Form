// Write your JavaScript code here!
let form = document.getElementById("form");
let list = [];
fetch("https://handlers.education.launchcode.org/static/planets.json")
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    list = json;
    console.log(list);
  });
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let pilotName = document.getElementById("pilotName");
  let copilotName = document.getElementById("copilotName");
  let fuelLevel = document.getElementById("fuelLevel");
  let cargoMass = document.getElementById("cargoMass");
  if (
    !(
      pilotName.value &&
      copilotName.value &&
      fuelLevel.value &&
      cargoMass.value
    )
  ) {
    alert("You didn't input value!");
    return;
  }

  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("fuelStatus").innerHTML =
    "Fuel level high enough for launch";
  document.getElementById("cargoStatus").innerHTML =
    "Cargo mass low enough for launch";
  document.getElementById("launchStatus").innerHTML =
    "Shuttle is ready for launch";
  document.getElementById("launchStatus").style.color = "green";
  if (parseInt(fuelLevel.value) < 10000) {
    document.getElementById("fuelStatus").innerHTML =
      "There is not enough fuel for the journey";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = "red";
  }

  if (parseInt(cargoMass.value) > 10000) {
    document.getElementById("cargoStatus").innerHTML =
      "There is too much mass for the shuttle to take off";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = "red";
  }
  let obj = list[Math.floor(Math.random() * list.length)];
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
    <li>Name: ${obj.name}</li>
    <li>Diameter: ${obj.diameter}</li>
    <li>Star: ${obj.star}</li>
    <li>Distance from Earth: ${obj.distance}</li>
    <li>Number of Moons: ${obj.moons}</li>
    </ol>
    <img src="${obj.image}">`;
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
