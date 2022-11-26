let nav = document.getElementById("nav")
nav.style.listStyle="circle";


let img= document.getElementById("header")
img.style.textAlign="right";


let clone = img.cloneNode(true);
clone.style.textAlign="left";

img.parentNode.appendChild(clone);