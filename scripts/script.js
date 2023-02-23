function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

// Get the dropdown container element
const dropdownContainer = document.getElementById("dropdown-container");


// Get all the buttons
const buttons = document.querySelectorAll(".bt");

// Added a click event listener to each button
buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    // Show the dropdown container
    dropdownContainer.style.display = "flex";
    dropdownContainer.style.justifyContent = "space-evenly";

    // Prevent the document click event from hiding the dropdown
    event.stopPropagation();
  });
});

// Add a click event listener to the document
window.addEventListener("click", () => {
  // Hide the dropdown container
  dropdownContainer.style.display = "none";
});

const renderMain = document.getElementById("logos")

renderMain.addEventListener("click",()=>{
  location.href = "./index.html"
  
})

//First Link section

const firstLink = document.getElementById("firstLink")
const secondLink= document.getElementById("secondLink")

firstLink.addEventListener("click",()=>{
    //Here below instead of hashTag give the first Link
    location.href = "#"
})
secondLink.addEventListener("click",()=>{

    //Here below instead of hashTag give the second Link
    location.href = "#"
}) 
const url = "https://api.escuelajs.co/api/v1/users"
let usersData = JSON.parse(localStorage.getItem("usersData"))||[]
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.forEach((el)=>{
       let obj = {
        name : el.name,
        email : el.email,
        password: el.password,
        avatar : el.avatar,
        role :el.role
       }
       usersData.push(obj)
       console.log(usersData)
       localStorage.setItem("usersdata",JSON.stringify(usersData))
    })
})

let birk =  document.querySelector(".birk")
birk.addEventListener("click",()=>{
  location.href="./women.html"
})


//FOR THE FIRST IMAGE CAROUSEL


let span1 = document.querySelector("#span1")
let span2 = document.querySelector("#span2")
let div = document.querySelectorAll(".sec>div")

var l=0
span2.onclick=()=>{
  l++;
  for(var i of  div){
    if(l==0){i.style.left="0px"}
    if(l==1){i.style.left="-740px"}
    if(l==2){i.style.left="-1480px"}
    if(l==3){i.style.left="-2220px"}
    if(l==4){i.style.left="-2960px"}
    if(l==5){i.style.left="-3700px"}
    if(l>5){l=5;}
  }
}
span1.onclick=()=>{
  l--;
  for(var i of  div){
    if(l==0){i.style.left="0px"}
    if(l==1){i.style.left="-740px"}
    if(l==2){i.style.left="-1480px"}
    if(l==3){i.style.left="-2220px"}
    if(l==4){i.style.left="-2960px"}
    
    if(l<0){l=0}
  }
}
