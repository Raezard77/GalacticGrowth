// DOCs
// You have to give IDs to form elements like in Vars



// TODOs
// mv to back-end
// `required` is useless
// Style Warnings
// nofollow && noopener



// Vars
const signupForm = document.querySelector("#signup-form")
const passwd = document.querySelector("#passwd")
const confirmPasswd = document.querySelector("#confirm-passwd")




// $
signupForm.addEventListener("submit", e => {
    if (passwd.value != confirmPasswd.value) {
        e.preventDefault()
        alert("Passwords Don't Match")
    }
})
