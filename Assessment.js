function formValidation() {
  var fname = document.validation_form.firstName;
  var email = document.validation_form.email;
  var number = document.validation_form.number;
  var gender = document.validation_form.gender;
  var genderValue = gender.value;
 // var hobbies = document.validation_form.hobbies.checked;
  var userCountry = document.getElementById("country");

  // var userCountryValue = userCountry.option.value;

  if (fname.value.length <= 0) {
    document.getElementById("fname").innerHTML = "Please Enter Your Name";

  }
  if (email.value.length <= 0) {
    document.getElementById("email").innerHTML = "Please Enter Your Email Address";

  }
   if (number.value.length <= 0) {
      document.getElementById("number").innerHTML = "Enter Valid data";

    }
  if(genderValue.length <= 0){
      document.getElementById("gender").innerHTML = "Enter Valid data";
  
  }
  if(validation_form.hobbies[0].checked==false && validation_form.hobbies[1].checked==false && validation_form.hobbies[2].checked==false ){
      document.getElementById("hobbiesValidation").innerHTML = "Enter Valid data";
     
  }

  if (userCountry.value == "") {
    document.getElementById("countryValidation").innerHTML =
      "Select the country";
    // alert("Enter")
   
    return false;
  }
  return true;
}
