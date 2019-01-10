// Opdracht 4
// Zorg ervoor dat in het meegeleverde HTML-bestand met de reset-knop de gegevens uit de formuliervelden worden gewist.

// console.log(document.querySelector("form"));

// function myFunction() {
//   document.querySelector("form").reset();
// }
//
//
// let resetForm = document.querySelector("form").reset();


function myFunction() {
  event.preventDefault();
  document.getElementById("name").value ="";
  document.getElementById("firstName").value ="";
  document.getElementById("city").value ="";
};
