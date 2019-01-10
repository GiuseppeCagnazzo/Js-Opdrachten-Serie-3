// Opdracht 2
// In het meegeleverde HTML-bestand verschijnt een alertvenster met het bericht : Dank u voor uw deelname wanneer het invoerveld de focus verliest.
// console.log("test");
let inputField = document.getElementById("name");
// console.log(inputField);
let alertMsg = function() {
  alert("Dank u voor uw deelname");
  
};

inputField.addEventListener("focusout", alertMsg);
