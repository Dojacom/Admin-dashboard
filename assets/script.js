const body = document.querySelector('.body');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');


moon.onclick = function(){
    body.classList.add("dark-btn");
    const dark = document.getElementsByClassName('dark-btn');
    dark.transform.transition = '1s';
}
sun.onclick = function(){
    body.classList.remove("dark-btn")
}

const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebar");
const mainContainer = document.querySelector(".main-container");

menu.onclick = function(){
    sideBar.classList.toggle("activemenu");
}
mainContainer.onclick = function(){
    sideBar.classList.remove("activemenu");
}