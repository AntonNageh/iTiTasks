let textarea = document.getElementById("textarea");
var CustEvent = new Event("myEvent");

let timer = setInterval(function () {
    console.log(textarea.value)
    textarea.value === "" ? textarea.dispatchEvent(CustEvent) : null
}, 3000) //should be 30 secs

textarea.addEventListener("myEvent", function () {
   document.body.innerHTML += ("You have not entered any data" + "<br/>")
})

