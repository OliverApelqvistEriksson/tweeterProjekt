
document.getElementById("titeln").innerHTML = "AITH for eating my neighbours dog when it was outdoors?";

document.getElementById("brodtext").innerHTML = "I, 24F, was thinking about what to eat when my neighbour, 26M, was out with his dog. Needless to say, I was....I, 24F, was thinking about what to eat when my neighbour, 26M, was out with his dog. Needless to say, I was....I, 24F, was thinking about what to eat when my neighbour, 26M, was out with his dog. Needless to say, I was....I, 24F, was thinking about what to eat when my neighbour, 26M, was out with his dog. Needless to say, I was....I, 24F, was thinking about what to eat when my neighbour, 26M, was out with his dog. Needless to say, I was....I, 24F, was thinking about what to eat when my neighbour, 26M, was out with his dog. Needless to say, I was....I, 24F, was thinking about what to eat when my neighbour, 26M, was out with his dog. Needless to say, I was....I, 24F, was thinking about what to eat when my neighbour, 26M, was out with his dog. Needless to say, I was....";


const cars = "I, 24F, was thinking about what to eat when my neighbour, 26M, was out with his dog. Needless to say, I was...";

//let text = "";
//for (let i = 0; i < cars.length; i++) {
//  text += cars[i] + "<br>";
//}

document.getElementById("demo").innerHTML = text;

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
