//Profile page content

let profilePage = document.getElementById("profilePage")
let Firstname = getCookie("name")
let Newage = getCookie("age")
let Newgender = getCookie("gender")
let Newcolor = getCookie("color")
let newCounter = Number(getCookie("counter"));
newCounter++
setCookie("counter", newCounter)
let genderImg = (Newgender == "male")? "assets/1.jpg" : "assets/2.jpg"
profilePage.innerHTML = "<h1>Welcome <span style='color: " +
 Newcolor + "'>" + Firstname + "</h1> <p>Age : " 
 + Newage + "</p> <p>Gender : "
 + Newgender + "<p>You have visited this page " + newCounter + " times</p>" 
 + "<img src='" + genderImg + "'>" + "</p> <p>Favorite Color : " + Newcolor + "</p>"