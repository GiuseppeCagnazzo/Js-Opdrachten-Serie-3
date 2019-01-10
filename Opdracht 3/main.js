// console.log("test");
// Opdracht 3
// Geef in het meegeleverde HTML-bestand een alertvenster met de veldwaarde weer zodra het toetsenbord wordt ingedrukt.
let inputField = document.getElementById("name");
// console.log(inputField);
let showValue = function() {
    alert(inputField.value);
  };

inputField.addEventListener("keyup", showValue);

//Versie Ivo

// function pressDown(){
// let drukEnter = event.keyCode;
// let veldWaarde = document.getElementById('name').value
// if (drukEnter === 13) {
// alert(veldWaarde);
// }
// }
