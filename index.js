import DonutMaker from "./DonutMaker.js";
console.log(DonutMaker);
var numberOfDonuts = document.getElementById("numberOfDonuts");
var buttonClick = document.getElementById("createDonut");
var autoClicker = document.getElementById("autoClicker");
var autoClickerCost = document.getElementById("costOfAutoClicker");
var numberOfAutoClickers = document.getElementById("numberOfAutoClickers");
var multiplier = document.getElementById("multiplier");
var costOfMultiplier = document.getElementById("costOfMultiplier");

const createNewDonut = new DonutMaker(0, 0, 100, 10, 0);

buttonClick.addEventListener("click", () => {
    createNewDonut.addDonut();
    numberOfDonuts.innerHTML = createNewDonut.numDonuts;
    console.log(createNewDonut.numberOfDonuts);
});


autoClicker.addEventListener("click", () => {
    createNewDonut.addAutoClicker();
    numberOfAutoClickers.innerHTML = createNewDonut.numAutoClickers;
    autoClickerCost.innerHTML = createNewDonut.numDonuts;
    console.log(createNewDonut.numAutoClickers);
});

multiplier.addEventListener("click", () => {
    createNewDonut.addMultiplier();
    numMultipliers.innerHTML = createNewDonut.numMultipliers;
    costOfMultiplier.innerHTML = createNewDonut.costOfMultiplier;
    numberOfDonuts.innerHTML = createNewDonut.numDonuts;
    console.log(createNewDonut.numMultipliers);
});







  



