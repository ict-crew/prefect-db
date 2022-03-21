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
        submitGuess();
        // show_student_details()
       

        if (back_to == 'true') {
            back_to_screen1 = setTimeout(back_to_screen_server, 10000);
            back_to = 'false';
        }
        else if (back_to == 'false'){
            clearTimeout(back_to_screen1);
            back_to_screen1 = setTimeout(back_to_screen_server, 10000);
        }
        

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
// This function will show data element when clicked enter
function show_student_details() {
    document.getElementById('screen_server').style.display = 'none';
    document.getElementById('after_scan_main').style.display = 'flex';
}

const submitGuess = () =>{
    console.log('Enter has been pressed')

    //Start Server
    start_server(currentGuess.dataset.letters)

    //Doble Check Dard Data
    doble_check_card(currentGuess.dataset.letters)

    // Change Name
    var main_name = document.getElementById("name");
    var st_avater = document.getElementById("avater");
    if (currentGuess.dataset.letters == '24108') {
        show_student_details()
        main_name.innerHTML = "Dinujaya Sandaruwan";
        st_avater.src="img/me.jpeg";
        document.cookie = "24108=24108;";
    }
    if (currentGuess.dataset.letters == '24109') {
        show_student_details()
        main_name.innerHTML = "Heshani Mahinsala";
        st_avater.src="img/dummy/heshani.jpg";
        document.cookie = "24109=24109;";
    }
    if (currentGuess.dataset.letters == '24110') {
        show_student_details()
        main_name.innerHTML = "Saman Kumara";
        st_avater.src="img/dummy/1.jpg";
        document.cookie = "24110=24110;";
    }
    if (currentGuess.dataset.letters == '24111') {
        show_student_details()
        main_name.innerHTML = "Dinesh Gamage";
        st_avater.src="img/dummy/2.jpg";
        document.cookie = "24111=24111;";
    }
    if (currentGuess.dataset.letters == '24112') {
        show_student_details()
        main_name.innerHTML = "Sirimath Sugathapala";
        st_avater.src="img/dummy/3.jpg";
        document.cookie = "24112=24112;";
    }
    if (currentGuess.dataset.letters == '24113') {
        show_student_details()
        main_name.innerHTML = "Wasantha Kapuge";
        st_avater.src="img/dummy/4.jpg";
        document.cookie = "24113=24113;";
    }
    if (currentGuess.dataset.letters == '6604') {
        start_process_bar()
        document.cookie = "start_server=server_started;";
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

// Start Server
function start_server(server_key) {
    if (server_key == '1234') {
        const dark_bg_and_hedding = document.getElementById('server_not_started');
        dark_bg_and_hedding.style.display = 'none';
        document.cookie = "start=start;";
    }

}


// Doble Check Card

function doble_check_card(Typed_test){  

    if (getCookie('24108') == Typed_test) {
        
        var open_doble_check_model = document.getElementById('open_doble_check_model');
        var model_dark_bg = document.getElementById('model_dark_bg');
        model_dark_bg.classList.add('show-model-bg')
        remove_doble_check_model = setTimeout(remove_doble_check_model_fun, 3000);
        function remove_doble_check_model_fun() {
            model_dark_bg.classList.remove('show-model-bg')
        }
    }
    
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


//upload Data to Server 

function start_process_bar() {
    document.getElementById('screen_server').style.display = 'none';
    document.getElementById('data_upload_main').style.display = "flex";

    const progressBar = document.getElementsByClassName('progress-bar')[0]
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
        progressBar.style.setProperty('--width', width + .1)
    }, 5)

    setTimeout(display_sucess_message, 5000);
    function display_sucess_message() {
        clearTimeout(back_to_screen1);
        document.getElementById('data_upload_test').style.display = "block";
        document.getElementById('server_down').style.display = "block";
        document.body.style.backgroundImage = "url('img/bg-black-white.jpg')";
    }
    
}