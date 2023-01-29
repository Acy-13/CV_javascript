function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const colors = ['red', 'orange', 'yellow', 'lightgreen', 'blue'];
const spans = document.querySelectorAll("span");

for(let i =0; i<spans.length; i++){
    
    spans[i].style.color=colors[i];
}
