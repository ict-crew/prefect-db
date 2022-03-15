// console.log("saman")

// Get date and time

let today = new Date();

let hours = addZero(today.getHours());
let minutes = addZero(today.getMinutes());
let seconds = addZero(today.getSeconds());
let current_time = `${hours}:${minutes}:${seconds}`;
// output.innerText = current_time;

function addZero(num){
    return num < 10 ? `0${num}`:num;
}

//Dict Keypress

const letters_patten = /[0-9]/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount);
//let currentLetters = currentGuess.dataset.letters;
// ditact keypress (letter, backspace, other)
document.addEventListener("keydown", (e) => {
    console.log('keypress: ' + e.key);

    //If key press is string of length is a letter
    let keypress = e.key;
    if (keypress.length == 1 && letters_patten.test(e.key)) {
       // If  a Letter 
        // let is_letter = ;
        console.log('is letter');
        updateLetters(keypress)
    }
    else if (e.key == 'Enter') {
        submitGuess();
    }


//update tile markup
const updateTiles = () => {
    
}

});

// Update Letters
const updateLetters = (letter) => {
    console.log('currentGuessCount = ' + currentGuessCount, 
                '\ncurrentGuess.dataset.letters = ' + currentGuess.dataset.letters,
                '\nupdate Letters = ' + letter);
    currentGuess.dataset.letters = currentGuess.dataset.letters + letter;
    console.log('Updated currentGuess.dataset.letters = ' + currentGuess.dataset.letters);

}

const submitGuess = () =>{
    console.log('Enter has been pressed')
    // Change Name
    var main_name = document.getElementById("name");
    if (currentGuess.dataset.letters == '24108') {
        main_name.innerHTML = "Dinujaya Sandaruwan";
        document.cookie = "dinujaya=true;";
    }
    if (currentGuess.dataset.letters == '24109') {
        main_name.innerHTML = "Heshani Mahinsala";
        document.cookie = "heshani=true;";
    }
    //Change Time
    came_time = document.getElementById('came_time');
    came_time.innerHTML = 'Came to school at :- ' + current_time + ' A.M';
    // main_name.innerText = currentGuess.dataset.letters;
    currentGuess.dataset.letters =''
    // alert("Your Number is" + currentGuess.dataset.letters);


}


// document.cookie = "dinujaya=true;";

console.log(getCookie('dinujaya'))

// Get Cookies
function getCookie(name) {
    var cookie, c;
    cookies = document.cookie.split(';');
    for (var i=0; i < cookies.length; i++) {
        c = cookies[i].split('=');
        if (c[0] == name) {
            return c[1];
        }
    }
    return "";
}