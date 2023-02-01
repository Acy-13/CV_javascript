function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




// const colors = ['red', 'orange', 'yellow', 'lightgreen', 'blue'];
// const spans = document.querySelectorAll("span");

// for(let i =0; i<spans.length; i++){
    
//     spans[i].style.color=colors[i];

let isLightMode = true;

const darkAndLightModeColors = {
  "light": {
    "normal" : "black",
    "info" : '#A8F0B7',
    "sectionDiv": "#b5d9f8"
  },
  "dark": {
    "normal" : "white",
    "info" : 'white',
    "sectionDiv": "black"
  }
}

//Dark mode-knapp
function switchMode() {
  const root = document.querySelector(":root");
  if(isLightMode)
  {
    root.style.setProperty('--normal-text', darkAndLightModeColors.dark.normal);
    root.style.setProperty('--info-box-text-color', darkAndLightModeColors.dark.info);
    root.style.setProperty('--section-div-background', darkAndLightModeColors.dark.sectionDiv);

  }
  else
  {
    root.style.setProperty('--normal-text', darkAndLightModeColors.light.normal);
    root.style.setProperty('--info-box-text-color', darkAndLightModeColors.light.info);
    root.style.setProperty('--section-div-background', darkAndLightModeColors.light.sectionDiv);
  }
  const element = document.body;
  element.classList.toggle("dark-mode");
  isLightMode = !isLightMode
}

//Opacititet på footer-ikonerna, försvinner lätt och kommer tillbaka
let footerIcons = document.getElementById("footer-icons");

let opac = 0.1;
let opacup=true;
renderLoop();

      function renderLoop() {
        setTimeout(function() {
          if(opacup==true)
             {opac+=0.1;
              if(opac>=1)opacup=false;
             }
         if(opacup==false)
             {opac-=0.1;
              if(opac<=0.3) opacup=true;
             }
 
        footerIcons.style.opacity = opac;
       
       window.requestAnimationFrame(renderLoop); 
        },300);
      }
