// console.log("hi");

// Opdract 1
// Zorg ervoor dat in de meegeleverde HTML-bestand, de eene afbeelding word vervangen door de andere afbeelding zodra je over de afbeelding hovert.
let img1 = document.getElementById("image1");
// console.log(img1);
let changeImg = function() {
  img1.src = "./images/image1_2.jpg";
}

let changeBack = function() {
  img1.src = "./images/image1.jpg";
}

img1.addEventListener("mouseover", changeImg);
img1.addEventListener("mouseleave", changeBack);
