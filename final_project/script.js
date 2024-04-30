//Navigation Menu for Smaller Screens

let menuIcon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {
  navigation.classList.toggle('toggle');
  header.classList.toggle('toggle');
}

menuIcon.addEventListener('click', toggleNav);

//Changing Background Color with Button

const colorButton = document.getElementById('colorbutton');
const body = document.getElementById('body');

colorButton.addEventListener('click', function() {
let randomHue = Math.floor(Math.random() * 360);
console.log('Random hue:', randomHue) 
body.style.backgroundImage = 'none'
body.style.backgroundColor = 'hsl(' + randomHue + ', 100%, 50%)';})

//Changing Text

let smcount=1;
function change_text(){
    if(smcount%2 == 1){
        document.getElementById("contact").innerHTML = "New York, NY 10010 | (774)-719-8436 | eyt8724@nyu.edu | LinkedIn: linkedin.com/in/elizabeth-tang-a41147257";
    smcount += 1;
    }

    else{
        document.getElementById("contact").innerHTML = "Hello and welcome to my page! This is a page all about some of the experiences I have had very briefly. I enjoy showcasing some fo the extracurriculars I am involved with as well as events I have planned. Moreover, I would love to explain them in detail if you have any questions you may have, so please feel free to send me a message.";
        smcount += 1;
    }
}