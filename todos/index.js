//creat


//update



//delete


//home n about

const home = document.getElementById("home-btn")
const about = document.getElementById("about-btn")
const aboutText = document.getElementById("about")
const homeText = document.getElementById("home")
homeText.style.display = "block";
aboutText.style.display = "none";

about.addEventListener("click", ()=> {
  aboutText.style.display = "block"
  homeText.style.display = "none"
})

home.addEventListener("click", ()=>{
  aboutText.style.display = "none"
  homeText.style.display = "block"
})