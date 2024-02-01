
const openmenu = document.getElementById("open-menu");
const closemenu = document.getElementById("close-menu");
const menu =document.getElementById("menu-container");

openmenu.addEventListener('click',()=>{
    menu.style.transform="translateX(0px)";
    menu.style.transition="transform 1s ease-in"

})
closemenu.addEventListener('click',()=>{
    menu.style.transform="translateX(200px)";
    menu.style.transition="transform 1s ease-out"

})
