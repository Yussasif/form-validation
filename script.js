
//create an object for user data base
let userData = {}

function getUserDetails(){

//Username
let userName = prompt('Enter Username')

//check if nothing is entered and enable the user to cancel
if (userName == null){
    return
}

function validateUserName (userName) {

    //set the username length
    if (userName.length >=3 && userName.length <= 10){
        return true
    }
    else{
        return false
    }
}

//prompting username until username is true
while (validateUserName(userName) == false){

    userName = prompt('Enter a valid username ( min = 3, max = 10)')
}

//add the user username to the data base
userData["UserName"] = userName


//Email
let email = prompt('Enter Email')

//check if nothing is entered and enable the user to cancel
if (email == null){
    return
}

function validateEmail(email){

    // create an email verification pattern
    const EMAIL_CHECK = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //test if the email match the required pattern
    emailCheckResult = EMAIL_CHECK.test(email)

    if (emailCheckResult == true){
        return true
    }
    else{
        return false
    }
}

//prompting Email until email is valid
while (validateEmail(email) == false){

    email = prompt('Enter a valid Email')
}

//add the user email to the data base
userData["Email"] = email

//Phone Number
let phoneNumber = prompt('Enter Phone Number')

//check if nothing is entered and enable the user to cancel
if (phoneNumber == null){
    return
}

function validatePhoneNumber(phoneNumber){

    //set phone number length
    if (phoneNumber.length == 11){
        return true
    }
    else{
        return false
    }
}

//prompting phone number until phone number is true
while (validatePhoneNumber(phoneNumber) == false){

    phoneNumber = prompt('Enter a valid Phone Number')
}

//add the user phone number to the data base
userData["PhoneNumber"] = phoneNumber

//Password
let password = prompt('Enter Password')

//check if nothing is entered and enable the user to cancel
if (password == null){
    return
}

function validatePassword(password){

    //set password length
    if (password.length >= 8 && password.length <= 15){
        return true
    }
    else{
        return false
    }

}

//prompting password until password is valid
while (validatePassword(password) == false){

    password = prompt('Enter a valid password ( min = 8, max = 15)')
}

//add the user password to the data base
userData["Password"] = password


//Confirm password
let confirmPassword = prompt('Confirm Password')

//check if nothing is entered and enable the user to cancel
if (confirmPassword == null){
    return
}

// checking if confirm password is equal to password
function validateConfirmPassword(confirmPassword){

    if (confirmPassword == password){
        return true
    }
    else{
        return false
    }
}
//prompting confirm password until its equal to password
while (validateConfirmPassword(confirmPassword) == false){

    confirmPassword = prompt('Enter same character as password')
}

//add the user email to the data base
userData["ConfirmPassword"] = confirmPassword

}

//display user details
function displayUserDetails(){

    alert(`USER DETAILS\n\n
    User Name: ${userData.UserName}\n
    Email: ${userData.Email}\n
    Phone Number: ${userData.PhoneNumber}\n
    Password: ${userData.Password}`)
}
