function validation(value) {
  //UserName
  var userName = document.getElementById("userName").value;
  var firstInputBox = document.getElementById("userName");
  var names = document.getElementById("name");

  //Email input
  var emailvalue = document.getElementById("email").value;
  var emailInputBox = document.getElementById("email");
  var emails = document.getElementById("emails");


  //Password
  var password = document.validation_form.password;
  var psw_value = password.value;
  var message = document.getElementById("message");
  
  
  //Confirm Password  
  var confirm_psw = document.getElementById("confirm_psw").value;
  var psw_msg = document.getElementById("psw_message");
  var confirmpswInputBox = document.getElementById("confirm_psw");


  //userName
  if (userName.length >= 3 || userName.length <=25) {
   names.textContent = "Username must be between 3 and 25 characters";
    (names.style.color = "red"), (names.style.fontSize = "20px");
    firstInputBox.style.borderColor ="red";
   
  }

  //email
   if (emailvalue.length <= 0) {
    emails.textContent = "Enter valid Email Id";
    (emails.style.color = "red"), (emails.style.fontSize = "20px");
    emailInputBox.style.borderColor="red";
    password.style.borderColor="red"; 
  }
  if (!emailvalue.match(/[~!@#$%^&*()]/)) {
    emails.textContent = "Enter valid Email Id";
    (emails.style.color = "red"), (emails.style.fontSize = "20px");
    
  }

  //confirm pswd
  if (psw_value != confirm_psw ) {
    psw_msg.textContent = "Password doestn't match";
    (psw_msg.style.color = "red"), (psw_msg.style.fontSize = "20px");
    confirmpswInputBox.style.borderColor="red";
    return false;
   
  }

  //psw
  if (psw_value <= 0) {
    message.textContent =
      "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 specila character in (!@#$%^&*())";
    (message.style.color = "red"), (message.style.fontSize = "20px");
    return false;
  } else if (!password.value.match(/[A-Z]/)) {
    message.textContent = "Password must Contains atleast One UpperCase Letter";
    (message.style.color = "red"), (message.style.fontSize = "20px");
    return false;
  } else if (!password.value.match(/[a-z]/)) {
    message.textContent = "Password must Contains atleast One LowerCase Letter";
    (message.style.color = "red"), (message.style.fontSize = "20px");
    return false;
  } else if (!password.value.match(/[0-9]/)) {
    message.textContent = "Password must Contains Numbers";
    (message.style.color = "red"), (message.style.fontSize = "20px");
     return false;
  } else if (!password.value.match(/[~!@#$%^&*()]/)) {
    message.textContent = "Password must Contains symbols";
    (message.style.color = "red"), (message.style.fontSize = "20px");
     return false;
  }


  return true;
}

