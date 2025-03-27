let message = prompt("Enter the message", "")
var reversedMessage = "";
var CaseSens = confirm("Do you want to consider Case Sensitivity", "")
let output;

// Check if pattern is not found or the entered message is empty
if (message.length === 0) {
    document.write("entered message is empty")
}
else {
    
//  Check if CaseSens is true // 2 for loops problem REFACTORING

    if(CaseSens){
        for(let i=message.length -1; i>=0; i--){
            reversedMessage+=message[i]
        }
        
        for(let i=0; i<=message.length - 1; i++){
            if(message[i] != reversedMessage[i]) {
                output = false
            }
            else if (message[i] === reversedMessage[i] && output != false) {
                output = true
            }
    }
    } else {
        for(let i=message.length -1; i>=0; i--){
            reversedMessage+=message[i]
        }
        
        for(let i=0; i<=message.length - 1 ; i++){
            if (message[i] = reversedMessage[i] && output != false) {
                output = true
            }
            else if(message[i] != reversedMessage[i]) {
                output = false
            }
        }
    }
    
    document.writeln(output)
}
