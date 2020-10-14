let username = document.getElementById("emailorphone");
let password = document.getElementById("password");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

var RegNumbers1 = /^(\d{3}) (\d{3}) (\d{4})$/;
var RegNumbers2 = /^(\d{3})+(\d{3})+(\d{4})$/;
var RegNumbers3 = /^(\d{3}).(\d{3}).(\d{4})$/;
var RegNumbers0 = /^(\d{10})&/

var RegEmail1 = /^([\w\.\-]+)@([\w\-]+).([a-z]{2,3})$/;
var RegEmail2 = /^([\w\.\-]+)@([\w\-]+).([a-z]{2,3}).([a-z]{2})$/;



// Check if Email or Phone number is legitimate //



function check1() {
  if (username.value == "") {
    error1.innerHTML = "Field is empty!";
    errorstyle(error1,username)
    return false;
  } else if ((username.value.match(RegEmail1)) || (username.value.match(RegEmail2))) {
    error1.innerHTML = "Email is valid";
    successstyle(error1,username);
    return true;
  } else if ((username.value.match(RegNumbers1)) || (username.value.match(RegNumbers2)) || (username.value.match(RegNumbers3))) {
    error1.innerHTML = "Phone number is valid";
    successstyle(error1,username)
    return true;
  } else if (username.value.includes("@")) {
    error1.innerHTML = "Invalid email id!";
    errorstyle(error1,username)
    return false;
  } else if (username.value.match(/([\d]+)/)) {
    error1.innerHTML = "Invalid phone number!";
    errorstyle(error1,username)
    return false;

  } else {
    error1.innerHTML = "Invalid entry!";
    errorstyle(error1,username)
    return false;
  }

}



// Check if password is legitimate // 



function check2() {

  ispassword = 1;



  var haslowercase = (password.value.match(/[a-z]/));
  var hasuppercase = (password.value.match(/[A-Z]/));
  var hasnumber = (password.value.match(/\d/));

  if (password.value == "") {
    error2.innerHTML = "Password cannot be blank!";
    errorstyle(error2,password);
    return false;
  } else if (password.value.length < 8) {
    error2.innerHTML = "Password must contain at least eight characters!";
    errorstyle(error2,password);
    return false;
  } else if (haslowercase == null && hasuppercase != null && hasnumber != null) {
    error2.innerHTML = "Password must contain atleast one lowercase letter!";
    errorstyle(error2,password);
    return false;
  } else if (haslowercase != null && hasuppercase == null && hasnumber != null) {
    error2.innerHTML = "Password must contain atleast one uppercase letter!";
    errorstyle(error2,password);
    return false;
  } else if (haslowercase != null && hasuppercase != null && hasnumber == null) {
    error2.innerHTML = "Password must contain atleast one  number!";
    errorstyle(error2,password);
    return false;
  } else if (haslowercase == null && hasuppercase == null && hasnumber != null) {
    error2.innerHTML = "Password must contain atleast one lowercase and one uppercase!";
    errorstyle(error2,password);
    return false;
  } else if (haslowercase == null && hasuppercase != null && hasnumber == null) {
    error2.innerHTML = "Password must contain atleast one lowercase and one number!";
    errorstyle(error2,password);
    return false;
  } else if (haslowercase != null && hasuppercase == null && hasnumber == null) {
    error2.innerHTML = "Password must contain atelast one uppercase and one number!";
    errorstyle(error2,password);
    return false;
  } else if (username.value == password.value) {
    error2.innerHTML = "Username and password cannot be the same!";
    errorstyle(error2,password);
    return false;
  } else {
    error2.innerHTML = "Password is verified";
    successstyle(error2,password);
    return true;
  }
}



//Check if both email/phonenumber and password is legitimate


function check() {
  let a = check1()
  let b = check2()
  if (a && b) {
    return true;
  } else {
    return false;
  }
}



// Add strength meter for password// 



function passwordmeter() {

  if ((password.value.length > 0) && (password.value.length < 8))

  {
    password.style.color = "#fd5e53";

  } else if ((password.value.length >= 8) && (password.value.length < 12)) {


    password.style.color = "#f7b71d";

  } else if (password.value.length > 12) {


    password.style.color = "#21bf73";

  }


}



//Styling for commentbox



function errorstyle(error,borderof){
  error.style.color = "#ca2516";
  borderof.style.border = "4px #ca2516 solid "
}

function successstyle(success,borderof){
  success.style.color = "#323232";
  borderof.style.border = "4px #639a67 solid ";
}
