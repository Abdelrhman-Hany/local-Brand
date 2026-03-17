function search(){
    let searchBar = document.querySelector('.search-input') .value.toUpperCase();
    let product=document.querySelectorAll('.product-card');
    let getname = document.getElementsByTagName('h3');
    for (let i = 0; i < getname.length; i++){
        if (getname[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
            product[i].style.display = "";
        }
        else{
            product[i].style.display = "none";
        }
       
    }
}


//------------------------------محدش يعدل حاجة تحت -------------------------------------

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorDiv = document.getElementById('signupError');
    errorDiv.textContent = "";
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        errorDiv.textContent = "Please fill in all fields.";
        errorDiv.style.color = "red";
    } else if (password !== confirmPassword) {
        errorDiv.textContent = "Passwords do not match.";
        errorDiv.style.color = "red";
    } else {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        errorDiv.textContent = `Welcome ${name}! Your account has been created.`;
        errorDiv.style.color = "green";}}

function handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value.trim();
    const errorDiv = document.getElementById('signinError');
    errorDiv.textContent = "";
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email === "" || password === "") {
        errorDiv.textContent = "Please enter both email and password.";
        errorDiv.style.color = "red";
} else if (email !== storedEmail || password !== storedPassword) {
        errorDiv.textContent = "Invalid email or password.";
        errorDiv.style.color = "red";
    } else {
        errorDiv.textContent = "Welcome back!";
        errorDiv.style.color = "green";
        window.location.href = "homePage.html";}}
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", handleSignup);}
    const signinForm = document.getElementById("signinForm");
    if (signinForm) {
        signinForm.addEventListener("submit", handleSignIn);}});


//--------------------------خلصت signin and signup pages----------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card) => {
        const tooltip = card.querySelector(".tooltip");
        card.addEventListener("mouseover", () => {
            tooltip.textContent = "Viewing only";
            tooltip.style.position = "absolute";
            tooltip.style.display = "block";});
        card.addEventListener("mouseout", () => {
            tooltip.style.display = "none";
        });
    });
});

