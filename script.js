const root = document.querySelector(":root");
const sectionParts = document.querySelectorAll('.section-part')


function navbarControl() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


let isLightMode = true;

const darkAndLightModeColors = {
  "light": {
    "normal" : "black",
    "info" : '#A8F0B7',
    "sectionDiv": "#b5d9f8",
    "projectContainer":"#e0fae6",
    "projectDetails":"#e0fae6",
    "sectionPart": "linear-gradient(90deg, rgb(125, 123, 156) 0%, rgba(88,135,124,1) 35%, rgb(76, 180, 200) 100%)",
  },
  "dark": {
    "normal" : "white",
    "info" : 'white',
    "sectionDiv": "black",
    "sectionPart": "black",

  }
}

//Dark mode-ikon
function switchMode() {
  
  if(isLightMode)
  {
    root.style.setProperty('--normal-text', darkAndLightModeColors.dark.normal);
    root.style.setProperty('--info-box-text-color', darkAndLightModeColors.dark.info);
    root.style.setProperty('--section-div-background', darkAndLightModeColors.dark.sectionDiv);
    sectionParts.forEach(x => x.style.background = darkAndLightModeColors.dark.sectionPart)
   
  }
  else
  {
    root.style.setProperty('--normal-text', darkAndLightModeColors.light.normal);
    root.style.setProperty('--info-box-text-color', darkAndLightModeColors.light.info);
    root.style.setProperty('--section-div-background', darkAndLightModeColors.light.sectionDiv);
    sectionParts.forEach(x => x.style.background = darkAndLightModeColors.light.sectionPart)
  }
  const element = document.body;
  element.classList.toggle("dark-mode");
  isLightMode = !isLightMode
}

//Opacititet på footer-ikonerna försvinner lätt och kommer tillbaka
let footerIcons = document.getElementById("footer-icons");

let opacity = 0.1;
let opacup=true;
renderLoop();

      function renderLoop() {
        setTimeout(function() {
          if(opacup==true)
             {opacity+=0.1;
              if(opacity>=1)opacup=false;
             }
         if(opacup==false)
             {opacity-=0.1;
              if(opacity<=0.3) opacup=true;
             }
 
        footerIcons.style.opacity = opacity;
       
       window.requestAnimationFrame(renderLoop); 
        },300);
      }
