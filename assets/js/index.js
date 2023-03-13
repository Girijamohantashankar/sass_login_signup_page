const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");


sign_up_btn.addEventListener("click", () => {
       container.classList.add("sign-up-mode");
    console.log("click");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    console.log("click");
});


sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
 console.log("click");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
    console.log("click");
});



// ====================================//

function validateForm() {
    let x = document.forms["myForm"]["password"]["Email"]["Username"].value;
    if (x == "") {
      alert("All must be filled out");
      return false;
    }
  }




//   ======================================color theme=======================================

document.querySelector('.color-switcher-btn').onclick= () =>{
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color =>{
color.addEventListener('click', () =>{
    let dataColor = color.getAttribute('data-color');
    document.querySelector('$theme-color').style.setProperty('$theme-color', dataColor);
});
});