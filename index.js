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

function show_model() {
  modal.showModal();
}
function close_model() {
  modal.close();
}

function changeIframe(change) {
  show_model();
  document.getElementById("myiframe").src = change;
}

let makeDialogFullScreen = document.getElementById("modal");
let fullScreenBtn = document.getElementById("fullScreen");
fullScreenBtn.addEventListener("click", () => {
  makeDialogFullScreen.classList.add("modal-full");
});
let halfScreenBtn = document.getElementById("halfScreen");
halfScreenBtn.addEventListener("click", () => {
  makeDialogFullScreen.classList.remove("modal-full");
});
//form submit
let form = document.getElementById("form");
form.addEventListener("submit", validateSubmit);
function sendmail() {
  let numbers = document.getElementById("number").value;
  let messages = document.getElementById("message").value;
  let subject = document.getElementById("subject").value;
  let email = document.getElementById("email").value;
  let body = `my email: ${email} <br>phone number: ${numbers} <br> message: ${messages}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sharmaoncourse@gmail.com",
    Password: "B33D9F91BB922C2DC7D2B52C77A1E9BF2F68",
    To: "lipubiswajit109@gmail.com",
    From: "sharmaoncourse@gmail.com",
    Subject: subject,
    Body: body,
  }).then((message) => openPopup(message));
}

//popup
let popup = document.getElementById("popup");
let pop_p = document.getElementById("popup-p");
let pop_h = document.getElementById("popup-h2");
let myform = document.getElementById("form");
function openPopup(message) {
  if (message.includes("OK")) {
    pop_p.innerHTML = `Message send successfully`;
  } else {
    pop_h.innerHTML = `Sorry!`;
    pop_p.innerHTML = `Message can't send, due to: ${message}`;
  }
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
  myform.reset();
}

// form validation

let errors = document.getElementById("errors");
let fixThis = document.getElementById("fix-errors");
let nameErr = document.getElementById("name-error");
let emailErr = document.getElementById("email-error");
let phErr = document.getElementById("number-error");
let subErr = document.getElementById("subject-error");
let msgErr = document.getElementById("message-error");

function validateName() {
  let name = document.getElementById("name").value;
  const regex = /^\w+( \w+){0,3}$/;
  if (name.length == 0) {
    errors.innerHTML = "name is required!";
    nameErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }
  if (!regex.test(name)) {
    nameErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    errors.innerHTML = "Enter a valid name";
    return false;
  }
  errors.innerHTML = "";
  nameErr.innerHTML = "<i class='bx bx-check-circle'></i>";
  return true;
}
function validatePhone() {
  let phone = document.getElementById("number").value;
  const regex = /^[6-9]\d{9}$/;
  if (phone.length == 0) {
    errors.innerHTML = "phone number is required";
    phErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }

  if (phone.length !== 10) {
    errors.innerHTML = "phone number should be 10 digits";
    phErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }
  if (!regex.test(phone)) {
    errors.innerHTML = "invalid phone number";
    phErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }
  errors.innerHTML = "";
  phErr.innerHTML = "<i class='bx bx-check-circle'></i>";
  return true;
}
function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    errors.innerHTML = "Email shouldn't be empty";
    emailErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }
  if (!email.match(/^[a-z0-9](\.?[a-z0-9]){3,}@[Gg][Mm][Aa][Ii][Ll]\.com$/)) {
    errors.innerHTML = "Enter a valid email, Only gmail alowed";
    emailErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }

  errors.innerHTML = "";
  emailErr.innerHTML = "<i class='bx bx-check-circle'></i>";
  return true;
}

function validateSubject() {
  subject = document.getElementById("subject").value;
  let required = 10;
  let left = required - subject.length;
  if (subject.length == 0) {
    errors.innerHTML = "you have to define subject";
    subErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }
  if (subject.length < required) {
    errors.innerHTML = `${left} more letters to add as subject.`;
    subErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }
  if (subject.length > 20) {
    errors.innerHTML = `<i class='bx bx-bulb'></i> ProTip! Great subject summaries contain fewer than 50 characters.`;
    subErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }

  errors.innerHTML = "";
  subErr.innerHTML = "<i class='bx bx-check-circle'></i>";
  return true;
}
function validateMessage() {
  messages = document.getElementById("messageBox").value;
  let required = 40;
  let left = required - messages.length;
  if (messages.length < required) {
    errors.innerHTML = `${left} more letters to send the message.`;
    msgErr.innerHTML = "<i class='bx bxs-error-circle'></i>";
    return false;
  }
  errors.innerHTML = "Now message can be send.";
  setTimeout(() => {
    errors.innerHTML = "";
  }, 2000);
  msgErr.innerHTML = "<i class='bx bx-check-circle'></i>";
  return true;
}
function validateSubmit(e) {
  e.preventDefault();
  if (
    !validateEmail() ||
    !validateName() ||
    !validatePhone() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    fixThis.style.display = "block";
    fixThis.innerHTML = "please fix the error to submit.";
    setTimeout(() => {
      fixThis.style.display = "none";
    }, 4000);
    return false;
  } else sendmail();
  return true;
}
