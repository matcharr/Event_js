// part 1
let footerEl = document.querySelector("footer");
let x = 0;

function consolePrint() {
    x++;
    console.log(`clic numero ${x}`);
}

if (footerEl) {
    footerEl.addEventListener("click", consolePrint);
}

// part 2
let menuEl = document.getElementById('navbarHeader');
let hamburgerEl = document.querySelector('span.navbar-toggler-icon');

function menuToogle() {
    menuEl.classList.toggle("collapse");
}

if (hamburgerEl){    
    hamburgerEl.addEventListener("click", menuToogle);
}
// part 3

let cardEl = document.getElementsByClassName("col-md-4")[0];
let editEl = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
let textEl = document.getElementsByClassName("card-text")[0];

console.log(cardEl);
console.log(editEl);
console.log(textEl);

function changeColor(){
    textEl.style.color = "red";
}

if (editEl){
    editEl.addEventListener("click", changeColor);
}

// part 4
let secondCardEl = document.getElementsByClassName("col-md-4")[1];
let secondEditEl = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
let secondTextEl = document.getElementsByClassName("card-text")[1];

console.log(secondCardEl);
console.log(secondEditEl);
console.log(secondTextEl);

function secondChangeColor(){    
    if (secondTextEl.style.color === 'green'){
        secondTextEl.style.color = '' ;
    }
    else secondTextEl.style.color = "green";
}

if (secondEditEl){
    secondEditEl.addEventListener("click", secondChangeColor);
}

// part 5
let styleLinkEl = document.querySelector("link");
let headerEl = document.querySelector("header");
console.log(styleLinkEl);
console.log(headerEl);

let index = 0;

function doubleClic() {
    if (index == 2){
        styleLinkEl.disabled = true;
    }
    else if (index == 4){
        styleLinkEl.disabled = false;
        index = 0;
    }
    index++;
}

if (headerEl){
    headerEl.addEventListener("click", DoubleClic);
}
