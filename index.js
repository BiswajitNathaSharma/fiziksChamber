var typed = new Typed("#element", {
  strings: [
    "AFFORDABLE",
    "PRACTICAL",
    "EASY",
    "INTERACTIVE",
    "RELEVANT",
    "CONVENIENT",
  ],
  typeSpeed: 100,
  backspace: 100,
  loop: true,
});
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("class");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");

        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  menuicon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar");

menuicon.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

function show_model(){
  modal.showModal();
}
function close_model(){
  modal.close();
}

function changeIframe(change) {
  show_model()
  document.getElementById('myiframe').src = change;
 }
  
let makeDialogFullScreen = document.getElementById("modal");
let fullScreenBtn = document.getElementById("fullScreen");
fullScreenBtn.addEventListener("click",()=>{
  makeDialogFullScreen.classList.add("modal-full")
  
  
})
let halfScreenBtn = document.getElementById("halfScreen");
halfScreenBtn.addEventListener("click",()=>{
  makeDialogFullScreen.classList.remove("modal-full")
})
