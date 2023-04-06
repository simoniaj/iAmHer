// Audio funky business
let pageloadSFX = document.getElementById("pageloadSFX")
let lightmodeSFX = document.getElementById("lightmodeSFX")
let darkmodeSFX = document.getElementById("darkmodeSFX")

//Toggle dark mode from darkmodeswitch.css
let toggleDarkBtn = document.getElementById("darkmodeswitch")
var darkmodeBool = false
function darkMode(){
    document.body.classList.toggle("dark-mode")
    if (darkmodeBool == false){
      darkmodeSFX.play()
      darkmodeBool = true
      console.log(darkmodeBool)
    }
    else{
      lightmodeSFX.play()
      darkmodeBool = false
      console.log(darkmodeBool)
    }    

    //Get scrollbar
    let thumb = document.querySelector('::-webkit-scrollbar-thumb')
    let scrollbg = document.querySelector('::-webkit-scrollbar-track')
    thumb.classList.toggle("dark-mode")
    scrollbg.classList.toggle("dark-mode")

}

darkmodeSFX.addEventListener("canplaythrough", function() {
  console.log("The audio element is loaded and ready to play")
});

//Add dark mode toggle function to dark mode switch
toggleDarkBtn.addEventListener("click", darkMode)

// Keep track of signatures on page
let signatures = document.getElementById("signatures") //Container holding signatures (ul)
let sigList = document.getElementsByClassName("signature") //List of all signatures (array)
let sigCount = document.getElementById("sigCount") //P tag which displays number of signatures (p)

// Get form input fields, get data from fields using .value later
let formName =  document.getElementById("formName")
let formTown = document.getElementById("formTown")
let formEmail = document.getElementById("formEmail")
let submitBtn = document.getElementById("submit")

//In the event that an email address is not a .com, or a box is blank, Error will have text
let Error = document.getElementById("Error")

submitBtn.addEventListener("click", function(e){
    // Prevent page from reloading on submission
    e.preventDefault()
    
    //Check for valid email, if email is valid, remove red border if exists
    if (formEmail.value.includes(".com")){
        formEmail.style.border = "solid 1px gray"
        //Same for valid name
        if (!formName.value == ""){
            formName.style.border = "solid 1px gray"
            //Same for valid town
            if (!formTown.value == ""){
                formTown.style.border = "solid 1px gray"

                //If all are valid:
                    //Update number of signatures
                sigCount.innerText = "Number of signatures: " + (sigList.length+1)
                    //Instantiate new signature for the list
                let newSignature = document.createElement("li")
                newSignature.innerText = formName.value + " from " +formTown.value + " has signed"
                newSignature.classList = "signature"
                    //Add new signature to list of classes
                signatures.appendChild(newSignature)
                    //Remove all error messages
                Error.innerText = ""
                modalMessage.innerText = formName.value
                pageloadSFX.play()
                // Display the modal
                showModal()
            }//If no town
            else{Error.innerText= "Error, please provide a town."
                 formTown.style.border = "solid 3px red"}
        }//If no name
        else{Error.innerText = "Error, please provide a name."
             formName.style.border = "solid 3px red"}
    }//If no or invalid email
    else{Error.innerText = "Error, please provide a valid email address."
         formEmail.style.border = "solid 3px red"}
})


//Reveal on scroll animation

//Check for scroll event, call reveal function
window.addEventListener('scroll', reveal)
let reveals = document.querySelectorAll('.reveal')
// An explanation for why I used querySelectorAll instead of getElementsByClassName:

// getElementsByClassName("className") is an older method that has been around since earlier versions of JavaScript. It is used to select all elements
//  in the DOM that have a specific class name, specified as a string. It returns a live HTMLCollection object that contains all the
//   elements that match the specified class name. Unlike the NodeList, the HTMLCollection is updated dynamically when changes are
//    made to the DOM, which can be both helpful and sometimes cause unexpected behavior.

// querySelectorAll(".className") is a newer method introduced in the DOM API 
// of JavaScript. It is used to select all elements in the DOM that have a specific class name, specified as a CSS selector. 
// It returns a static NodeList object that contains all the elements that match the specified selector. The NodeList object is similar to an array

//Toggle animation on/off
let toggleScrollAnim = document.getElementById("motionreduce")
toggleScrollAnim.addEventListener("click",function(){
    for(let i = 0; i < reveals.length; i++){
        reveals[i].classList.toggle('reveal')
    }
})



function reveal(){
    // let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i < reveals.length; i++){

    //Calculates what we can see and what we've cropped past already
    let windowheight = window.innerHeight
    let revealtop = reveals[i].getBoundingClientRect().top
    let revealpoint = 25
    
    //Adds active class to any .reveal elements, which makes them visible
    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active')
    }
    else{
    //Removes active class from elements we scroll up past
    reveals[i].classList.remove('active')
    }
  }
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let modalclose = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
modalclose.addEventListener("click", function() {
  modal.style.display = "none";
})

function showModal() {
    modal.style.display = "block";
    setTimeout(function() {
      modal.style.display = "none";
    }, 5000); // 5000 milliseconds = 5 seconds
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Get the Pray button
let Pray = document.getElementById("submitprayer")
Pray.addEventListener("click", function(e){
  e.preventDefault()
  pageloadSFX.play()
  document.getElementById("requestprayer").style.display = "block"
  setTimeout(function() {
  document.getElementById("requestprayer").style.display="none"
  }, 5000); // 5000 milliseconds = 5 seconds
})

// Share Button 
rotated = false
function sharebutton(){
  var action = document.querySelector('.sharebutton');
  action.classList.toggle('active')

  //Rotate the X
  let sharebutton = document.getElementsByClassName("sharebutton")[0]
  let plus = sharebutton.children[0] //The plus button in the span tags
  if(rotated == false){
    plus.style.transform = "rotate(45deg)"
    rotated = true
  }
  else{
    plus.style.transform = "rotate(0deg)"
    rotated = false
  }
}

//Get the search button
let search = document.getElementById('submitsearch')
//Get the searchbar input and search for it on Goggle
search.addEventListener("click",function(){
  let query = document.getElementById("searchquery").value
  let url = "https://www.google.com/search?q=" + encodeURIComponent(query);
  window.open(url, "_blank");
})

//Slides JS
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  //Make the slideshow loop instead of overflow on button click
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeDot";
}


