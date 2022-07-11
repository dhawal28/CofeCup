// Changing opacity according to animation
const contentHeading = document.querySelector('.content-heading');
const contentPara = document.querySelector('.content-para');
const orderBtn = document.querySelector('.order-btn');

setTimeout(() => {
    contentHeading.style.opacity = 1;
}, 1100);
setTimeout(() => {
    contentPara.style.opacity = 1;
}, 1500);
setTimeout(() => {
    orderBtn.style.opacity = 1;
}, 1900);

// Intro Animation
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const description = document.querySelector('.description');
const button = document.querySelector('.button');
button.addEventListener('click', ()=>{
    if(username.value === "" ||  email.value === "" || description.value === ""){
        return alert("Please fill all the credentials before submitting the form");
    }
    username.value = "";
    email.value = "";
    description.value = "";
    alert("Your suggestion has been submitted successfully");
})


// Logic To Make Responsive Website 
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');

let responsive = false;
burger.addEventListener('click', ()=>{
        navbar.classList.toggle("nav-toggle");
        navList.classList.toggle("navList-toggle");

})
