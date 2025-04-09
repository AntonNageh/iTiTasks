
function Register(){
    var username = document.getElementById("name");
    var age = document.getElementById("age");
    var color = document.getElementById("color")
    var genderMale = document.getElementById("male");
    var genderFemale = document.getElementById("female");
    let counter = 0;

    (genderMale.checked)? (gender = "male") :(genderFemale.checked)? (gender = "female") : (gender = "unknown") 

    setCookie("name",username.value)
    setCookie("age",age.value)
    setCookie("gender",gender)
    setCookie("color",color.value)
    setCookie("counter", counter)

   // redirecting to Profile page
    location.assign("profilePage.html")
    }