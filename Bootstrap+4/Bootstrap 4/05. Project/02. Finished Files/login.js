var email = document.getElementById('email')
var pass = document.getElementById('pwd')
var button = document.getElementById('enter')
var newEmail = document.getElementById('newuser')
var newPass = document.getElementById('newPass')
var regButton = document.getElementById('reg')


function check() {
    if (email.value === 'omar.future.123@gmail.com' & pass.value === 'Elsawy') {
        window.location.href = "index.html"
    } else if (email.value === '' | pass.value === '') {
        swal("Oops", "You didn't enter username or pasword", "error")
    } else {
        swal("Oops", "Invalid Username or Password", "error")
    }
}

function create() {
    if (newEmail.value === '') {
        swal("Oops", "You didn't enter email", "error")
    } else if (newPass.value === '') {
        swal("Oops", "You didn't enter pasword", "error")
    } else if (newPass.value.length < 8) {
        swal("Opps", "Your Password is less than 8 digits", "error")
    } else {
        window.location.href = './index.html'
    }
}

pass.addEventListener('keyup', function(event) {
    event.preventDefault()
    if (event.keyCode === 13) {
        button.click()
    }
})
newPass.addEventListener('keyup', function(event) {
    event.preventDefault()
    if (event.keyCode === 13) {
        regButton.click()
    }
})