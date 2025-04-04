let obj = {street: "abc st.",buildingNum:15,city:"xyz"}
var now = new Date()
function showAddr (obj) {
    return document.write(obj["buildingNum"] + " " + obj["street"] + "," + obj["city"] + " registered in " + now.toLocaleString())
}
showAddr(obj)
