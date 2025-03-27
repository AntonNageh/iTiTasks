
function TwoParams (a,b) {
    if(arguments.length != 2 || a === '' || b === '') 
        throw new Error("Invalid arguments");
    return console.log(a,b);
}
function adding(){
    let sum = 0
    if(arguments.length < 2) 
        throw new Error("Invalid arguments");
    for(let i=0; i < arguments.length; i++){
        if(typeof(arguments[i]) != "number") 
        throw new Error("Invalid arguments");
        else {
            sum +=arguments[i]
        }
}
    return console.log(sum)
}