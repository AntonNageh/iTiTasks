

let CookiesArray = {}
function getCookie (cookieName) {
    var cookieParts = document.cookie.split(";")
    for (let i = 0; i < cookieParts.length; i++) {
        var cookie = cookieParts[i].trim()
        var parts = cookie.split("=");
        if (parts[0] == cookieName) {
            var cookieValue = parts[1];
        }
    }
    return cookieValue
}
function setCookie (cookieName,cookieValue,expiryDate) {
    const newDate = new Date();
    let expires = "expires="+ newDate.toUTCString();
    newDate.setTime(newDate.getTime() - 86400000)
    // expiryDate === undefined? 
    document.cookie = cookieName + "=" + cookieValue + ";" 
    // : 
    // document.cookie =cookieName + "="+ cookieValue  + ";expires=" + expiryDate
}
function deleteCookie (cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
function allCookieList () {
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


