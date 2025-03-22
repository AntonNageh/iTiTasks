let obj = {nm:"ali", age:"5"}
let request = prompt("Enter the key", "")
function showAddr (obj, key) {
    if(key === "nm")
    {
        document.write(obj[key] + " is your name.")
    }
    else if (key === "age"){
        document.write(obj[key] + " years old.")
    }
    else {
        document.writeln("Invalid key")
    }
}    

showAddr(obj, request)
