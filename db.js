//User Password Test
function user_test() {
    var password_input = document.getElementById('user_test_password');
    if (password_input.value == 'mayura') {
        document.getElementById('user_identify').style.display = 'none';
        document.body.style.backgroundColor = "rgb(219, 219, 219)";
        document.body.style.backgroundImage='none';
        document.getElementById('main_ui').style.display = 'block';

    }
}

function student_data() {
    document.getElementById('toggle_student_data_model').click();
  }