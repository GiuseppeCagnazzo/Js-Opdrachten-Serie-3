// console.log("test");
//opdracht 6
let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let img3 = document.getElementById("image3");
let img4 = document.getElementById("image4");
let img5 = document.getElementById("image5");

let changeImg1 = function() {
  img1.src = "./images/image1_2.jpg";
}
let changeImg2 = function() {
  img2.src = "./images/image2_2.jpg";
}
let changeImg3 = function() {
  img3.src = "./images/image3_2.jpg";
}
let changeImg4 = function() {
  img4.src = "./images/image4_2.jpg";
}
let changeImg5 = function() {
  img5.src = "./images/image5_2.jpg";
}

img1.addEventListener("mouseover", changeImg1);
img2.addEventListener("mouseover", changeImg2);
img3.addEventListener("mouseover", changeImg3);
img4.addEventListener("mouseover", changeImg4);
img5.addEventListener("mouseover", changeImg5);

let changeBack1 = function() {
  img1.src = "./images/image1.jpg";
}
let changeBack2 = function() {
  img2.src = "./images/image2.jpg";
}
let changeBack3 = function() {
  img3.src = "./images/image3.jpg";
}
let changeBack4 = function() {
  img4.src = "./images/image4.jpg";
}
let changeBack5 = function() {
  img5.src = "./images/image5.jpg";
}

img1.addEventListener("mouseleave", changeBack1);
img2.addEventListener("mouseleave", changeBack2);
img3.addEventListener("mouseleave", changeBack3);
img4.addEventListener("mouseleave", changeBack4);
img5.addEventListener("mouseleave", changeBack5);

//Bonus - Thomas - Korter

// <script type="text/javascript">
// function altImg(x) {
//     x.src="images/"+x.id+"_2.jpg";
// }
// function normalImg(x) {
//     x.src="images/"+x.id+".jpg";
// }
// </script>

// Change in HTML

// <img src="images/image1.jpg" id="image1" onmouseover="altImg(this)" onmouseout="normalImg(this)"/>
// <img src="images/image2.jpg" id="image2" onmouseover="altImg(this)" onmouseout="normalImg(this)"/>
// <img src="images/image3.jpg" id="image3" onmouseover="altImg(this)" onmouseout="normalImg(this)"/>
// <img src="images/image4.jpg" id="image4" onmouseover="altImg(this)" onmouseout="normalImg(this)"/>
// <img src="images/image5.jpg" id="image5" onmouseover="altImg(this)" onmouseout="normalImg(this)"/>
