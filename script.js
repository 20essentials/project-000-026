let body = document.querySelector(".elBody");

function rain() {
  let amount = 100,
    
    i = 0;

    while (i < amount) {
      let drop = document.createElement("i");

      let size = Math.random() * 5;
      let posX = Math.floor(Math.random() * window.innerWidth);
      let delay = Math.random() * -20;
      let duration = Math.random() * 5;
      
      drop.style.width = 0.2 + size + "px";
      drop.style.left = posX + "px";
      drop.style.animationDelay = delay + "s";
      drop.style.animationDuration = 1 + duration + "s";


      body.appendChild(drop);

      i++;
    }
}

document.addEventListener("DOMContentLoaded", e => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    body.style.display = "none";
  }
  else {
    rain();
  }  
})


function cambiar(id, myUrl) {
  let iphoneFotoContenedor = document.querySelectorAll(id);
  
  return iphoneFotoContenedor[0].style.backgroundImage= `url(${myUrl})`;
}
