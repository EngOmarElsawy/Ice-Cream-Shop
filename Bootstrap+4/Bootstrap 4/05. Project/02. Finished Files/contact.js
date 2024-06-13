var message = document.getElementById('message')
var email = document.getElementById('email')
var namee = document.getElementById('name')
var phone = document.getElementById('phone')

function login() {
    if (namee.value === '') {
        swal("Opps", "You Didn't Enter the Message text", "error")
    } else if (phone.value === '') {
        swal("Opps", "You Didn't Enter Phone Number", "error")
    } else if (email.value === '') {
        swal("Opps", "You Didn't Enter Your Email", "error")
    } else if (message.value === '') {
        swal("Opps", "You Didn't Enter Your Message", "error")
    } else {
        swal("Sent", "Message Sent Successfully", "success")
    }

}
message.addEventListener('keyup', function(event) {
    event.preventDefault()
    if (event.keyCode === 13) {
        email.click()
    }
})

function lci() {
    swal("Sent", "hjhjj", "info")
}