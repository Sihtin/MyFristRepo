function formValidation() {
    var fname = document.validation_form.firstName;
    var email = document.validation_form.email;
    var number = document.validation_form.number;
    var gender = document.validation_form.gender;
    var genderValue = gender.value;
    var hobbies = document.validation_form.Hobbies;
    var hobbiesValue = hobbies.value;
    var country = document.validation_form.country;


    //file format validtion
    var fileUpload = document.reg_form.fileUpload;
    var filepath = fileUpload.value;
    var fileextension = /\w+\.pdf/g;
    var file = filepath.match(fileextension);
    
    if (fname.value.length <= 0) {
      document.getElementById("fname").innerHTML = "Please Enter Your Name";
     
    }
    if (email.value.length <= 0) {
      document.getElementById("email").innerHTML = "Please Enter Your Email Address";
    
    }
     if (number.value.length <= 0) {
        document.getElementById("number").innerHTML = "Enter Valida";
       
      }
    if(genderValue.length <= 0){
        document.getElementById("gender").innerHTML = "Enter Valid data";
    return false;
    }
    if(hobbiesValue.length <= 0){
        document.getElementById("hobbies").innerHTML = "Enter Valid data";
      console.log(hobbiesValue);
        return false;
    }
    if(country.value.length <=0){
        document.getElementById("country").innerHTML = "Select the country";

        return false;
    }
return true;
  }

 