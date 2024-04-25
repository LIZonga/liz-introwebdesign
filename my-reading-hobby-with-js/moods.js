//Changing the Introduction Head by Day
let today = new Date();
console.log(Date.now());
let day = today.getDay();
console.log(day);
let introduction; 
let paragraph = document.getElementById('introhead'); 

if (day == 0) {
  introduction = 'Sunday Funday';
} else if (day == 1) {
  introduction = 'Moody Monday';
} else if (day == 2) {
  introduction = 'Tuesday Grooves';
} else if (day == 3) {
  introduction = 'Friendly Wednesday';
} else if (day == 4) {
  introduction = 'Thursday Honey';
} else if (day == 5) {
  introduction = 'Smiley Friday';
} else if (day == 6) {
  introduction = 'Snazzy Saturday';
} else {
  introduction = 'Introduction';
}

paragraph.textContent = introduction;

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
        document.getElementById("smile").innerHTML = "Smile by Raina Telgemeler is a Graphic memoir about Telgemeler's life from middle to high school describing the awkward phases of her early years. The story begins with a pivitol moemnt in her youth where she got her two front teeth knocked out in an accident with her friends. Her injuries and journey towards self love includes bits of comedy and wholesomeness as well as relationship dramas. Her friends are sometimes insensitive towards her situation and Telmegeler finds herself developing crushes on boys despite her embarrassment to smile. This is a cute book embracing smile.";
    smcount += 1;
    }

    else{
        document.getElementById("smile").innerHTML = "One of my favorite graphic novels based on a true story is called Smile by Raina Telgemeler; this book received many awards including being a best-seller for four years, the Boston Globe-Horn Book Honor, and the Eisner Award for Best Publication for Teens.";
        smcount += 1;
    }
}

//Extra Credit SVG
let menu_icon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('div');

function toggleNav() {
  navigation.classList.toggle('toggle');
  header.classList.toggle('toggle');
}

menu_icon.addEventListener('click', toggleNav);