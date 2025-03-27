var error = new Error("Invalid arguments")

let CookiesArray = {}
function getCookie (cookieName) {
    if(arguments.length != 1 || cookieName === '') 
        throw error;
        else {
        var cookieParts = document.cookie.split(";")
        for (let i = 0; i < cookieParts.length; i++) {
            var cookie = cookieParts[i].trim()
            var parts = cookie.split("=");
            if (parts[0] == cookieName) {
                var cookieValue = parts[1];
                return cookieValue
            }
            else {
                return "No cookie found"
            }
        }
    }
}
function setCookie (cookieName,cookieValue,expiryDate) {
    if(arguments.length < 2 || cookieName === '' || cookieValue === '' || cookieName === "undefined" || cookieValue === "undefined") 
        throw error;
    const newDate = new Date();
    let expires = "expires="+ newDate.toUTCString();
    newDate.setTime(newDate.getTime() - 86400000)
    // expiryDate === undefined? 
    document.cookie = cookieName + "=" + cookieValue + ";" 
    // : 
    // document.cookie =cookieName + "="+ cookieValue  + ";expires=" + expiryDate
}
function deleteCookie (cookieName) {
    if(arguments.length != 1 || cookieName === '') 
    throw error;
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
function allCookieList () {
    if(arguments.length != 0) 
    throw error;
    var cookieParts = document.cookie.split(";")
    for (let i = 0; i < cookieParts.length; i++) {
        var cookie = cookieParts[i].trim()
        var parts = cookie.split("=");
        return parts
    }
}
function hasCookie (cookieName) {
    return document.cookie.includes(cookieName + "=");
}


