let input1val = document.getElementById("input1")
let input2val = document.getElementById("input2")
let input3val = document.getElementById("input3")



function SetNewCookie (){
    setCookie(input1val.value, input2val.value)
}

function getCookieName () {
    var cookieValue = getCookie(input3val.value)
    console.log(cookieValue)
}
