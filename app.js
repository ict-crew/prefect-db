// console.log("saman")

var late_function = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            back_to = 'true';
        }
    };
})();
late_function();



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
        // console.log('is letter');
        updateLetters(keypress)
    }
    else if (e.key == 'Enter') {
        document.getElementById('screen_server').style.display = 'none';
        document.getElementById('after_scan_main').style.display = 'flex';
        submitGuess();

        if (back_to == 'true') {
            back_to_screen1 = setTimeout(back_to_screen_server, 10000);
            back_to = 'false';
        }
        else if (back_to == 'false'){
            clearTimeout(back_to_screen1);
            back_to_screen1 = setTimeout(back_to_screen_server, 10000);
        }
        
        
        

        
        // console.log('saman')
        
        
        // var check_element = document.getElementById('after_scan_main');

        // if (check_element.style.display != 'flex') {
        //     
        // }
        

    }
function back_to_screen_server() {
    document.getElementById('screen_server').style.display = 'flex';
    document.getElementById('after_scan_main').style.display = 'none';
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

    //Doble Check Dard Data
    doble_check_card()

    // Change Name
    var main_name = document.getElementById("name");
    var st_avater = document.getElementById("avater");
    if (currentGuess.dataset.letters == '24108') {
        main_name.innerHTML = "Dinujaya Sandaruwan";
        st_avater.src="img/me.jpeg";
        document.cookie = "24108=24108;";
    }
    if (currentGuess.dataset.letters == '24109') {
        main_name.innerHTML = "Heshani Mahinsala";
        st_avater.src="img/dummy/heshani.jpg";
        document.cookie = "24109=24109;";
    }
    if (currentGuess.dataset.letters == '24110') {
        main_name.innerHTML = "Saman Kumara";
        st_avater.src="img/dummy/1.jpg";
        document.cookie = "24110=24110;";
    }
    if (currentGuess.dataset.letters == '24111') {
        main_name.innerHTML = "Dinesh Gamage";
        st_avater.src="img/dummy/2.jpg";
        document.cookie = "24111=24111;";
    }
    if (currentGuess.dataset.letters == '24112') {
        main_name.innerHTML = "Sirimath Sugathapala";
        st_avater.src="img/dummy/3.jpg";
        document.cookie = "24112=24112;";
    }
    if (currentGuess.dataset.letters == '24113') {
        main_name.innerHTML = "Wasantha Kapuge";
        st_avater.src="img/dummy/4.jpg";
        document.cookie = "24113=24113;";
    }

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

    //Change Time
    came_time = document.getElementById('came_time');
    came_time.innerHTML = 'Came to school at :- ' + current_time + ' A.M';
    // main_name.innerText = currentGuess.dataset.letters;
    currentGuess.dataset.letters =''
    // alert("Your Number is" + currentGuess.dataset.letters);
}

// document.cookie = "dinujaya=true;";

// console.log(getCookie('dinujaya'))

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


// Doble Check Card

function doble_check_card(){
    var cooke_value = currentGuess.dataset.letters;
    console.log(getCookie(24108))
    if (cooke_value == getCookie(24108)) {
        document.getElementById('id01').style.display='block'
        setTimeout(close_model_box, 3000);
        function close_model_box() {
            document.getElementById('id01').style.display='none'
        }

    }
     
}